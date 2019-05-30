const readlineSync = require('readline-sync');

var count=0;
var bulls, cows;

function getRandom(a,b)
{
	return Math.floor(Math.random() * (b-a+1)+a);
}

function NumberCreation()
{
	var result='';
	for (var i=0; i<4; i++) {
		do
		{
			var oneDigit = getRandom(0,9);
		}
		while(result.indexOf(oneDigit)>=0);
		result+=oneDigit;
	}
	//console.log(result);
	return result;
}

function Сounting(created, attempt)
{
	bulls = 0;
	cows = 0;
	for (var i=0; i<4; i++) {
		if (created[i]==attempt[i]) bulls++;
		else if (created.indexOf(attempt[i])>=0) cows++;
	}
}
var created = NumberCreation();
while(true)
{
	count++;
	var attempt = readlineSync.question("Attempt: ");
	if (attempt==created) {
		console.log("This is the correct number! Attempts: " + count);
		break;
	}
	else {
		Сounting(created, attempt);
		console.log("Bulls: " + bulls + "; Cows: " + cows);
	}
}







