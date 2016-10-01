import {
	LoginController,
	CreateUser,
	Dump
} from '../controllers/LoginController';

export default (app) => {
	app.post('/login', (req, res) => new LoginController(req, res, app));
	app.post('/register', (req, res) => new CreateUser(req, res, app));
	app.get('/dump', (req, res) => new Dump(req, res, app));
};
