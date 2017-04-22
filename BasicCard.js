exports.BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}



module.exports = 
[ {front: "Who is the current President of the United States?" , back: "Donald Trump"},
{front: "What date is Christmas Day?" , back: "25th December" },
{front: "Which reindeer has a red nose?" , back: "Rudolph" },
{front: "Name a famous Christmas carol with the word Bells in the title." , back: "Jingle Bells"},
{front: "There were how many wise men in Bethlehem?" , back: "Three" },
]






var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 


var currentPresident = new BasicCard(
    "Who is the current President of the United States?", "Donald Trump");

console.log(currentPresident.front); 

console.log(currentPresident.back); 


var capitalCity = new BasicCard(
    "What is the capital city of the United States?", "Washington DC");

console.log(capitalCity.front); 

console.log(capitalCity.back); 


var companyOne = new BasicCard(
    "What company makes iPhones?", "Apple");

console.log(companyOne.front); 

console.log(companyOne.back);


var companyTwo = new BasicCard(
    "Who is the parent company of Instagram?", "Facebook");

console.log(companyTwo.front); 

console.log(companyTwo.back);  





var inquirer = require('inquirer');

var closeQuestions = [];

for (var i = 0; i < questions.length; i++) {
	var q = new flashCards.ClozeCard(questions[i].full, questions[i].cloze);
	closeQuestions.push(q);
}

var currentQuestion = 0;
var answerRight = 0;
var answerWrong = 0;

function askQuestion() {
	inquirer.prompt([
		{
			type: 'input',
			message: closeQuestions[currentQuestion].partial + '\nAnswer: ',
			name: 'userGuess'
		}
	]).then(function (answers) {
		console.log('\n');

		if (answers.userGuess.toLowerCase() === closeQuestions[currentQuestion].cloze.toLowerCase()) {
			console.log('Correct!');
			answerRight++;
		} else {
			console.log('Incorrect!');
			answerWrong++;
		}

		console.log(closeQuestions[currentQuestion].full);
		console.log('-------------------------------------\n');

		if (currentQuestion < closeQuestions.length - 1) {
			currentQuestion++;
			askQuestion();
		} else {
			console.log('Game Over!');
			console.log('Correct Answers: ' + answerRight);
			console.log('Incorrect Answers: ' + answerWrong);

			console.log('-------------------------------------\n');

			inquirer.prompt([
				{
					type: 'confirm',
					message: 'Would you like to play again?',
					name: 'playAgain'
				}
			]).then(function (answers) {
				if (answers.playAgain) {
					currentQuestion = 0;
					answerRight = 0;
					answerWrong = 0;

					askQuestion();
				} else {
					console.log('Thanks for playing! Goodbuy!');
				}
			})
		}
	})
}

askQuestion();