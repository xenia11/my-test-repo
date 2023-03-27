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
