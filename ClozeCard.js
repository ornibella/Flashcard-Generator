exports.ClozeCard = function(text, cloze) {
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	if (!textToLower.includes(clozeToLower)) {
		console.log('ERROR: cloze-deletion does not appear within full text -- <' + cloze + '>');
		return;
	}

	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}


module.exports = [ { front: "Santa Claus delivers presents on Christmas Eve?" , back: "Santa Claus" },
{front: "25th December is the date of Christmas Day?" , back: "25th December" },
{front: "Rudolph the reindeer has a red nose." , back: "Rudolph"},
{front: "Jingle Bells is a famous Christmas Carol with the word Bells in the title." , back: "Jingle Bells" },
{front: "There were three wise men in Bethlehem?" , back: "three"}
]

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
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


function displayCard () {

}