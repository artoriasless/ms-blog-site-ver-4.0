'use strict';

module.exports = {
    domain: 'http://127.0.0.1:3001',
    db: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '12345',
        database: 'blog_local',
        seq_options: {
            logging: false,
            dialectOptions: {
                charset: 'utf8',
            },
        },
    },
};
