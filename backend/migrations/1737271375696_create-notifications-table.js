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
        CREATE TABLE notifications (
            id SERIAL PRIMARY KEY,
            user_id INT,
            message TEXT NOT NULL,
            read BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
};

/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
export const down = (pgm) => {
    pgm.sql(`
        DROP TABLE notifications;
    `);
};