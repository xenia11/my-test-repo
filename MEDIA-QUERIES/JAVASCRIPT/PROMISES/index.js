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
        }, timeout);
    });
};

const validateN = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof n !== "number") {
                reject(new Error("param 1 must be a number"));
            }
            resolve(n);
        }, 1000);
    });
};

delayedIncDecr("xzxv", "inc", 1000)
    .then((num) => validateN())
    .then((num) => console.log("The new number is", num))
    .catch((err) => console.log(err.message));

delayedIncDecr(9, "decr", 1000).then((num) =>
    console.log("The new number is", num)
);
delayedIncDecr(3, "inc").then((num) => console.log("The new number is", num));
