import chalk from 'chalk';

export default {

	_getCurrTimeStr(){
		let date = new Date();
		return chalk.blue('['+date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear()+
		' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'] ');
	},

	_log(color, str){
		console.log(this._getCurrTimeStr()+chalk[color](str));
	},

	_parseArgs(args){
		let str = '';
		for(let idx in args){
			let curr = args[idx];
			if(typeof curr === 'object'){
				curr = JSON.stringify(curr, null, 4);
			}
			str += curr+' ';
		}
		return str;
	},

	log(){
		let str = this._parseArgs(arguments);
		this._log('white', str);
	},

	warn(){
		let str = this._parseArgs(arguments);
		this._log('yellow', str);
	},

	error(){
		let str = this._parseArgs(arguments);
		this._log('red', str);
	}

};
