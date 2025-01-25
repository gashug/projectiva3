// backend/db/migrations/1737786277545_add-stages-to-projects.mjs

/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
export const up = (pgm) => {
    pgm.addColumn('projects', {
      stages: {
        type: 'JSONB',
        default: '{}',
        notNull: true,
      },
    });
  };
  
  /**
   * @type {import('node-pg-migrate').MigrationBuilder}
   */
  export const down = (pgm) => {
    pgm.dropColumn('projects', 'stages');
  };