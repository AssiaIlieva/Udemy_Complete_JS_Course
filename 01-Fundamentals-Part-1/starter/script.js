// const heightMark = 1.69;
// const weightMark = 78;
// const heigthJohn = 1.95;
// const weightJohn = 95;

// let BMI_Mark = weightMark / heightMark ** 2;
// console.log(BMI_Mark);

// let BMI_John = weightJohn / heigthJohn ** 2;

// console.log(BMI_John);
// console.log('This is \nmulti-line \nstring');
// console.log(
//   `This is
// a multi-line
// string`
// );

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;

// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number('Jonas'));
// console.log(typeof NaN);

//console.log(String(23), 23);

//type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * '2');
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + '5');
// console.log('10' - '4' - '3' - 2 + '5');

// 5 falsy values: 0, ' ', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log('You should get a job!');
// }

// let height;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

//Equality Operators == vs. ===

// const age = '18';
// if (age === 18) console.log('You just became an adult (strict)');
// if (age == 18) console.log('You just became an adult (loose)');

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {
//   // '23' == 23
//   console.log('Cool! 23 is an amazing number!');
// }
// if (favourite === 23) {
//   // '23' ≠ 23
//   console.log('Cool! 23 is an amazing number!');
// }

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // it will be a number and 23 === 23
//   console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//   console.log('7 is alse a cool number');
// } else {
//   console.log('Number is not 23 or 7');
// }

// if (favourite !== 23) console.log('Why not 23?');

// Logical operatiors

// const hasDrivingLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDrivingLicense && hasGoodVision); //false
// console.log(hasDrivingLicense || hasGoodVision); // true
// console.log(!hasDrivingLicense); // false

// const shouldDrive = hasDrivingLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }
// const isTired = false;

// if (hasDrivingLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const day = 'friday';

// switch (day) {
//   case 'monday': //day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thurday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// Conditional (Ternary) Operator

const age = 15;
age >= 18
  ? console.log('I like to drink wine 🍷')
  : console.log('I like to drink water 🥛');

const drink = age >= 18 ? 'wine 🍷' : 'water 🥛';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🥛'}`);
