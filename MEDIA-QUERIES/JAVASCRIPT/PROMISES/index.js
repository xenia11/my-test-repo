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

const myAsyncFunc = async () => {
    return "Hello!";
};
const myAsyncError = async () => {
    throw new Error("oh no");
};
myAsyncFunc().then(console.log);
myAsyncError().catch((e) => console.log(e.message));
