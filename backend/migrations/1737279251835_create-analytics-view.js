// /**
//  * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
//  */
// exports.shorthands = undefined;

// /**
//  * @param pgm {import('node-pg-migrate').MigrationBuilder}
//  * @param run {() => void | undefined}
//  * @returns {Promise<void> | void}
//  */
// exports.up = (pgm) => {};

// /**
//  * @param pgm {import('node-pg-migrate').MigrationBuilder}
//  * @param run {() => void | undefined}
//  * @returns {Promise<void> | void}
//  */
// exports.down = (pgm) => {};

/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
export const up = (pgm) => {
    pgm.sql(`
      CREATE OR REPLACE VIEW analytics_view AS
      SELECT
        p.id AS project_id,
        p.name AS project_name,
        p.status AS project_status,
        COUNT(t.id) AS total_tasks,
        COUNT(t.id) FILTER (WHERE t.status = 'Completed') AS completed_tasks,
        COUNT(t.id) FILTER (WHERE t.status = 'In Progress') AS in_progress_tasks,
        COUNT(t.id) FILTER (WHERE t.status = 'To Do') AS todo_tasks,
        COUNT(t.id) FILTER (WHERE t.due_date < CURRENT_DATE AND t.status != 'Completed') AS overdue_tasks,
        AVG(CASE WHEN t.status = 'Completed' THEN 100 ELSE 0 END) AS task_completion_rate,
        (
          SELECT COUNT(*)
          FROM technicians
        ) AS total_technicians,
        (
          SELECT COUNT(*)
          FROM equipment
        ) AS total_equipment,
        (
          SELECT COUNT(*)
          FROM tools
        ) AS total_tools,
        p.created_at AS project_created_at
      FROM projects p
      LEFT JOIN tasks t ON p.id = t.project_id
      GROUP BY p.id
      ORDER BY p.created_at DESC;
    `);
  };
  
  /**
   * @type {import('node-pg-migrate').MigrationBuilder}
   */
  export const down = (pgm) => {
    pgm.sql(`
      DROP VIEW IF EXISTS analytics_view;
    `);
  };