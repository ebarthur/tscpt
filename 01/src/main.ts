/* 
 @github/ebarthur
  ... 
@ Basic Types
 - Implicit and Explicit Types
 24-02-2024
 */

let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: string | boolean;
let postId: string | number;
let isActive: number | boolean;
let re: RegExp;

myName = "Cramuel";
meaningOfLife = 42;
isLoading = true;
album = false;
re = /\w+/g;

function sum(a: any, b: number): number {
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
let bands: string[] = [];

bands.push("Metallica", "ABBA", "Queen");

// Tuple: fixed length array, stricter than an array
let myTuple: [string, number, boolean] = ["Cramuel", 42, true];

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

let myObj: Object;
myObj = []; // arrays are a type of object
myObj = bands;

const exampleObj = {
  prop1: "Mike",
  prop2: true,
};

// exampleObj.prop2 = 42; // error
// prop2 is locked to a boolean. It cannot be changed to a number

interface Artiste {
  name: string;
  active: boolean;
  albums?: (string | number)[]; // optional property
}
// type Artiste = {
//   name: string;
//   active: boolean;
//   albums?: (string | number)[]; // optional property
// };

// You can also use type instead of interface

let Future: Artiste = {
  name: "Future",
  active: true,
  albums: ["DS2", "Hndrxx", 56],
};

let Beethoven: Artiste = {
  name: "Beethoven",
  active: false,
};

const greetArtiste = (artiste: Artiste) => {
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

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
// Grade is enumerated type. It starts from position 0
// But we can specify the starting position and the rest will adapt
console.log(Grade.C); // 3

// Type Alias

type StringOrNum = string | number;

type stringOrNumArray = (string | number)[];

interface President {
  name: string;
  alive: boolean;
  term?: number;
  //   favMovie: (string | number)[];
  favMovie: stringOrNumArray;
  // }
}

type UserId = StringOrNum;
// The difference between type and interface is that interface cannot accept type aliases
// eg. interface UserId = StringOrNum; // error

// Literal Types
let myNum: 42;

let username: "Kira" | "Frank" | "Cramuel";
username = "Cramuel";
// username = "John"; // error

/* 
@ Functions
 24-02-2024
 */

//  type mathFunc = (a: number, b: number) => number;

interface mathFunc {
  (a: number, b: number): number;
}

const add: mathFunc = (a, b) => {
  return a + b;
};
// void is a side effect. Functions with void do not return anything
const logMsg = (message: any): void => {
  console.log(message);
};

const sub: mathFunc = (a, b) => {
  return a - b;
};

const mul: mathFunc = (a, b) => {
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
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// Default Parameters
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

console.log(addAll(1, 2, 3)); // 6
console.log(addAll(1, 2)); // 3

console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(1, 2)); // 5 why? because c is set to 2 by default

// Rest Parameters
const addAllNums = (...nums: number[]): number => {
  return nums.reduce((acc, curr) => acc + curr, 0);
};

let allNums = addAllNums(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(allNums); // 45

// Never Type:  for functions that explicitly throw an error
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// Return type never is used for functions that never return
const infiniteLoop = (): never => {
  while (true) {
    console.log("Hello");
  }
};
const isNumber = (input: any): boolean => {
  return typeof input === "number" ? true : false;
};
const numberOrString = (input: string | number): void => {
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
