const {createServer} = require('./src/server/server');

const {
    MONGO_LOCAL,
    MONGO_DATABSE = 'yandex-shri-minsk-2018',
    MONGO_HOST = 'localhost',
    MONGO_PORT = 27017,
    SERVER_HOST = 'localhost',
    SERVER_PORT = 3001
} = process.env;

/**
 * Setup mongo configuration
 */
const DATABASE_CONFIG = {
    host: MONGO_HOST,
    port: MONGO_PORT,
    local: MONGO_LOCAL !== 'false',
    database: MONGO_DATABSE
};

/**
 * Socket.io server
 */
const SERVER_CONFIG = {
    host: 'localhost',
    port: 3001
};

createServer(SERVER_CONFIG, DATABASE_CONFIG)
    .catch(err => {
        console.log(err);
    });
