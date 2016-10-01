import logger from './inc/logger';
import server from './inc/server';

const isTest = process.env.TEST === '1';

if (isTest) {
  console.log('Running test suite!');
}
// use 994* as testing range
server.start(process.env.PORT || 9941);
