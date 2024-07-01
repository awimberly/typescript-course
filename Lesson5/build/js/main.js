"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; //less specific type
let c = a; // more specific type
//cannot use angle brackets in ReactJs
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'add');
10; //Forced casting or double casting
console.log(nextVal);
// The DOM
const img = document.querySelector('img'); //non-null assertion 
const myImg = document.getElementById('#img');
img.src;
myImg.src;
