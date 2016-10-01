
var sha256 = require('sha256');
const salt = '289yd_'

var users = {
    "matti@borrel.bites" : {
        password: "4013ac9250cbeafd6d3abc5f28e545768eead24735e2c11021684500328a27ad",
        accountType: "manifacturer",
        mid: 2
    },
    "leroy@borrel.bites" : {
        password: "4013ac9250cbeafd6d3abc5f28e545768eead24735e2c11021684500328a27ad",
        accountType: "audit"
    },
    "ibo@borrel.bites" : {
        password: "4013ac9250cbeafd6d3abc5f28e545768eead24735e2c11021684500328a27ad",
        accountType: "audit"
    },
    "pjotter@borrel.bites" : {
        password: "4013ac9250cbeafd6d3abc5f28e545768eead24735e2c11021684500328a27ad",
        accountType: "audit"
    },
    "ibo@borrel.bites" : {
        password: "4013ac9250cbeafd6d3abc5f28e545768eead24735e2c11021684500328a27ad",
        accountType: "audit"
    },
    "wessel@borrel.bites" : {
        password: "4013ac9250cbeafd6d3abc5f28e545768eead24735e2c11021684500328a27ad",
        accountType: "manifacturer",
        mid: 1
    }

};

export class LoginController {
	constructor(req, res, app){

        if (!req.body.email || !req.body.password){
            return res.json({"success":false});
        }

        var email = req.body.email;
        var passw = sha256(salt + req.body.password);

        if (users[email] && users[email].password == passw) {
            return res.json({
                "email":email,
                "type":users[email].accountType,
                "mid": users[email].mid
            });
        }

        return res.json({"success":false});

	}
}
export class Dump {
    constructor(req, res, app){
        res.json(users);
    }
}

export class CreateUser {
	constructor(req, res, app){

        if (!req.body.email || !req.body.password || !req.body.accountType){
            return res.json({"success":false});
        }

        var email = req.body.email;
        var passw = sha256(salt + req.body.password);

        if (!users[email]){
            const newUser = {
                password: passw,
                accountType: req.body.accountType,
                mid: (req.body.mid || null)
            }

            users[email] =  newUser
            return res.json(newUser)
        }
        res.json({});
	}

}
