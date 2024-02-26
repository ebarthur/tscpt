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

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const isTrue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here
  return user;
};

console.log(processUser({ id: 1, name: "Finn" }));

// --------------------------

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));

///////////////////////////////////////

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);

/* 
 Utility Types 
 26-02-2024
 */

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc.
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// NOTE: assignVerified won't work with recordAssignment!
// Why? Try it and see what TS tells you :)

recordAssignment({ ...assignGraded, verified: true });

// Record
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  math: number;
  english: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { math: 85, english: 93 },
  Kelly: { math: 76, english: 15 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
