import bodyParser from 'body-parser';

let middlware = {
	init(app){
		app.use(this._allowCORS);
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({
		  extended: true
		}));
	},

	_allowCORS(req, res, next){
	    res.header('Access-Control-Allow-Origin', '*');
	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	    res.header('Access-Control-Allow-Headers', 'Content-Type');
	    next();
	}
};

export default function(app){
	middlware.init(app);
};
