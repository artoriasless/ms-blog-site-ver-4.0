'use strict';

module.exports = {
    domain: 'http://127.0.0.1:3001',
    port: 3001,
    db: {
        host: 'test',
        port: 3306,
        user: 'test',
        password: 'test',
        database: 'test',
        seq_options: {
            logging: false,
            dialectOptions: {
                charset: 'utf8',
            },
        },
    },
};
