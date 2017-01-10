//An easier way of exporting modules using Javascript Objects


/*function myFunction1() {
	// 
	console.log('Fuck Off');
}


var mySting1 = 'Fuck!';


module.exports.myFunction1 = myFunction1;
module.exports.mySting1 = mySting1;
*/





module.exports = {

myFunction1 : function () {
	// 
	console.log('Exported!');
},

mySting1: 'Exported my Sting1'

};