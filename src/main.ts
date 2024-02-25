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

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific type
let a: One = "hello";
let b = a as Two; // less specific type
let c = a as Three; // more specific type

let d = <Three>a; // more specific type
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return a.toString() + b.toString();
};

let myVal: string = addOrConcat(8, 6, "concat") as string;
let nextVal: number = addOrConcat(8, 6, "add") as number;

console.log(addOrConcat(4, 5, "concat")); // 45
console.log(addOrConcat(4, 5, "add")); // 9

// The DOM
const img = document.getElementById("#img")!; // non-null assertion operator
const myinput = document.getElementById("input") as HTMLInputElement;
const myimg = <HTMLImageElement>document.getElementById("img"); // this will not work in tsx files or react

/*
 Classes
 24-02-2024
 */

class Coder {
  public readonly name: string;
  public age: number;
  protected lang: string[];
  private readonly isEmployed: boolean;

  constructor(
    name: string,
    age: number,
    lang: string[] = [],
    isEmployed: boolean
  ) {
    this.name = name;
    this.age = age;
    this.lang = lang;
    this.isEmployed = isEmployed;
  }

  public greet() {
    return `Hello, my name is ${this.name} and I am ${this.isEmployed ? "employed" : "unemployed"}`;
  }

  getAge() {
    return `Age: ${this.age}`;
  }
}

const person = new Coder("Cramuel", 20, ["Golang", "C++"], false);
console.log(person.greet());
console.log(person.getAge());

class WebDev extends Coder {
  constructor(name: string, age: number, lang: string[], isEmployed: boolean) {
    super(name, age, lang, isEmployed);
  }

  public greet() {
    return `Hello, my name is ${this.name} and I am a web developer.`;
  }
}

const prog = new Coder("Arthur", 18, ["Java"], true);

console.log(prog.greet());

// Implementing an interface to a class
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  public play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const me = new Guitarist("Van", "Bass Guitar");

console.log(me.play("strikes"));

// ---------------------------------

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const MIke = new Peeps("Mike");
const Andy = new Peeps("Andy");

console.log(Peeps.count);
console.log(John.id);

// ---------------------------------

// Getters and Setters

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top0"];
console.log(MyBands.data);

/*
 Index Signatures & keyof Assertions
 25-02-2024
 */

// Index Signatures

// interface TransactionObj {
//   [index: string]: number;
// }

interface TransactionObj {
  [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

// Dynamic access
let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

// ---------------------------------

interface Student {
  [index: string]: string | number | string[] | undefined;
  firstName: string;
  GPA: number;
  classes?: string[];
}

const student: Student = {
  firstName: "Amy",
  GPA: 3.04,
  test: 32,
};

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");

// ---------------------------------

// interface Incomes{
//   [key: string]: number
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}

/* 
 Generics
 25-02-2024
 */

const stringEcho = (arg: string): string => arg;

console.log(stringEcho("Mano"));

const echo = <T>(arg: T): T => arg; // makinng it generic so it can take arguments of any type

const isObj = <T>(args: T): boolean => {
  return typeof args === "object" && !Array.isArray(args) && args !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
