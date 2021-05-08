#1
#2
#3
#4
#5
#6
#7






//JavaScript Linking***********************************************************************************************************************************

alert("I love pizza");

console.log("I REALLY enjoy pizza");

// This is a comment

/*
This is a multi-line comment
*/

// ****************************************

/*
<!-- ***** index.html ***** -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>I enjoy pizza!</h1>

    <script src="index.js"></script>
</body>
</html>
<!-- ********************** --></meta>
*/


//JavaScript Variables ***********************************************************************************************************************************
var age = 21;
var firstName = "Bro";
var lastName = "Code";
var online = true;
var whatever = null;

age = age + 1;
var fullName = firstName +" "+lastName;

//limited to the scope of a block statement
let mySweetVariable = 420;

//const = constant reference to a value that cannot be changed
const pi = 3.14159;

console.log("Your age is",age);
console.log("Hello",fullName);
console.log("Are you online?:",online);
console.log(whatever);

//JavaScript arithmetic expressions***********************************************************************************************************************************

 
   /* arithmetic expression is some combination of
    operands (values, variables, etc.)
    operators (+ - * / %)
    that can be evaluated to a value */


var friends = 10;

//friends = friends + 1;
//friends = friends - 1;
//friends = friends * 2;
//friends = friends / 2;
//friends = friends ** 2;
//var remainingFriends = friends % 3;

//friends += 1;
//friends -= 1;
//friends *= 2;
//friends /= 2;
//friends **= 2;
//friends %= 3;

/* 
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiply * & divide /
    4. addition + & subtraction -
*/

//friends = (10 + 2) / 2;

console.log(friends)

//JavaScript User Input***********************************************************************************************************************************

//EASY WAY
var myName = window.prompt("What's your name?");
console.log("Hello",myName);

//HARD WAY
document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    console.log("Hello",myName);
}

/*
<!-- ***** index.html ***** -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <label>Enter your name:</label><br>
    <input type="text" id="myText"><br>
    <button type="button" id="myButton">submit</button>
    <script src="index.js"></script>

</body>
</html>
*/

//JavaScript Type conversion***********************************************************************************************************************************

/* Type Conversion of numbers, strings, booleans
(Explicit vs Implicit)
change the datatype of a value to another */

var age = window.prompt("How old are you?");
 
console.log("HAPPY BIRTHDAY!");
 
age = Number(age);
 
age += 1;
 
console.log(typeof age);
console.log(age);


var myVar;

myVar = Number("3.14");
//myVar = String(3.14);
//myVar = Boolean("pizza"); 

console.log(typeof myVar);
console.log(myVar);


//JavaScript Functions**********************************************************************************************************************************
/*
    A function is a block of code designed to perform, a particular task/procedure. 
    We invoke "call" the function whenever we want it to do something. 
    However, we need to define what the task the function should do
*/
 
// arguments = values that are sent
// parameters = values that are received

function toCelsius(f){
    return (f-32) * (5/9);
};

function toFarenheit(c){
    return (c * 9/5) + 32;
};

//var myTemp = toCelsius(100);
var myTemp = toFarenheit(37.7);

//console.log("My temp in C is",myTemp,"degrees");
console.log("My temp in F is",myTemp,"degrees");

//JavaScript Objects***********************************************************************************************************************************
// ******* index.js *******

// object = a container for properties/methods

// property = values/variables that describe what an object has
// methods = functions that describe what an object can do

var human1 = {
    name: "Rick",
    age: 65,

    eat : function(){
        console.log("Rick is eating food")
    },

    drink : function(){
        console.log("Rick is drinking alcohol *burp*");
    },

    sleep : function(){
        console.log("Rick has passed out");
    }
};

var human2 = {
    name: "Morty",
    age: 16,

    eat : function(){
        console.log("Morty is eating food")
    },

    drink : function(){
        console.log("Morty is drinking water");
    },

    sleep : function(){
        console.log("Morty is asleep");
    }
};

human1.name //dot notation
human1['name'] //bracket notation

console.log(human1.name);
console.log(human1.age);
human1.eat();
human1.drink();
human1.sleep();

console.log(human2.name);
console.log(human2.age);
human2.eat();
human2.drink();
human2.sleep();
//JavaScript Arrays***********************************************************************************************************************************

// array =  a special variable, 
//          that can hold more than one value.

//          Each "space" is known as an element

//          You access elements in an array by referring
//          to the index number ex.[0]

