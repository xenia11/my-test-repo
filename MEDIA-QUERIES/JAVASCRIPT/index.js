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
const moonDays = 27;
let moonRotations = yearDays / moonDays;

console.log(
    "In",
    yearDays,
    "earth days, the moon would rotate approximately",
    moonRotations,
    "times."
);

console.log(10 && (123 || "") && 3);

let n = 7;

if (n % 2 === 0) {
    console.log(n + " is even");
} else {
    console.log(n + " is odd");
}

let x = 4;
let y = 6;
// if(typeof x === 'number' && !isNaN(x))
if (x > y) {
    console.log(x + " is greater than " + y);
} else if (x < y) {
    console.log(x + " is less than " + y);
} else if (x == y) {
    console.log(x + " is equal to " + y);
}

let userInput = 0;
const type = typeof userInput;

if (type === "number") {
    console.log(type * type);
} else if (type === "string") {
    console.log(type);
} else {
    console.log("Invalid input");
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = "Today is Sunday";
        break;
    case 1:
        day = "Today is Monday";
        break;
    case 2:
        day = "Today is Tuesday";
        break;
    case 3:
        day = "Today is Wednesday";
        break;
    case 4:
        day = "Today is Thursday";
        break;
    case 5:
        day = "Today is Friday";
        break;
    case 6:
        day = "Today is Saturday";
}

console.log(day);

const parent1 = "brown";
const parent2 = "blue";

let blueProb = 0;
let brownProb = 0;
let greenProb = 0;

switch (parent1) {
    case "brown":
        switch (parent2) {
            case "brown":
                brownProb = 0.75;
                blueProb = 0.1875;
                greenProb = 0.625;
                break;
            case "blue":
                brownProb = 0.5;
                blueProb = 0.5;
                greenProb = 0;
                break;
            case "green":
                brownProb = 0.5;
                blueProb = 0.125;
                greenProb = 0.375;
                break;
        }
        break;
    case "blue":
        switch (parent2) {
            case "brown":
                brownProb = 0.5;
                blueProb = 0.5;
                greenProb = 0;
                break;
            case "blue":
                blueProb = 0.99;
                brownProb = 0;
                greenProb = 0.1;
                break;
            case "green":
                blueProb = 0.5;
                greenProb = 0.5;
                brownProb = 0;
                break;
        }
        break;
    case "green":
        switch (parent2) {
            case "brown":
                brownProb = 0.5;
                blueProb = 0.125;
                greenProb = 0.375;
                break;
            case "blue":
                blueProb = 0.5;
                greenProb = 0.5;
                brownProb = 0;
                break;
            case "green":
                greenProb = 0.75;
                brownProb = 0.1;
                blueProb = 0.125;
                break;
        }
        break;
}

console.log(
    `Your eye colors are ${parent1} and ${parent2}, the chances of your child having blue eyes is ${
        blueProb * 100
    }%, brown is ${brownProb * 100}% and green is ${greenProb * 100}%`
);

//1

function moonOrbits(earthDays) {
    const moonOrbit = 27.3;

    return earthDays / moonOrbit;
}

console.log(moonOrbits(54));
console.log(moonOrbits(365));

//2

function circleArea(radius) {
    const area = Math.PI * radius * radius;
    const perimeter = 2 * Math.PI * radius;

    return `The circle area is: ${
        (area * 100) / 100
    } and the circle perimeter is: ${(perimeter * 100) / 100}`;
}

console.log(circleArea(10));

//3

function yearsToDaysToSeconds(age) {
    const DAYS_IN_YEAR = 365;
    const yearsToDays = age * DAYS_IN_YEAR;
    const yearsToSeconds = age * DAYS_IN_YEAR * 24 * 60 * 60;

    return `If you're ${age} years old, you are also ${yearsToDays} days old and ${yearsToSeconds} seconds old.`;
}

console.log(yearsToDaysToSeconds(32));

//4

function remainder(num1, num2) {
    return num1 % num2;
}

console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));

//5

function calculatePoints(num2Pointers, num3Pointers) {
    const twoPointerPoints = num2Pointers * 2;
    const threePointerPoints = num3Pointers * 3;
    return twoPointerPoints + threePointerPoints;
}

console.log(calculatePoints(3, 4));

//6

function lessThan100(num1, num2) {
    return num1 + num2 < 100 ? true : false;
}

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

const hobbies = ["cooking", "dancing", "boxing"];

console.log(hobbies[0]);
const firstHobby = hobbies.unshift();
const newArrLenght = hobbies.length;

hobbies.push("watching a movie");
console.log(hobbies[hobbies.length - 1]);

console.log(`My hobbies are: ${hobbies.join(", ")}`);

const groceryList = ["eggs", "cheese", "bread", "broccolini", "garlic"];

console.log(groceryList.join("|"));

function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    console.log(total);
}

sum(10);

let totalSum = 0;
const sumTotal = (n) => {
    totalSum = (n * (n + 1)) / 2;
};

sumTotal(10);

const sumOfN2 = (n) => {
    if (n === 0) return n;
    return n + sumOfN2(n - 1);
};

sumOfN2(10);

console.log(totalSum);

function printEvens(n) {
    const evens = Array.from({ length: n / 2 }, (_, i) => (i + 1) * 2);
    console.log(evens.join(" "));
}

function printEvens(n) {
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}
console.log("hello:", printEvens(22));

const shoppingList = [
    "milk",
    "waterlemon",
    "eggs",
    "soap",
    "butter",
    "apples",
    "ïce-cream",
];

for (let i = 0; i < shoppingList.length; i++) {
    console.log(`${i + 1}. ${shoppingList[i]}`);
}

const randomString = "aaaaaa";
let capitalizedString = "";

for (let i = 0; i < randomString.length; i++) {
    if (i % 2 == 0) {
        capitalizedString += randomString[i].toUpperCase();
    } else {
        capitalizedString += String.fromCharCode(
            randomString[i].charCodeAt() + 1
        );
    }
}

console.log(capitalizedString);

const randomName = "rachel";
let nameWithoutVowels = "";

for (let i = 0; i < randomName.length; i++) {
    if (
        randomName[i] == "a" ||
        randomName[i] == "e" ||
        randomName[i] == "i" ||
        randomName[i] == "o" ||
        randomName[i] == "u"
    ) {
        randomName[i + 1] == "l" ||
        randomName[i + 1] == "r" ||
        randomName[i + 1] == "m"
            ? (nameWithoutVowels += randomName[i])
            : "";
    } else {
        nameWithoutVowels += randomName[i];
    }
}

console.log(nameWithoutVowels);

let i = 3;
while (i <= 10) {
    console.log(i);
    i++;
}

const arr = [];
console.log(arr.length);

const generateUniqueNumbers = () => {
    const uniqueNumbers = [];
    while (uniqueNumbers.length < 10) {
        const randomNumber = Math.floor(Math.random() * 16);
        if (!uniqueNumbers.includes(randomNumber)) {
            uniqueNumbers.push(randomNumber);
        }
    }
    return uniqueNumbers;
    console.log(uniqueNumbers);
};

console.log(generateUniqueNumbers());

const generateNumbers = (n, r, isUnique) => {
    if (isUnique == "true" && n > r) {
        throw new Error("Size of array cannot be greater than max value.");
    }

    const randomArray = [];

    while (randomArray.length < n) {
        const randomNumber = Math.floor(Math.random() * r);

        if (isUnique && randomArray.includes(randomNumber)) {
            continue;
        }

        randomArray.push(randomNumber);
    }

    return randomArray;
};

console.log(generateNumbers(10, 8, false));
