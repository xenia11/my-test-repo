const delayedIncDecr = (n, mode, timeout = 2500) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let incN = n;
            if (mode === "inc") {
                incN += 1;
                resolve(incN);
            } else if (mode === "decr") {
                incN -= 1;
                resolve(incN);
            }
            reject(new Error(console.log(`The mode is wrong`)));
        }, timeout);
    });
};

const validateN = (incN) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof incN !== "number") {
                reject(new Error("param 1 must be a number"));
            }
            resolve(incN);
        }, 1000);
    });
};

delayedIncDecr(5, "inc", 1000)
    .then((incN) => validateN())
    .catch((error) => console.log(error))
    .then((num) => console.log("The new number is", num))
    .catch((err) => console.log(err.message));

// const delayedIncDec = (n, mode, timeout = 2500) => {
//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             if (mode === "inc") {
//                 n++;
//                 resolved(n);
//             } else if (mode === "dec") {
//                 n--;
//                 resolved(n);
//             }
//             if (
//                 typeof n !== "number" ||
//                 mode !== "inc" ||
//                 mode !== "dec" ||
//                 typeof timeout !== "number"
//             ) {
//                 rejected(new Error("Bad Input"));
//             }
//         }, timeout);
//     });
// };

// const myFilter = (array) => {
//     return array.filter((item) => item === item.toUpperCase());
// };

const rememberName = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(input);
        }, 2000);
    });
};

const promises = [];
promises.push(rememberName("Charise"));
promises.push(rememberName("Alex"));
promises.push(rememberName("Hannah"));

const namesP = Promise.all(promises);

namesP.then((names) => console.log(`Hi ${names[0]}, ${names[1]}, ${names[2]}`));

// const myAsyncFunc = async () => {
//     return "Hello!";
// };
// const myAsyncError = async () => {
//     throw new Error("oh no");
// };
// myAsyncFunc().then(console.log);
// myAsyncError().catch((e) => console.log(e.message));

// const myAsyncFunction = async () => {
//     return "Hello, world";
// };

// const myAsyncError = async () => {
//     throw new Error("Oh no");
// };
// myAsyncFunction().then(console.log);
// myAsyncError().catch((e) => console.warn(e.message));

// Once we use async we get access to await

// Some fake functions again

// const rememberName = (input) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof input === "string") resolve(input);
//             reject(
//                 new Error(
//                     `Name was not a string recieved ${typeof input}: ${input}`
//                 )
//             );
//         }, 2000);
//     });
// };

// const rememberLocation = (name) => {
//     const locations = {
//         charise: "Brisbane",
//         alexander: "Sydney",
//         rigene: "Melbourne",
//         maclean: "The Moon",
//         kenneth: "Sydney",
//     };
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const input = name.toLowerCase();
//             if (locations[input]) {
//                 resolve(locations[input]);
//             }
//             reject(new Error("Unkown Location for " + name));
//         }, 1000);
//     });
// };

// // This doesn't work because we lose access to the name variable
// // rememberName('Rigene')
// //   .then((name) => rememberLocation(name))
// //   .then((location) =>
// //     console.log(`Good morning, ${name}. How's the weather in ${location}`)
// //   );

// // Oh no we're in Promise Hell
// // It's even worse with error handling
// rememberName("Bob")
//     .then((name) => {
//         rememberLocation(name)
//             .then((location) => {
//                 console.log(
//                     `Good morning, ${name}. How's the weather in ${location}`
//                 );
//             })
//             .catch((e) => console.warn(e.message));
//     })
//     .catch((error) => console.warn(error.message));

// // async await syntax is much easier to read and understand
// // Error handling with try catch can pick up multiple errors

// const smallTalk = async (input) => {
//     try {
//         const name = await rememberName(input);
//         const location = await rememberLocation(name);
//         console.log(`Good morning, ${name}. How's the weather in ${location}`);
//     } catch (err) {
//         console.warn(err.message);
//     }
// };

// const safeSmallTalk = async (input) => {
//     // we can use await + catch to set default values
//     const name = await rememberName(input).catch(() => "Friend");
//     const location = await rememberLocation(name).catch(() => undefined);
//     if (!location) {
//         console.log("Hi " + name + ", how about that weather?");
//     } else {
//         console.log(`Good morning, ${name}. How's the weather in ${location}`);
//     }
// };

// smallTalk("Alex");

// smallTalk(42);
// safeSmallTalk("Kenneth");
// safeSmallTalk(22);

const sumOrsub = (n1, n2, mode, timeout = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof n1 !== "number" || typeof n2 !== "number") {
                reject(new Error("The param is not a number"));
            } else if (mode !== "sum" || mode !== "sub") {
                reject(new Error("Param mode should be sub or sum"));
            } else if (mode === "sum") {
                resolve(n1 + n2);
            } else {
                resolve(n1 - n2);
            }
        });
    });
};

sumOrsub(4, 2, "sum")
    .then((answer) => console.log(answer))
    .catch((e) => console.log(e.message));
sumOrsub(2, "", 2000)
    .then((answer) => console.log(answer))
    .catch((e) => console.log(e.message));
sumOrsub([], 4)
    .then((answer) => console.log(answer))
    .catch((e) => console.log(e.message));
console.log("hi");