var cars = ["Mustang","Corvette","Jaguar"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars.push("Tesla"); //add an element
cars.pop();         //removes last element

var numberOfCars = cars.length; //returns length of array

//cars = cars.sort(); //sorts an array alphabetically
//cars = cars.reverse(); //reverse sort an array

var lastCar = cars[cars.length-1]; //access last element

console.log(cars);
console.log(numberOfCars);
console.log(lastCar);
//JavaScript if Statments***********************************************************************************************************************************
// if statement = a basic form of decision making
//                if a condition is true, then do something
//                if not, then don't do it!

var age = 80;

if(age >= 65){
  console.log("You are a senior!");
}
else if(age >= 18){
  console.log("You are an adult!");
}
else if(age < 0){
  console.log("You haven't been born yet!");
}
else{
  console.log("You are a child!");
}

/*
var online = true;
 
if(online){
  console.log("You're online");
}
else{
  console.log("You're offline");
}
*/
//JavaScript ternary operators ***********************************************************************************************************************************
// ternary operator = Shortcut for if statements. 
//                                  Takes 3 operands

//                                  1. a condition with ?
//                                  2. expression if True :
//                                  3. expression if False

// condition ? exprIfTrue : exprIfFalse

function checkWinner(win){

    win ? console.log("You win!") : console.log("You lose!");
}

checkWinner(false);
//JavaScript switches ***********************************************************************************************************************************
// switch =  statement that evaluates a value/expression, 
//           matches the value to many case clauses
//           more efficient that many "else if" statements

var grade = "F";

switch (grade){

  case "A":
    console.log("You did great!");
    break;
  
  case "B":
    console.log("You did good!");
    break;

  case "C":
    console.log("You did okay!");
    break;

  case "D":
    console.log("You... did not do that well!");
    break;

  case "F":
    console.log("YOU FAILED!");
    break;

  default:
    console.log(grade,"is not a letter grade");
}
//JavaScript strict equality ===***********************************************************************************************************************************
//  loose equality operator ==
//  strict equality operator ===

//  checks for equal value AND type
//  compares if value is equal &
//  if the data type is equal

//var pi = 3.14;   //number
var pi = "3.14"; //string

if(pi === 3.14){
    console.log("yes, that is pi");
}
else{
    console.log("no, that is not pi");
}
//JavaScript logical operators***********************************************************************************************************************************
// logical operators =  used to write more
//                                    complex conditions

// && AND (checks if both conditions are true)
// || OR (checks if at least 1 condition is true)
// !  NOT (reverses boolean value)

/*
var temperature = 15; //Celsius
 
if(temperature > 30){
    console.log("It's HOT outside");
}
else if(temperature > 0 && temperature <= 30){
    console.log("It's warm outside");
}
else{
    console.log("It's COLD outside");
}
*/

/*
var hour = 21 //military time
 
if(hour < 6 || hour >= 20){
    console.log("It's DARK outside");
}
else{
    console.log("It's LIGHT outside");
}
*/
 
var myName = window.prompt("Enter your name");
 
if(!(myName == "")){
    console.log("Hello",myName);
}
else{
    console.log("You did not enter your name!");
}
//JavaScript while loops ***********************************************************************************************************************************
// while loop = repeats some code, while the
//              loop's condition remains true

var creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS!! ENTER YOUR CREDIT CARD INFO... OR ELSE!");

while(creditNum == ""){
    creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS!! ENTER YOUR CREDIT CARD INFO... OR ELSE!");
}

/*
do{
    var creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS!! ENTER YOUR CREDIT CARD INFO... OR ELSE!");
}while(creditNum == "");
*/

console.log("THANK YOU! You're computer no longer has a virus!");
//JavaScript for loop ***********************************************************************************************************************************
// for loop = repeat a loop a limited amount of times
//                   for(declare index; condition; step)

/*
// COUNT UP TO 10
for(let i = 1; i <= 10; i++){
    console.log(i);
}
*/

// COUNT DOWN FROM 10
for(let i = 10; i > 0; i--){
    console.log(i);
}

console.log("HAPPY NEW YEAR!");
//JavaScript for in loop***********************************************************************************************************************************
// for in loop = Loops through the elements in an array
//               or the properties of an Object
//               less syntax to write, but less flexible

let letters = ["H","E","L","P"];

let Car = {
    make: "Chevy",
    model: "Corvette",
    year: 2022,
    color: "blue"
}

/*
for(let i = 0; i < letters.length; i++){
    console.log(letters[i]);
}
for(let i in letters){
    console.log(letters[i]);
}
*/

for(let property in Car){
    console.log(Car[property]);
}
//JavaScript nested lopps***********************************************************************************************************************************
<!------------- index.html -------------->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="myRectangle"></h1>
    <script src="index.js"></script>
</body>
</html>

// ********* index.js *********

// nested loop = a loop inside of another loop

var symbol = window.prompt("Enter a symbol to use");
var rows = window.prompt("Enter # of rows");
var columns = window.prompt("Enter # of columns");

for(let i = 0; i < rows; i++){

    for(let j = 0; j < columns; j++){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}
//JavaScript Multidimentonal Arrays***********************************************************************************************************************************
// multidimensional array = Holds a matrix of elements. 
//                                              An array of arrays

let garage =    [
    ["Mustang", "F-150", "Explorer"],
    ["Corvette", "Silverado", "Equinox"],
    ["Camry", "Highlander", "Tacoma"]
];

//console.log(garage[2][2]);

for(let i = 0; i < garage.length; i++){

for(let j = 0; j < garage[i].length; j++){

console.log(garage[i][j]);
}
}
//JavaScript Math***********************************************************************************************************************************
// Math = An object that provides basic 
//              mathematics functionality and constants.

//var myNum;

//myNum = Math.round(3.5);
//myNum = Math.floor(3.9);
//myNum = Math.ceil(3.1);
//myNum = Math.pow(3, 3);
//myNum = Math.sqrt(64);
//myNum = Math.abs(-1);
//myNum = Math.min(1, 5, 2, 4, 3);
//myNum = Math.max(1, 5, 2, 4, 3);
//myNum = Math.PI;
//myNum = Math.E;

//console.log(myNum);

// solve for hypotenuse of a right triangle

var a = window.prompt("Enter side A");
var b = window.prompt("Enter side B");
var c;

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

console.log("Side c =",c);
//JavaScript Random Numbers***********************************************************************************************************************************
// Math.random() = generates a pseudo-random between 0 and 1
//                 Don't use this for security purposes

var randNum;

randNum = Math.random(); //0 - 1
randNum = Math.floor(Math.random() * 6); //0 - 5
randNum = Math.floor(Math.random() * 6) + 1; //1 -6

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

randNum = getRandomNum(1, 6);
console.log(randNum);
//JavaScript Date Objects***********************************************************************************************************************************
/ date object = represents a moment in time 
//               since epoch (reference point)

// **************************

let date;

date = new Date(0);
date = new Date();
date = new Date(2022, 3, 4, 18, 1, 2, 3);
date = new Date("April 20, 2022 16:20:01:02");

let year = date.getFullYear();
let month = date.getMonth();
let dayOfWeek = date.getDay();
let dayofMonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliSeconds = date.getMilliseconds();

console.log(year);
console.log(month);
console.log(dayOfWeek);
console.log(dayofMonth);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliSeconds);

date.setFullYear(2023);
date.setMonth(11);
date.setDate(25);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);

