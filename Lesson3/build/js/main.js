"use strict";
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
let bands = [];
bands.push('Outkast');
bands.push('Fallout Boy');
console.log(...bands);
//Tuple
let myTuple = ['Arthur', 41, false];
let mixed = ['John', 1, false];
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
const exampleObj = {
    prop1: 'Arthur',
    prop2: true,
};
exampleObj.prop1 = "John";
;
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ["I", "II", 'IV']
};
const greetGuitarist = (guitarist) => {
    var _a;
    let msg = 'Hello';
    if (guitarist.name) {
        msg = `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return msg;
};
console.log(greetGuitarist(jp));
// Enums
// "Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the lanuage at runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
