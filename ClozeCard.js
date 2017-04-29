var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');

	var clozeStart = text.search(cloze);
		if (clozeStart === -1){ 
			console.log("ERROR");
			this.partial = text;
		}
		else {
			var tempText = text.split("");
			tempText.splice(clozeStart, cloze.length, "?",);
			this.partial = tempText.join("");
		}
}


module.exports = ClozeCard;


var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");


console.log(firstPresidentCloze.cloze); 

console.log(firstPresidentCloze.partial); 

console.log(firstPresidentCloze.fullText): 



var currentPresidentCloze = new ClozeCard(
    "Donald Trump is the current president of the United States.", "Donald Trump");

console.log(currentPresidentCloze.cloze); 

console.log(currentPresidentCloze.partial); 

console.log(currentPresidentCloze.fullText): 


var capitalCityCloze = new ClozeCard(
    "Washington DC is the capital city of the United States", "Washington DC");

console.log(capitalCityCloze.cloze); 

console.log(capitalCityCloze.partial); 

console.log(capitalCityCloze.fullText): 


var companyOneCloze = new ClozeCard(
    "Apple makes iPhones.", "Apple");

console.log(companyOneCloze.cloze); 

console.log(companyOneCloze.partial); 

console.log(companyOneCloze.fullText): 


var companyTwoCloze = new ClozeCard(
    "Facebook is the parent company of Instagram.", "Facebook");

console.log(companyTwoCloze.cloze); 

console.log(companyTwoCloze.partial); 

console.log(companyTwoCloze.fullText): 

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

function promptClozeCard() {
    inquirer.prompt([{
        type: 'input',
        name: 'full_text',
        message: 'Enter the question: '
    }, {
        type: 'input',
        name: 'cloze',
        message: 'Enter the term you want as the cloze: '
    }]).then(function(answer) {
        let card = new ClozeCard(answer.full_text, answer.cloze);
        if (card.fullText && card.cloze) {
            card.printText();
            flashcardArray.push(card);
        } 
    });
};

promptClozeCard();