console.log(date);
//JavaScript String methods***********************************************************************************************************************************
// useful string properties & methods

var myName = "Bro Code";
var myStreet = "123 Fake st.";
var myCity = "Nowhere XY 12345";
var myPhone = "123-456-7890";

console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.indexOf(" "));
console.log(myName.lastIndexOf("o"));
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

//var firstName = myName.slice(0, 3);
var firstName = myName.slice(0, myName.indexOf(" "));
console.log(firstName);

//var firstName = myName.slice(4);
var lastName = myName.slice(myName.lastIndexOf(" ") + 1);
console.log(lastName);

var myAddress = myStreet.concat(" ", myCity);
console.log(myAddress);

myPhone = myPhone.replaceAll("-","");
console.log(myPhone);
//JavaScript Method Chaining***********************************************************************************************************************************
// method chaining = calling one method after another, 
//                   in one continuous line of code

// example: capitalization

let user = "bro";

//let firstLetter = user.charAt(0);
//firstLetter = firstLetter.toUpperCase();
//user = firstLetter + user.slice(1);

user = user.charAt(0).toUpperCase() + user.slice(1);

console.log(user);
//JavaScript Break and Continue***********************************************************************************************************************************
// ******* index.js *******
 
//break = used to exit out of a loop
//continue = skips over an iteration of a loop

for(let i = 1; i <= 20; i++){

    if(i == 13){
        break;
    }
    console.log(i);
}

