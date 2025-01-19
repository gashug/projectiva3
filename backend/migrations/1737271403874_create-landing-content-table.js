// /**
//  * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
//  */
// exports.shorthands = undefined;

import e from 'express';

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
        CREATE TABLE landing_content (
            id SERIAL PRIMARY KEY,
            section_name VARCHAR(255) NOT NULL,
            content JSONB,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
};

/**
 * @type {import('node-pg-migrate').MigrationBuilder} 
*/
export const down = (pgm) => {
    pgm.sql(`
        DROP TABLE landing_content;
    `);
};