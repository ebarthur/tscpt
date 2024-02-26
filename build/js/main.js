"use strict";
/*
 @github/ebarthur
  ...
@ Basic Types
 - Implicit and Explicit Types
 24-02-2024
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// convert to more or less specific type
let a = "hello";
let b = a; // less specific type
let c = a; // more specific type
let d = a; // more specific type
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return a.toString() + b.toString();
};
let myVal = addOrConcat(8, 6, "concat");
let nextVal = addOrConcat(8, 6, "add");
console.log(addOrConcat(4, 5, "concat")); // 45
console.log(addOrConcat(4, 5, "add")); // 9
// The DOM
const img = document.getElementById("#img"); // non-null assertion operator
const myinput = document.getElementById("input");
const myimg = document.getElementById("img"); // this will not work in tsx files or react
/*
 Classes
 24-02-2024
 */
class Coder {
    constructor(name, age, lang = [], isEmployed) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.isEmployed = isEmployed;
    }
    greet() {
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
    constructor(name, age, lang, isEmployed) {
        super(name, age, lang, isEmployed);
    }
    greet() {
        return `Hello, my name is ${this.name} and I am a web developer.`;
    }
}
const prog = new Coder("Arthur", 18, ["Java"], true);
console.log(prog.greet());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const me = new Guitarist("Van", "Bass Guitar");
console.log(me.play("strikes"));
// ---------------------------------
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const MIke = new Peeps("Mike");
const Andy = new Peeps("Andy");
console.log(Peeps.count);
console.log(John.id);
// ---------------------------------
// Getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top0"];
console.log(MyBands.data);
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
// Dynamic access
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    firstName: "Amy",
    GPA: 3.04,
    test: 32,
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
/*
 Generics
 25-02-2024
 */
const stringEcho = (arg) => arg;
console.log(stringEcho("Mano"));
const echo = (arg) => arg; // makinng it generic so it can take arguments of any type
const isObj = (args) => {
    return typeof args === "object" && !Array.isArray(args) && args !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
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
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "Finn" }));
// --------------------------
const getUsersProperty = (users, key) => {
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
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12
const myState = new StateObject([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
const recordAssignment = (assign) => {
    // send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// NOTE: assignVerified won't work with recordAssignment!
// Why? Try it and see what TS tells you :)
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { math: 85, english: 93 },
    Kelly: { math: 76, english: 15 },
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
// ReturnType
//type newAssign = { title: string, points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
