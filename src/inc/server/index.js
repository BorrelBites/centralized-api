import express from 'express';

import routes from './routes';
import middleware from './middleware';
import logger from '../logger';

const app = express();

export default {

	start(port, db){
		middleware(app);
		routes(app, db);

		app.listen(port);
		logger.log('Running on *:'+port);
	}

};
