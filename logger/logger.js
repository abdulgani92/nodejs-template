const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ]
});

exports.log = (error) => {
    logger.log({ level: 'error', message: JSON.stringify(error) });
};