export default class RootGetController {
	constructor(req, res, app){
		let routePaths = {};

		app._router.stack.forEach((details) => {
			let route = details.route;
			if(route && route.path !== '/'){
				routePaths[route.path.replace('/', '')] = route.methods;
			}
		});

		res.status(200).json(routePaths);
	}
}
