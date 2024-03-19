document.addEventListener("DOMContentLoaded", function () {
  const year = <HTMLSpanElement>document.getElementById("year");
  if (year) {
    const thisYear: string = new Date().getFullYear().toString();
    console.log("Current Year:", thisYear); // Debugging statement
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
  } else {
    console.error("Element with ID 'year' not found."); // Error handling
  }
});

// .......................

// Index Signatures Examples & More

type Plans = "Basic" | "Student" | "Premium";

type FullPlans = Record<Plans, number>;

const monthly: FullPlans = {
  Basic: 25,
  Student: 11,
  Premium: 45,
};

// Lets try another way using index signatures

interface AccountPlans {
  [index: string]: number;
}

const monthlys: AccountPlans = {
  "Early access": 8,
  Veteran: 18,
  Civilians: 25,
};

// ---------------------

type Info = Object[];

let heroInfo: Info = [
  {
    title: "New Features",
    hints:
      "Our company is working hard to keep up with the best technologies for our customers",
    date: "Expected June 2024",
  },
  {
    title: "Fast Services",
    hints:
      "We provide internet services at fibre optic speed reaching 24 countries",
    date: "",
  },
  {
    title: "Latest News",
    hints: "Check our docs to find out on all our new updates and learn",
    date: "Early 2024",
  },
];

for (const info of heroInfo) {
  console.log(info);
}

// as const keyword

// let heroInfo = [
//   {
//     title: "New Features",
//     hints:
//       "Our company is working hard to keep up with the best technologies for our customers",
//     date: "Expected June 2024",
//   },
//   {
//     title: "Fast Services",
//     hints:
//       "We provide internet services at fibre optic speed reaching 24 countries",
//     date: "",
//   },
//   {
//     title: "Latest News",
//     hints: "Check our docs to find out on all our new updates and learn",
//     date: "Early 2024",
//   },
// ] as const;

// -----------------------

// Generics
