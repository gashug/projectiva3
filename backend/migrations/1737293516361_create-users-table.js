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
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        clerk_user_id VARCHAR(255) UNIQUE NOT NULL, -- Store Clerk's User ID
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
  };
  
  /**
   * @type {import('node-pg-migrate').MigrationBuilder}
   */
  export const down = (pgm) => {
    pgm.sql(`
      DROP TABLE users;
    `);
  };