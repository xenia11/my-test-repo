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
