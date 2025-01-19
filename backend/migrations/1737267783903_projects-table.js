// /**
//  * @type {import('node-pg-migrate').MigrationBuilder}
//  */
// exports.shorthands = undefined;

// /**
//  * @param pgm {import('node-pg-migrate').MigrationBuilder}
//  * @param run {() => void | undefined}
//  * @returns {Promise<void> | void}
//  */
// exports.up = (pgm) => {
//     pgm.sql(`
//         CREATE TABLE projects (
//             id SERIAL PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             type VARCHAR(255) NOT NULL,
//             department VARCHAR(50),
//             client_id INT,
//             location TEXT,
//             start_date DATE,
//             end_date DATE,
//             status VARCHAR(50) DEFAULT 'Pending',
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//             updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `);
// };

// // /**
// //  * @param pgm {import('node-pg-migrate').MigrationBuilder}
// //  * @param run {() => void | undefined}
// //  * @returns {Promise<void> | void}
// //  */


// exports.down = (pgm) => {
//     pgm.sql(`
//         DROP TABLE projects;
//     `);
// };


// db/migrations/1737267783903_projects-table.js
/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
export const up = (pgm) => {
    pgm.sql(`
        CREATE TABLE projects (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            type VARCHAR(255) NOT NULL,
            department VARCHAR(50),
            client_id INT,
            location TEXT,
            start_date DATE,
            end_date DATE,
            status VARCHAR(50) DEFAULT 'Pending',
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
        DROP TABLE projects;
    `);
};