//Type Assertions / Type Casting
type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two; //less specific type
let c = a as Three // more specific type

//cannot use angle brackets in ReactJs
let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
}

let myVal: string = addOrConcat(2,2,'concat') as string;
//Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2,2,'add') as number;

(10 as unknown) as string; //Forced casting or double casting

console.log(nextVal);

// The DOM
const img = document.querySelector('img')!; //non-null assertion 
const myImg = document.getElementById('#img') as HTMLImageElement;

img.src;
myImg.src