for(let i = 1; i <= 20; i++){

    if(i == 13){
        continue;
    }
    console.log(i);
}
//JavaScript Hoisting ***********************************************************************************************************************************
// hoisting = JS's default behavior of moving declarations,
//                    to the top of the current scope.
//                    A variable can be used before it has been declared.
//                    Beneficial to understand to help avoid bugs.
 
//                    Good practice to declare all variables,
//                    at the top of every scope.

// ******************
// Declaration
// ******************

myName = "Bro";

console.log(myName);

var myName;
//let myName;
//const myName;


// ******************
// Initialize
// ******************

var firstName = "Bro";

console.log(firstName, lastName);

var lastName = "Code";

//JavaScript Var vs Let***********************************************************************************************************************************
// scope = where a variable is accessible

// let = declare variables with a block scoped {}
// var = declare variables with a function scoped ()

for(let i = 1; i <= 3; i++){
    console.log(i);
}

console.log(i);

/*
for(var i = 1; i <= 3; i++){
    console.log(i);
}

console.log(i);
*/

//JavaScript Array.foreach()***********************************************************************************************************************************
// forEach() =  Performs a function for each 
//                       element in an array.

let total = 0;
let cart = [5, 6, 7, 8, 9];

function checkOut(element, index, array){
    
    total += element;
}

let cart = [5, 6, 7, 8, 9];
cart.forEach(checkOut);

console.log("Your total is: $"+total);
//JavaScript Array.Map()***********************************************************************************************************************************
// map() =  Performs a function for each 
//                 element in an array, then stores
//                 the returned values in a new array
 
let storeUSD = [5, 6, 7, 8, 9];

function toEuros(value){

    value *= 0.85;
    return value;
}

let storeEUR = storeUSD.map(toEuros);

console.log(storeUSD);
console.log(storeEUR);
//JavaScript Array.filter()***********************************************************************************************************************************
// filter() = Returns the elements of an array
//                that meets a condition specified
//                in a function. 

let students = [16, 17, 18, 19, 20];

function checkAge(age, index, array){

    if(age >= 18){
        return age;
    }
}

let adultStudents = students.filter(checkAge);

console.log(adultStudents);
//JavaScript Array.Reduce()***********************************************************************************************************************************
// reduce() =  Reduces an array to a single value
//                     The return value of the callback 
//                     function is the accumulated result, 
//                     and is provided as an argument in 
//                     the next call to the callback function.
 
let letters = ["H", "E", "L", "P"];

function combineLetters(total, nextLetter, index, array){

    return total + nextLetter;
}

let word = letters.reduce(combineLetters);

console.log(word);
//JavaScript Call Backs***********************************************************************************************************************************
// callback = function passed as an argument to another function.
//                   allows a function to invoke another function 

// **********************

let message;

function displayConsole(output){

    console.log(output);
}

function displayDOM(output){

    document.getElementById("myH1").innerHTML = output;
}

function setMessage(text, callBack){

    message = text;
    callBack(message);
}

//setMessage("Hi mom!", displayConsole);
setMessage("Hi mom!", displayDOM);

<!--- index.html ---->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="myH1"></h1>
    <script src="index.js"></script>
</body>
</html>

//JavaScript Function Expressions***********************************************************************************************************************************
// function expression =  
//                        A function can also be defined using an expression.
//                        Function expression can be stored in a variable.
//                        The variable can be used as a function.
//                        They can be invoked by adding ()
//
//                        1. Useful as closures
//                        2. Used in IIFE (funcs that runs as soon as it's defined)
//                        3. Can be passed as arguments to other functions

// ******************
// function declaration
// ******************
/*
sayHello();

function sayHello(){

    console.log("Hello");
}
*/
// ******************
// function expression
// ******************

let greeting = function(){console.log("Hello")};
//let greeting = function(){document.getElementById("myH1").innerHTML = "Hello"};

output(greeting);

function output(func){

    func();
}
//JavaScript Nested Functions***********************************************************************************************************************************
// nested functions = 
//                    Functions inside other functions.
//                    Outer functions have access to inner functions.
//                    Inner functions are "hidden" from outside the scope.
//                    used in closures (future video topic)


function login(){

    let userName = "Bro";
    let userInbox = 0;

    function displayUserName(){

        console.log("Hello", userName);
    }

    function displayUserInbox(){

        console.log("You have",userInbox,"new messages");
    }

    displayUserName();
    displayUserInbox();
}

