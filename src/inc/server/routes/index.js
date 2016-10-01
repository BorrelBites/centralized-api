import fs from 'fs';

export default (app, db) => {
	fs.readdirSync(__dirname).forEach(function(filename){
		if(filename !== 'index.js' && /\.js$/.test(filename)){
			let route = require('./'+filename);
			require('./'+filename).default(app, db);
		}
	});
};
