const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne);
let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again");
}