//displayUserName(); //ERROR
//displayUserInbox(); //ERROR
login();
//JavaScript Anonoymous Functions***********************************************************************************************************************************
//anonymous function = 
//                      Function w/o a name. 
//                      Often not accessible after 
//                      its initial creation.
 
// benefits =   
//              Doesn't clutter global namespace
//              Usable once
//              Can be passed as arguments

// **************************
// IIFE = a JS function that runs as soon as it is defined
// grouping operator = ()

(function(){
    document.getElementById("myH1").innerHTML = "hey!";
})();

// setTimeout(function, milliseconds);

setTimeout(function(){
    document.getElementById("myH1").innerHTML = "sup?"
}, 1000);
//JavaScript Closures***********************************************************************************************************************************
// closure =  
//            A function with preserved data.
//            Give you access to an outer function’s scope,
//            from an inner function.

//            State of variables in outer scope are "saved".
//            Variables in outer scope are considered "private".

// **************************

let score = function(){

    let points = 0;

    return function(){

        points += 1;
        return points;
    }
}();

//points += 100; //ERROR
console.log(score());
console.log(score());
console.log(score());
//JavaScript Closure Example***********************************************************************************************************************************
// closure example w/ arguments

function makeSize(size){

    return function(){

        document.body.style.fontSize = size + "px";
    }
}

function makeFont(font){

    return function(){

        document.body.style.fontFamily = font;
    }
}

let size20 = makeSize(20);
let size30 = makeSize(30);
let size40 = makeSize(40);

let fontInkFree = makeFont("Ink Free");
let fontConsolas = makeFont("consolas");
let fontCourierNew = makeFont("courier new");

size20();
size30();
size40();

fontInkFree();
fontConsolas();
fontCourierNew();
//JavaScript Arrow Functions***********************************************************************************************************************************
//</meta> arrow function =>
// shortcut for a function expression
 
let hello;
let x = "Yo";
let y = "bro!";

// *********************
// function expression
// *********************

hello = function() {
  return "Hello World!";
}
console.log(hello());

// *********************
// arrow function
// *********************

hello = () => "Hello World!";
console.log(hello());
 
// *********************
// arrow function w/ 1 argument
// *********************

hello = x => x + "World!";
console.log(hello(x));
 
// *********************
// arrow function w/ multiple arguments
// *********************

hello = (x,y) => x + y;
console.log(hello(x, y));
 
// *********************
// arrow function w/ multiple lines
// *********************

hello = (x,y) => {
    console.log(x);
    console.log(y);
};
hello(x,y);
 
// *********************
// MAP
// *********************

let storeUSD = [5, 6, 7, 8, 9];
let storeEUR;
 
storeEUR = storeUSD.map(value => value *= 0.84);
console.log(storeEUR);
 
// *********************
// FILTER
// *********************

let students = [16, 17, 18, 19, 20];
let adultStudents;
 
adultStudents = students.filter(age => age >= 18);
console.log(adultStudents);
 
// *********************
// REDUCE
// *********************

let letters = ["H", "E", "L", "P"];
let word;
 
word = letters.reduce((total, nextLetter) => total + nextLetter);
console.log(word);
//JavaScript Numeric Sorting***********************************************************************************************************************************
let numbers = [3, 14, 1, 2, 5];

//numbers.sort(); //ASCII character order

/*
numbers.sort(function(x, y){
  return y - x;
});
*/

numbers.sort((x, y) => y - x);

console.log(numbers);
//JavaScript Classes***********************************************************************************************************************************
// class = A "blueprint" for creating objects.
//               Define properties and/or methods.

class Car{

    drive(){
      console.log("You drive the car!");
    }
    brake(){
      console.log("You step on the brakes!");
    }
  }
  
  let car1 = new Car();
  let car2 = new Car();
  
  car1.drive();
  car2.brake();
//JavaScript Constructors***********************************************************************************************************************************
// constructor = A special method for assigning properties.
//                          Automatically called when creating an object.

class Car{

    constructor(make, model, year, color){
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    drive(){
      console.log("You drive the car!");
    }
    brake(){
      console.log("You step on the brakes!");
    }
  }
  
  let car1 = new Car("Ford", "Mustang", 2022, "red");
  let car2 = new Car("Chevy", "Corvette", 2021, "blue");
  
  console.log(car1.make);
  console.log(car1.model);
  console.log(car1.year);
  console.log(car1.color);
  
  console.log(car2.make);
  console.log(car2.model);
  console.log(car2.year);
  console.log(car2.color);
//JavaScript this Keyword***********************************************************************************************************************************
// this = A reference to the object that
//           we're currently working with

class Car{

