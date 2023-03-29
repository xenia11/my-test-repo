export const invalidParamType = new Error("error error!");

export const rectangleArea = (width, height) => {
    if (typeof height !== "number" || typeof width !== "number") {
        throw invalidParamType;
    }
    return width * height;
};

// try {
//     console.log(rectangleArea("ff", "ff"));
// } catch (error) {
//     console.error(error);
// }
