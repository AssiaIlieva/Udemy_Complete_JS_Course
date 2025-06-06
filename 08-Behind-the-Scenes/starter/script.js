'use strict';
/*
function calcAge(birthyear) {
  const age = 2037 - birthyear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthyear}`;
    console.log(output);
    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      //Creating New variable with same name as outer scope's variable
      const firstName = 'Steven';

      //Reassigning oute scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    console.log(millenial);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';

calcAge(1991); 

////////////////
//Hoisting and TDZ in Practice

// Variables
// console.log(me);
// console.log(job);
// console.log(year);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

console.log(numProducts);

if (!numProducts) deleteShopCart();

var numProducts = 10;

function deleteShopCart() {
  console.log('All products deleted!');
}
  */

////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

const f = jonas.calcAge;
f();