    constructor(make, model, year, color){
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    drive(){
      console.log("You drive the",this.model);
    }
    brake(){
      console.log("You step on the",this.model+"'s brakes!");
    }
  }
  
  let car1 = new Car("Ford", "Mustang", 2022, "red");
  let car2 = new Car("Chevy", "Corvette", 2021, "blue");
  
  car1.drive();
  car2.brake();
  
  //console.log(this);
//JavaScript Static Keyword***********************************************************************************************************************************
// static = a method or property that belongs to a class
//               and not any one object

class Car{

    static numberOfCars = 0;
  
    static beginRace(){
      console.log("The race has begun!");
    }
  
    constructor(model){
      this.model = model;
      Car.numberOfCars += 1;
    }
  }
  
  let car1 = new Car("Mustang");
  let car2 = new Car("Corvette");
  let car3 = new Car("Challenger");
  
  console.log(Car.numberOfCars);
  Car.beginRace();
//JavaScript Inheritance***********************************************************************************************************************************
//</head> inheritance = Useful for code reusability. 
//                         Reuse properties and methods of an existing class.
//                         Children classes inherit from parent classes.

class Animal{

  constructor(){
    this.alive = true;
  }
  eat(){
    console.log("This creature is eating");
  }
}

class Rabbit extends Animal{

  run(){
    console.log("This rabbit is running");
  }
}
class Fish extends Animal{

  swim(){
    console.log("This fish is swimming");
  }
}
class Hawk extends Animal{

  fly(){
    console.log("This hawk is flying");
  }
}

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

console.log(rabbit.alive);
console.log(fish.alive);
console.log(hawk.alive);

rabbit.eat();
fish.eat();
hawk.eat();

rabbit.run();
fish.swim();
hawk.fly();
//JavaScript Method Overriding***********************************************************************************************************************************
// method overriding = 
//                     a child class will use methods
//                     with the same name that are
//                     most closely associated with it.


class Vehicle{

    drive(){
      console.log("You drive the vehicle");
    }
  }
  
  class Car extends Vehicle{
  
    drive(){
      console.log("You drive the car!");
    }
  }
  
  class RaceCar extends Car{
  
    drive(){
      console.log("You drive the racecar!!!!!!!");
    }
  }
  
  let vehicle = new Vehicle();
  let car = new Car();
  let raceCar = new RaceCar();
  
  vehicle.drive();
  car.drive();
  raceCar.drive();
//JavaScript SuperKeyword***********************************************************************************************************************************
// super = Reference to the parent class (super class)
//         Very similar to "this" keyword
//         Can use a super classes: constructor, methods
 
class Person{
 
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
    welcome(){
      console.log("Hello",this.name);
      console.log("You are",this.age,"years old");
    }
  }
   
  class Student extends Person{
    
    constructor(name, age, gpa){
      super(name, age);
      this.gpa = gpa;
    }
    hello(){
      super.welcome();
      console.log("Your gpa is",this.gpa);
    }
  }
  
  class Teacher extends Person{
   
    constructor(name, age, classSize){
      super(name, age);
      this.classSize = classSize;
    }
    hello(){
      super.welcome();
      console.log("Your class size is",this.classSize);
    }
  }
  
  let student = new Student("Steve", 21, 2.0);
  let teacher = new Teacher("Bob", 45, 30);
  
  //console.log(student.name);
  //console.log(student.age);
  //console.log(student.gpa);
  
  //console.log(teacher.name);
  //console.log(teacher.age);
  //console.log(teacher.classSize);
  
  student.hello();
  teacher.hello();
//JavaScript Prototypes***********************************************************************************************************************************
// prototype = Nearly all JS objects inherit the "prototype property"
//             from the Object class. We can add properties/methods to
//             an object's prototype

//             Benefits
//             Adding properties to a classes' prototype uses less memory
//             No need to declare properties and methods for every instance
//             Properties/methods can be added even after objects are created 

class Monkey{
    constructor(name){
      this.name = name;
    }
  }
  
  let monkey1 = new Monkey("George");
  let monkey2 = new Monkey("Rafiki");
  
  Monkey.prototype.tool = "spear";
  
  Monkey.prototype.useTool = function(){
    console.log(this.name,"is using a",this.tool);
  }
  
  console.log(monkey1);
  console.log(monkey2);
  
  monkey1.useTool();
  monkey2.useTool();
//JavaScript Objects as Arguments***********************************************************************************************************************************
// Objects as arguments

class Car{
 
