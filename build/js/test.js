"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("year");
    if (year) {
        const thisYear = new Date().getFullYear().toString();
        console.log("Current Year:", thisYear); // Debugging statement
        year.setAttribute('datetime', thisYear);
        year.textContent = thisYear;
    }
    else {
        console.error("Element with ID 'year' not found."); // Error handling
    }
});
