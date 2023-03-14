let fullname = "Ksenija Lunic";
let age = 26;

console.log("Hi! My name is " + fullname + " and I am " + age + " years old.");

age += 10;
console.log(age);
age -= 7;
console.log(age);
age *= 11;
console.log(age);

const yearDays = 365;
const moonDays = 27.3;
let moonRotations = yearDays / moonDays;

console.log(
    "In",
    yearDays,
    "earth days, the moon would rotate approximately",
    moonRotations,
    "times."
);

console.log(10 && (123 || "") && 3);
