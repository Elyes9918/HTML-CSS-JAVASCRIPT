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

//JavaScript Arrays***********************************************************************************************************************************
//JavaScript Statments***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
//JavaScript***********************************************************************************************************************************
