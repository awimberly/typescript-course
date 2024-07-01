// Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[]
type Guitarist = {
    name: string,
    active?: boolean,
    albums: stringOrNumberArray
};

type userId = stringOrNumber;

// Literal types
let myName: 'Dave';
myName = 'Dave';
let userName: 'Dave' | 'John' | 'Amy';
userName = 'Amy';

// functions
const add = (a: number, b: number): number => {
    return a + b;
}

const logMessage = (message: any): void => {
    console.log(message);
}

logMessage('Hello');
logMessage(add(2,3));

let substract = function (c: number, d: number): number {
    return c - d ;
}

logMessage(substract(10,5));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//     (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
    return c * d;
}
logMessage(multiply(4,5));

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    let sum = a + b;
    if (typeof c !== 'undefined') {
        sum =  a + b + c;
    }
    return sum;
}
//default parameter value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}

logMessage(addAll(2,3,2));
logMessage(addAll(2,3));
logMessage(sumAll(2,3));
logMessage(sumAll(undefined,3));

//Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
}
logMessage(total(1000,1));

// never type is for errors or infinite loops
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++;
        if (i > 100) break;
    }
}
//custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
}

//use of the never type
const numberOrstring = (value: number | string): string => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number';
    return createError('This should never happen!');
}

logMessage(numberOrstring('This'));