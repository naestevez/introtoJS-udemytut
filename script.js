/****************Varibles, Prompt, Alert functions******************/

//prompt() - asks user for input
//alert() - alerts
//console.log() - displays result in console

var name = prompt("What is your first name?");
alert("Hello " + name);
console.log(name);


/***************Built-in Functions**************/

//push() - adds to end of array
//pop() - removes the last element in array
//shift() - removes first element in array
//indexOf() - results in the index of the selected element
//.length - find out the length of an array
/*var cardsuits = ["clubs", "spades", "diamonds", "hearts"];
cardsuits.push("rectangles");
console.log(cardsuits);
console.log(cardsuits.length);

cardsuits.pop();
console.log(cardsuits);
console.log(cardsuits.length);

cardsuits.shift();
console.log(cardsuits);

console.log(cardsuits.indexOf("diamonds"));*/

/*************More Built-in Functions***************/

//splice(index of element to be removed, how many removed elements) removes element(s)
//sort() - sorts by default alphabetically instead of numerically
//concat() - combines two arrays
//join('/') - combines elements in an array with specified punctuation
//toString() - converts to a string
var lottonums = [31, 76, 25, 11, 36, 99, 6, 48];

lottonums.splice(2, 1);
console.log(lottonums);

var sorted = lottonums.sort(function(a,b) {
  return a - b;
});
console.log(sorted);

var combinedArrays = sorted.concat(lottonums);
console.log(combinedArrays);

var joinedArrays = sorted.join('/');
console.log(joinedArrays);

var convertToString = sorted.toString();
console.log(convertToString);

/***************OBJECTS******************/

//First way to make objects
var car = new Object();
car.make = "Ford";
car.model = "Mustang";
car["year"] = 2015;
car["cost"] = 25000;
console.log(car);

//Second way to make objects
var car2 = {make: "Honda", model: "Accord", year: 2011, cost: 10000};
console.log(car2);

//Third way to make objects
var car3 = new myFunc("Toyota", "Corolla", 2003, 1500);
function myFunc(a, b, c, d) {
  this.make = a;
  this.model = b;
  this.year = c;
  this.cost = d;
}
console.log(car3);

/*************Functions, Global/Local scope***************/

function myFunc(a) {
  console.log(a);
}

myFunc("hey");
myFunc("hey there!");
myFunc("hey what's happening here?");
myFunc("hey! you!");

var name = "Alex"
function greeting(name) {
  var name = "Alejandra";
  return "Hi " + name;
}
console.log(greeting("Mr. Roboto"));
console.log(name);
