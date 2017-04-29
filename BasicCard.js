var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}

module.exports = BasicCard;



var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front); 

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


var inquirer = require("inquirer");

function promptBasicCard(){
	inquirer.prompt([{
    name: "textFront",
    type: "input",
    message: "Enter the question:"
  }, {
    name: "textBack",
    type: "input",
    message: "Enter the answer:"

  }]).then(function(answer) {
 
    var newCard = new BasicCard(answer.textFront, answer.textBack)
      console.log("Your card was created successfully!");
      console.log(newCard.front);
      console.log(newCard.back); 
      cardChoice();
    });
 };

promptBasicCard();