    constructor(model, color){
      this.model = model;
      this.color = color;
    }
  }
  
  function changeColor(car, newColor){
  
    car.color = newColor;
  }
  
  let car1 = new Car("Corvette", "blue");
  let car2 = new Car("Mustang", "red");
  
  changeColor(car1, "purple");
  changeColor(car2, "pink");
  
  console.log(car1.model, car1.color);
  console.log(car2.model, car2.color);
//JavaScript Array Of Objects***********************************************************************************************************************************
// array of objects
 
class Car{
 
    constructor(model, color){
      this.model = model;
      this.color = color;
    }
    drive(){
      console.log("You drive the", this.model);
    }
  }
  
  let garage = [];
  
  let car1 = new Car("Corvette", "blue");
  let car2 = new Car("Mustang", "red");
  let car3 = new Car("Lambo", "yellow");
  
  garage = [car1, car2, car3];
  
  //console.log(garage[0].model);
  //console.log(garage[1].model);
  //console.log(garage[2].model);
  
  for(let i = 0; i < garage.length; i++){
  
    console.log(garage[i].model);
    garage[i].drive();
  }
  
  
  
//JavaScript Array of Functions***********************************************************************************************************************************
// array of functions

function jump(){
    console.log("You jump!");
  }
  
  function punch(){
    console.log("You punch!");
  }
  
  function kick(){
    console.log("You kick!");
  }
  
  function block(){
    console.log("You block!");
  }
  
  let actions = [];
  
