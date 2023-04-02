const couch = {
    name: "Martyna",
    age: 23,
    city: "Melbourne",
};
const couch1 = {
    name: "Martyna",
    age: 23,
    city: "Melbourne",
};

const { name: newname, ...rest } = couch;

console.log(name);
console.log(rest);
console.log(couch);

// let val = 30;
// for (let i = 5; i < 9; i++) {
//     val += 2;
// }

// console.log(val);

// const t = "k";
// const f = "dd";

// const fullName = (last) => {
//     return first + "" + last;
// };

// console.log(fullName(t));

// const reverse = (arr = [], inc = 1) => {
//     const inc =
//         (inc = 1) =>
//         (n) =>
//             n + inc;
//     return arr.slice().reverse().map(increment(inc));
// };

// console.log(reverse([1, 2, 3, 4, 5], 2));

// const userName = getUserName();

// if (userName.length < 6) {
//     let response = "username ss";
// } else if (userName.length > 24) {
//     let response = "dfsfs";
// } else if (userName.match(/\W/)) {
//     let response = "fsfssdf";
// }

// console.log(response);\

const getUserName = (item) => {
    return item;
};
const userName = getUserName("ks%$^$&&$%e");
let response;

if (userName.length < 6) {
    response = `username must be...`;
} else if (userName.length > 24) {
    response = `username must be...`;
} else if (userName.match(/\W/)) {
    response = `username must contain ...`;
}

console.log(response);

if (8 && 7 === "7") {
    console.log("a");
} else if (7 === "7" || 8) {
    console.log("b");
} else {
    console.log("c");
}
// const { name, ...rests } = couch1;

// console.log(couch);
// couch["newName"] = couch["name"];
// delete couch["name"];
// console.log(couch);

// let keys = Object.keys(couch);
// keys[0] = keys["first name"];
// console.log("ahah", Object.keys(couch));
// console.log(keys);
// const { fn, ...rest } = couch;

// console.log("Newest", couch);
// // keys[2] = "newEmail";

// const source = 'Convert to'.split('');
// let str='';

// for (let i = 0; i < source.length; i++) {
//     if(source[i] === '');
//     str+= "_";
//     else
//     str +=source[i].toLowerCase();

// }

const person = { name: "allem" };
console.log(`${("" + person.age).slice(4, 6)}nance`);

const arr = new Array(2).fill(null);
console.log(`Aspi${arr.pop() ?? "ra"}tions`);

const car = {
    brand: "Toyota",
    year: 2010,
    colour: "red",
    wheels: 4,
};

console.log(Object.keys(car)); // array of obj keys
console.log(Object.values(car)); //arr of obj values
console.log(Object.entries(car)); //arr of nested arr e.g. [['name', "Toyota"], ['year', 2010]]

const translate = {
    a: "c",
    b: "z",
    c: "r",
};

const reverseTranslate = {};

Object.keys(translate).map((key) => {
    const value = translate[key];
    reverseTranslate[value] = key;
});

console.log(reverseTranslate);

// 1
const movie = {
    title: "Dead Poets Society",
    yearReleased: 1989,
    director: "Peter Weir",
    genre: ["Drama", "Teen", "Comedy"],
};

// Using object destructuring, create a function that returns a string that says what the title and the genres of the passed object are.

// @param {title: string, yearReleased: number, director: string, genres: string[]}

// @returns 'The genres of the movie title are genre1, genre2'

const getTitleAndGenre = (obj) => {
    const { title, genre } = obj;

    console.log(typeof title);

    const genres = genre;
    const movieTitle = title;
    return `The genres of the ${movieTitle} are: ${genres.map(
        (title) => " " + title
    )}`;
    // return
};

// checking if returned the right value
console.log(getTitleAndGenre(movie));

