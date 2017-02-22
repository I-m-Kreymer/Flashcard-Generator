var inquirer = require('inquirer');
var fs =require('fs');

var start = function() {
	inquirer.prompt({
		name:'readorwrite',
		type:'rawlist',
		message:'Would you like to [MAKE] or [REVIEW] flashcards?',
		choices:['MAKE','REVIEW']
	}).then(function(answer){
		if(answer.readorwrite.toUpperCase()=="MAKE") {
			makeCard();
		} else{
			//reviewCard();
		}
	})
}

var makeCard = function() {
	inquirer.prompt([
		{
			name:'front',
			type:'input',
			message:'Please write in a question that will appear on the front'
		},
		{
			name:'back',
			type:'input',
			message:'Please write in the answer that will appear on the back'
		}
		]).then(function(input){
			console.log(input.front);
			fs.appendFile('log.txt',new flashCardConstr(input.front,input.back));
		})
		
}

var flashCardConstr = function(front,back) {
	this.front = front;
	this.back = back;
}

start();