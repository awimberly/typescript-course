"use strict";
// Literal types
let myName;
myName = 'Dave';
let userName;
userName = 'Amy';
// functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage('Hello');
logMessage(add(2, 3));
let substract = function (c, d) {
    return c - d;
};
logMessage(substract(10, 5));
// interface mathFunction {
//     (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(4, 5));
//optional parameters
const addAll = (a, b, c) => {
    let sum = a + b;
    if (typeof c !== 'undefined') {
        sum = a + b + c;
    }
    return sum;
};
//default parameter value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(2, 3, 2));
logMessage(addAll(2, 3));
logMessage(sumAll(2, 3));
logMessage(sumAll(undefined, 3));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1000, 1));
// never type is for errors or infinite loops
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of the never type
const numberOrstring = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
logMessage(numberOrstring('This'));