// 2
const recipe = {
    name: "Spaghetti Bolognese",
    country: "Italy",
    isVegetarian: false,
    mealIngredients: [
        "Minced beef",
        "tomato sugo",
        "basil",
        "onion",
        "garlic",
        "parmesan",
    ],
};

// Using object destructuring, create a function that renames the key of an object. It should not modify the original object.

// @param {name: string, country: string, isVegetarian: boolean, mealIngredients: string[]}
// @returns {name; string, country: string, isVegetarian: boolean, ingredients: string[]}

const renameKey = (obj) => {
    const { mealIngredients: ingredients, ...rest } = obj;
    const newrecipe = { ingredients, ...rest };
    return newrecipe;
};

console.log(renameKey(recipe));

// 3

const codingSchool = {
    name: "_nology",
    languages: ["JavaScript", "Java"],
    offices: [
        {
            country: "Australia",
            city: "Sydney",
        },
        {
            country: "UK",
            city: "Bristol",
        },
    ],
};

// Using destructuring, create a function that returns the city of the first office of the given company

// @param {name: string, languages: string[], offices: {country: string, city: string}[]}

// @returns {string}  the name of the city of the first office

const returnFirstCity = (obj) => {
    // return
    const { name, offices } = obj;

    return `${offices[0].city} is the name of the city of the first office ${name}`;
};

console.log(returnFirstCity(codingSchool));

// 4

const postsArray = [
    {
        id: 123,
        createdBy: "user16",
        commentNo: 5,
    },
    {
        id: 456,
        createdBy: "user20",
        commentNo: 5,
    },
    {
        id: 789,
        createdBy: "user32",
        commentNo: 5,
    },
];

// given an array of post objects create a function that returns a new array of posts, each object in the new array should have keys renamed as per the example.

// @param {{id: number, createdBy: number, commentNo: number}[]}

// @returns {{postId: number, creator: number, postComment: number}[]}
const newPostArr = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let { id, createdBy, commentNo } = arr[i];
        let newarr = {
            postId: id,
            creator: createdBy,
            postComment: commentNo,
        };
        result.push(newarr);
    }
    return result;
};

console.log(newPostArr(postsArray));

// 5
const forecast = {
    yesterday: { low: 14, high: 32 },
    today: { low: 18, high: 34 },
    tomorrow: { low: 20, high: 28 },
};

// using object destructuring, create a function that returns the value of the low temperature for today

// @param { yesterday: { low: number, high: number }, today: { low: number, high: number }, tomorrow: { low: number, high: number } }

// return {number} the value of the low temperature for today
const getTodayLow = (obj) => {
    const { today, ...rest } = obj;
    return `${today.low} is the value of the low temperature for today`;

    // const{today: {low}} = obj;
    // return low;
};

console.log(getTodayLow(forecast));

const ob = {
    id: "https://docs.atlassian.com/jira/REST/schema/error-collection#",
    title: "Error Collection",
    type: "string",
    properties: {
        errorMessages: {
            type: "array",
            items: {
                type: "string",
            },
        },
        errors: {
            type: "object",
            patternProperties: {
                ".+": {
                    type: "string",
                },
            },
            additionalProperties: false,
        },
        status: {
            type: "integer",
        },
    },
    additionalProperties: false,
};

ob.newob = "test";

console.log(ob);

const newob = (objected) => {
    const p = Object.entries(objected);
    const t = p.filter((x) => x[0] === "type" && x[1] === "string"); // type:"object"

    // daj mi sve ciji je type x[1] == object
    const childLevelOne = p.filter((x) => typeof x[1] == "object"); // type:"object"
    if (childLevelOne.length == 0) return;

    t.push(childLevelOne.filter((x) => x[0] === "type" && x[1] === "string"));

    const childLevelTwo = childLevelOne.filter((x) => typeof x[1] == "object");
    if (childLevelTwo.length == 0) return;

    t.push(childLevelTwo.filter((x) => x[0] === "type" && x[1] === "string"));
    console.log(t);
};

newob(ob);
