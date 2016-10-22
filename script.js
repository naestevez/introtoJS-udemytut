//prompt() - asks user for input
//alert() - alerts
//console.log() - displays result in console
var name = prompt("What is your first name?");
alert("Hello " + name);
console.log(name);


//push() - adds to end of array
//pop() - removes the last element in array
//shift() - removes first element in array
//indexOf() - results in the index of the selected element
var cardsuits = ["clubs", "spades", "diamonds", "hearts"];
cardsuits.push("rectangles");
console.log(cardsuits);
console.log(cardsuits.length);

cardsuits.pop();
console.log(cardsuits);
console.log(cardsuits.length);

cardsuits.shift();
console.log(cardsuits);

console.log(cardsuits.indexOf("diamonds"));
