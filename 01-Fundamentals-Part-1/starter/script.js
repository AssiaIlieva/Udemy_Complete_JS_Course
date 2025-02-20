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

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
