'use strict';

//use strict explanation
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log('I can drive');

//FUNCTIONS

// function logger() {
//   console.log('My name is Jonas');
// }

// //calling / running / invoking function

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// //Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// //Arrow function - one raw
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// //Arrow function - two parameters, multiple raws

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

//Functions calling another functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

//functions challenge
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins wins 🏆 ${avgDolphins} vs. ${avgKoalas}`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas wins 🏆 ${avgKoalas} vs. ${avgDolphins}`);
//   } else {
//     console.log('No team wins...');
//   }
// };

// console.log(checkWinner(scoreDolphins, scoreKoalas));

//Arrays
// const friend1 = 'Michal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michal', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// //friends = ['Bob', 'Alice'] - this is not allowed

// const firstName = 'Jonas';

// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);
// //Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// Array's Methods

//Add elements
// const friends = ['Michal', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);
// friends.unshift('John');
// console.log(friends);

//Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);
// console.log(friends.shift());

// console.log(friends.indexOf('Steven'));
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }
//Coding Exercise Challenge 2:
// const calcTip = function(bill){
//   if(bill >= 50 && bill <= 300){
//       return bill * 0.15;
//   }else{
//       return bill * 0.2
//   }
// }
// const calcTip2 = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]

//Objects
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// };
// console.log(jonas);

// console.log(jonas.lastName); //with this notation we need to use the exact propery name
// console.log(jonas['lastName']); //we can use this notation when we need to compute the property name

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends'
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     'Wrong request! Choose between firstName, lastName, age, job and friends'
//   );
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// console.log(`
//   ${jonas.firstName} has ${jonas.friends.length} and his best friend is called ${jonas.friends[0]}`);

//Object Methods

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },
//   // calcAge: function () {
//   //   return 2037 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas['calcAge']());
// console.log(jonas.age);
// console.log(jonas.getSummary());

//CHALLENGE #3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(
//     mark.bmi > john.bmi
//         ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//         : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
// );

// Iteration: The for Loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

//Looping Arrays, Breaking and Continuing

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   //Reading the array
//   console.log(jonas[i], typeof jonas[i]);

//   //Filling the array method 1
//   //   types[i] = typeof jonas[i];
//   //Filling tha array method 2
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //continue and break

// console.log('---ONLY STRINGS---');

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('---BREAK WITH NUMBER---');

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// //Loop in a loop

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// WHILE LOOP

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

// //CHALLENGE 4

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// let calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));


