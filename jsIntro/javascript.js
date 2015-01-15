
var name =prompt("what is your name");
alert(), confirm()
// Datatypes


// primitive

// number
2, 3, 4, 1.3

// booleans
true, false

// strings
"this is a string"
"1"
"5555"
'string'

// objects

// arrays
//[];

// objects
//{};

{
  "name": "calvin webster",
  "age": 35,
  "hobbies": "surfing"
}

// JSON - Javascript Object Notation

var myObj ={
  name: "calvin webster",
  age: 35,
  hobbies: "surfing"
  0: "my obj value"
}

myObj.name // "calvin webster"


// functions
function sum(x,y) {
  return x + y;
}

function multiply(x,y) {
  return x*y;
}

var multiply = function(x, y) {
  return x*y;
};

var mathFunctions = {
  sum: function(x,y) {
    if(x === 0) {
      return;
    }
    return x + y;
  },
  multiply: function(x,y) {
    return x*y;
  }
};

var calculateMortgage = function(income, assets) {
  var sumOfIncomeAssets = mathFunctions.sum(income, assets);

  return mathFunctions.multiply(sumOfIncomeAssets,0.25);

};


// logical operators
&& (and), || (or), + (plus), - (minus), = (assignment)

// === (strict equality), == (loose equality)

var calvin = true;
var luca = false;
(calvin && luca) = false
calvin || luca
calvin + luca
calvin - luca

// control flow

// conditional statement

 if(<condition>) {
   // do sometjing
 }

 if(calvin === "cool"  && chris === "cool") {
   // this will happen
   if(lindsay === "alright") {
     // do something else
   }
 } else if(calvin === "alright") {
   // do something else
 }

 // loops

 var myArray = ["Valerie", "Brent", 2, 1000];

 for(var i=0; i< myArray.length; i++) {

  if(typeof myArray[i] === "number") {
   console.log(myArray[i]);
 }

 }




 for(<incrementor name>; <condition>; incrementor/decrementor ) {

 }


 [1,3,2].forEach(function(idx) {
   console.log(idx);
 });
