const app = require('./server/server');
const logger = require('./utils/logger');

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';
const env = process.env.NODE_ENV || 'production';

app.listen(port, host);
logger.log(`Listening on port: ${port}`);
logger.log(`Connected to host: ${host}`);
logger.log(`Node Environment: ${env}`);
