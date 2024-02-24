"use strict";
/*
 @github/ebarthur
  ...
@ Basic Types
 - Implicit and Explicit Types
 24-02-2024
 */
let myName;
let meaningOfLife;
let isLoading;
let album;
let postId;
let isActive;
let re;
myName = "Cramuel";
meaningOfLife = 42;
isLoading = true;
album = false;
re = /\w+/g;
function sum(a, b) {
    return a + b;
}
console.log(`Hello ${myName}`);
console.log(meaningOfLife);
console.log(isLoading);
console.log(album);
console.log(sum(0, 3));
/*
@ Arrays, Objects & Enums
 24-02-2024
 */
// Arrays
let stringArr = ["one", "two", "three"];
let guitars = ["strat", "tele", "les paul", 5150];
let mixedData = [1, "one", true, { name: "Cramuel" }];
let ball = [];
let bands = [];
bands.push("Metallica", "ABBA", "Queen");
// Tuple: fixed length array, stricter than an array
let myTuple = ["Cramuel", 42, true];
let mixed = ["John", 1, false];
stringArr[0] = "Jimi";
stringArr.push("four");
guitars.push("SG");
guitars.unshift("Flying V");
// guitars = stringArr;
// mixedData = guitars;
console.log(stringArr);
console.log(guitars);
console.log(bands);
// Objects
let myObj;
myObj = []; // arrays are a type of object
myObj = bands;
const exampleObj = {
    prop1: "Mike",
    prop2: true,
};
// type Artiste = {
//   name: string;
//   active: boolean;
//   albums?: (string | number)[]; // optional property
// };
// You can also use type instead of interface
let Future = {
    name: "Future",
    active: true,
    albums: ["DS2", "Hndrxx", 56],
};
let Beethoven = {
    name: "Beethoven",
    active: false,
};
const greetArtiste = (artiste) => {
    artiste.active
        ? console.log(`Hello ${artiste.name}`)
        : console.log(`Goodbye ${artiste.name}`);
};
greetArtiste(Beethoven); // Goodbye Beethoven
console.log(typeof myObj); // object
console.log(Future.albums);
console.log(Beethoven.albums); // undefined
// Enums
/*
 Unlike most TypeScript features, Enums are not type-level
 addition to JavaScript but something added to the language at runtime
 */
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
// Grade is enumerated type. It starts from position 0
// But we can specify the starting position and the rest will adapt
console.log(Grade.C); // 3
// The difference between type and interface is that interface cannot accept type aliases
// eg. interface UserId = StringOrNum; // error
// Literal Types
let myNum;
let username;
username = "Cramuel";
const add = (a, b) => {
    return a + b;
};
// void is a side effect. Functions with void do not return anything
const logMsg = (message) => {
    console.log(message);
};
const sub = (a, b) => {
    return a - b;
};
const mul = (a, b) => {
    return a * b;
};
console.log(add(2, 3));
logMsg(add(2, 3));
logMsg("Hello");
console.log(sub(5, 3));
logMsg(sub(5, 3));
console.log(mul(5, 3));
logMsg(mul(5, 3));
// Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default Parameters
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
console.log(addAll(1, 2, 3)); // 6
console.log(addAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(1, 2)); // 5 why? because c is set to 2 by default
// Rest Parameters
const addAllNums = (...nums) => {
    return nums.reduce((acc, curr) => acc + curr, 0);
};
let allNums = addAllNums(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(allNums); // 45
// Never Type:  for functions that explicitly throw an error
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// Return type never is used for functions that never return
const infiniteLoop = () => {
    while (true) {
        console.log("Hello");
    }
};
const isNumber = (input) => {
    return typeof input === "number" ? true : false;
};
const numberOrString = (input) => {
    isNumber(input)
        ? console.log(`${input} is a number`)
        : console.log(`${input} is a string`);
};
numberOrString("hello");
numberOrString(42);
/*
@ Type Assertion/ Type Casting
 24-02-2024
 */