  actions = [kick, block, jump, punch]
  /*
  for(let i = 0; i < actions.length; i++){
  
    actions[i]();
  }
  */
  actions.forEach(func => func());
//JavaScript Getters and setters***********************************************************************************************************************************
/ Why use getters & setters?

// A way to get/set the properties of an object
// Secures better data quality
// Does extra things behind-the-scenes
 
class User {
 
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    set first(value){
        this.firstName = value.toUpperCase();
    }
    set last(value){
        this.lastName = value.toUpperCase();
    }
    get fullName() {
      return this.firstName+" "+this.lastName;
    }
};

let user1 = new User("spongebob", "squarepants");
let user2 = new User("patrick", "star");

console.log(user1.fullName);
console.log(user2.fullName);
//JavaScript Template Literals***********************************************************************************************************************************
// New feature as of (ES6)

// template literals = another way of formatting output,
//                     can contain placeholders for
//                     formatting and inserting: 
//                     strings/values/variables/etc.

//                     ` backticks
//                     ${} placeholder

//                     Can use multiple lines
//                     embed expressions

let firstName = "Bro";
let lastName = "Code";
let price = 10;
let taxRate = 0.05;
let total;

//console.log("Hello "+firstName+" "+lastName+"!");
console.log(`Hello ${firstName} ${lastName}!`);
/*</html>
console.log(`The price is: $${price}`);
console.log(`tax rate: ${taxRate}`);
console.log(`tax is: $${price * taxRate}`);
console.log(`Total is: $${total = price + (price * taxRate)}`);*/

//JavaScript Spread Operators***********************************************************************************************************************************
// ES6 feature

// spread operator = ...
//                   Expands "spreads" an array or iterable
//                   into many arguments needed for a function.
/*
function sum(a, b, c){
    return a + b + c;
}

let numbers = [1, 2, 3];

console.log(sum(...numbers));
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Math.max(...numbers));
//JavaScript rest Parameter***********************************************************************************************************************************
//</br> rest parameter = ...
//                  Condenses an indefinite number
//                  of arguments into a type of array.
//                  Similar to spread operator, but used
//                  within a function's parameters
/*
function checkOut(...items){
    let total = 0;

    for(let i in items){
        total += items[i];
    }
    return total;
}

console.log("The total is: $"+checkOut(10, 20, 30));
*/

function displayName(first, last, ...middle){
    console.log(first, middle.join(' '), last);
}

displayName("Smitty", "Jensen", "Werben", "Jager", "Man");
//JavaScript Call Methods***********************************************************************************************************************************// call() = predefined method that can
//          call a method belonging to
//          another object.

//          Whichever object you want to use
//          that method with, pass that object
//          as an argument within call()
//          this = object passed in

let employee = {
    name: "Spongebob",
    cook: function (){
        console.log(this.name,"is cooking");
    }
}
let supervisor = {
    name: "Squidward",
    cashier: function (){
        console.log(this.name,"is at the cash register");
    }
}
let boss = {
    name: "Mr.Krabs",
    beInCharge: function (){
        console.log(this.name,"is in charge");
    }
}

//employee.cook();
//supervisor.cashier();
//boss.beInCharge();

employee.cook.call(supervisor);
supervisor.cashier.call(boss);
boss.beInCharge.call(employee);
//JavaScript Apply Methods***********************************************************************************************************************************
// apply() = Borrow an object's functions.
//           Similar to call(), but pass an array
//           in place of extra individual arguments

let classRoom = {

    takeAttendence: function(students){
        console.log(this.name,"is taking attendence");
        for(let i in students){
            console.log(students[i]);
        }
    }
}

let teacher = {
    name: "Mrs.Puff"
}

let students = ["Spongebob","Patrick","Sandy"];
classRoom.takeAttendence.apply(teacher, [students]);
//JavaScript Bind Methods***********************************************************************************************************************************
// bind() =  Borrows a function, & creates a copy. 
//           "this" keyword replaced with the object
//           passed in as an argument

speak = function(sound){
    console.log(this.name,"is",sound);
}

let dog = {
    name: "dog",
}

let parrot = {
    name: "parrot",
}

bark = speak.bind(dog, "barking");
chirp = speak.bind(parrot, "chirping");

bark();
chirp();
//JavaScript Error Handling***********************************************************************************************************************************
// try     = tests a block of code for errors.
// catch   = handles the error.
// throw   = creates custom errors. (throw exception)
// finally = execute code, after try and catch, regardless

try{
    let age = prompt("Enter your age: ");

    if(age == "") throw "You didn't enter in anything!";
    if(isNaN(age)) throw age + " isn't a number!";
    if(age < 18) throw "You need to be 18+ to sign up!";

    console.log("You are now signed up!");
}
catch(error){
    console.log(error);
}
finally{
    console.log("Thanks for visiting!");
}
//JavaScript Add Html Elments***********************************************************************************************************************************
// create HTML elements
// h1.innerHTML (vulnerable to XSS attacks)
// h1.innerText (better)

const h1 = document.createElement("h1");
const underline = document.createElement("u");
underline.innerText = "Hello World!";
h1.append(underline);
document.body.append(h1);

const h2 = document.createElement("h2");
const italic = document.createElement("i");
italic.innerText = "Sup?";
h2.append(italic);
document.body.append(h2);

const p = document.createElement("p");
const bold = document.createElement("b");
bold.innerText = "Bye...";
p.append(bold);
document.body.append(p);
//JavaScript Change Css Properties***********************************************************************************************************************************
// add/change CSS properties

document.querySelector("#myButton").onclick = function(){

    const h1 = document.querySelector("#myH1");

    console.log(h1.style);
    
    h1.style.color = "#00FF00";
    h1.style.backgroundColor = "black";
    h1.style.fontFamily = "consolas";
    h1.style.textAlign = "center";
    h1.style.border = "4px solid";
    h1.style.borderColor = "grey";
}
<!--- index.html ---->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="myH1">Hello World!</h1>
    <button id="myButton">Click me!</button>
    <script src="index.js"></script>
</body>
</html>
//JavaScript Mouse Events***********************************************************************************************************************************
// Mouse events
// element.addEventListener(type, function);

const div = document.querySelector("#myDiv");

div.style.backgroundColor = "grey";
div.style.width = "200px";
div.style.height = "200px";

div.addEventListener("click", e => {
    console.log("You clicked the mouse!");
    div.style.backgroundColor = "yellow";
})
/*
div.addEventListener("mousedown", e => {
    console.log("You are holding the mouse down!");
    div.style.backgroundColor = "red";
})
div.addEventListener("mouseup", e => {
    console.log("You let go of the mouse!");
    div.style.backgroundColor = "grey";
})

div.addEventListener("dblclick", e => {
    console.log("You double clicked!");
    div.style.backgroundColor = "purple";
})

div.addEventListener("contextmenu", e => {
    console.log("You opened the context menu");
})

div.addEventListener("mouseover", e => {
    console.log("You entered the square!");
    div.style.backgroundColor = "purple";
})
div.addEventListener("mouseleave", e => {
    console.log("You left the square!");
    div.style.backgroundColor = "grey";
})

div.addEventListener("mousemove", e => {
    console.log("You are within the square!");
})
*/
<!--- index.html ---->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="myDiv"></div>
    <script src="index.js"></script>
</body>
</html>
