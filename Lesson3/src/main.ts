let stringArr = ['one', 'hey', 'Arthur'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];

stringArr[0] = "John";
stringArr.push('hello');

guitars[0] = 1982;
guitars.unshift('Jim');

mixedData.push(...guitars);
console.log(mixedData);

let test = [];
let bands: string[] = [];
bands.push('Outkast');
bands.push('Fallout Boy');
console.log(...bands);

//Tuple
let myTuple: [string, number, boolean] = ['Arthur', 41, false];
let mixed = ['John', 1, false];

//Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);

const exampleObj = {
    prop1: 'Arthur',
    prop2: true,
}

exampleObj.prop1 = "John";

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
};

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ["I", "II", 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    let msg = 'Hello';
    if (guitarist.name) {
        msg = `Hello ${guitarist.name?.toUpperCase()}!`;
    }
    return msg;
}

console.log(greetGuitarist(jp));

// Enums
// "Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the lanuage at runtime."

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}
console.log(Grade.U);