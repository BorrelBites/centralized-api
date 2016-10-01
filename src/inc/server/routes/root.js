import RootGetController from '../controllers/RootGetController';

export default (app) => {

	app.get('/', (req, res) => new RootGetController(req, res, app));

};
