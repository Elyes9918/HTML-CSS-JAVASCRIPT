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

//JavaScript Array.Map()***********************************************************************************************************************************
//JavaScript Array.filter()***********************************************************************************************************************************
//JavaScript Array.Reduce()***********************************************************************************************************************************
//JavaScript Call Backs***********************************************************************************************************************************
//JavaScript Function Expressions***********************************************************************************************************************************
//JavaScript Nested Functions***********************************************************************************************************************************
//JavaScript Anonoymous Functions***********************************************************************************************************************************
//JavaScript Closures***********************************************************************************************************************************
//JavaScript Closure Example***********************************************************************************************************************************
//JavaScript Arrow Functions***********************************************************************************************************************************
//JavaScript Numeric Sorting***********************************************************************************************************************************
//JavaScript Classes***********************************************************************************************************************************
//JavaScript Constructors***********************************************************************************************************************************
//JavaScript this Keyword***********************************************************************************************************************************
//JavaScript Static Keyword***********************************************************************************************************************************
//JavaScript Inheritance***********************************************************************************************************************************
//JavaScript Method Overriding***********************************************************************************************************************************
//JavaScript SuperKeyword***********************************************************************************************************************************
//JavaScript Prototypes***********************************************************************************************************************************
//JavaScript Objects as Arguments***********************************************************************************************************************************
//JavaScript Array Of Objects***********************************************************************************************************************************
//JavaScript Array of Functions***********************************************************************************************************************************
//JavaScript Getters and setters***********************************************************************************************************************************
//JavaScript Template Literals***********************************************************************************************************************************
//JavaScript Spread Operators***********************************************************************************************************************************
//JavaScript Parameters***********************************************************************************************************************************
//JavaScript Call Methods***********************************************************************************************************************************
//JavaScript Apply Methods***********************************************************************************************************************************
//JavaScript Bind Methods***********************************************************************************************************************************
//JavaScript Error Handling***********************************************************************************************************************************
//JavaScript Add Html Elments***********************************************************************************************************************************
//JavaScript Change Css Properties***********************************************************************************************************************************
//JavaScript Mouse Events***********************************************************************************************************************************
