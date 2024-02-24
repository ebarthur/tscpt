 document.addEventListener("DOMContentLoaded", function() {
     const year = <HTMLSpanElement>document.getElementById("year");
     if (year) {
         const thisYear: string = new Date().getFullYear().toString();
         console.log("Current Year:", thisYear); // Debugging statement
         year.setAttribute('datetime', thisYear);
         year.textContent = thisYear;
     } else {
         console.error("Element with ID 'year' not found."); // Error handling
     }
 });
