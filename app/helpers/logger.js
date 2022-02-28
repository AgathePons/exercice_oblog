const bunyan = require('bunyan');

const streams = [];

streams.push({
  level: 'error', // only error level and highter
  path: './logs/error.log',
  type: 'rotating-file',
  period: '1d', // 1 day rotating
  count: 3, // keep 3 files
});

const logger = bunyan.createLogger({
  name: 'Oblog API',
  streams,
});

module.exports = logger;
