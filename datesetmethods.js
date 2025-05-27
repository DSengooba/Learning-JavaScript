// JavaScript Set Date Methods
// Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

// 1. The setFullYear() Method
// The setFullYear() method sets the year of a date object
let dateFullYear = new Date();
dateFullYear.setFullYear(2024);
console.log('in this example date is set to full year', dateFullYear.getFullYear());  // returns 2024
// The setFullYear() method can optionally set month and day:
const d = new Date("January 01, 2025");
d.setFullYear(2020, 11, 3);
console.log('month and day optionally added to year', d)

// 2. The setMonth() Method
// The setMonth() method sets the month of a date object (0-11):
let dateMonth = new Date();
dateMonth.setMonth(0);  // sets month to January
console.log('the set month is', dateMonth.getMonth(), 'which is January');  

// 3. The setDate() Method
// The setDate() method sets the day of a date object (1-31):
let dateDate = new Date();
dateDate.setDate(15);
console.log('A day of a month is set to', dateDate.getDate());  // returns 15
// The setDate() method can also be used to add days to a date:
let dateDate1 = new Date();
dateDate1.setDate(dateDate1.getDate() + 5);
console.log('the new current date with 5 days addaed', dateDate1);

// 4. The setHours() Method
// The setHours() method sets the hours of a date object (0-23):
let dateHours = new Date();
dateHours.setHours(12);
console.log("in this date hours are set to", dateHours.getHours());
// The setHours() method can also be used to set minutes and seconds.
const dateHours1 = new Date("January 01, 2025");
dateHours1.setHours(22, 10, 20);
console.log('minutes and seconds have been added to this date', dateHours1)

// 5. The setMinutes() Method
// The setMinutes() method sets the minutes of a date object (0-59):
const dateMins = new Date("January 01, 2025");
dateMins.setMinutes(30);
console.log('in this date minuites are set to', dateMins)
// Example 2
let dateMins1 = new Date();
dateMins1.setHours(12);
dateMins1.setMinutes(30);
console.log('the set time and minuites is', dateMins1.getHours() + ":" + dateMins1.getMinutes());  // returns 12:30

// 6. The setSeconds() Method
// The setSeconds() method sets the seconds of a date object (0-59):
const dateSec = new Date("January 01, 2025");
dateSec.setSeconds(30);
console.log('the set seconds in this date is 30', dateSec)
// Example 2
let dateSec1 = new Date();
dateSec1.setHours(12);
dateSec1.setMinutes(30);
dateSec1.setSeconds(45);
console.log('seconds are set to 45 in this date', dateSec1.getHours() + ":" + dateSec1.getMinutes() + ":" + dateSec1.getSeconds());  // returns 12:30:45

// Compare Dates
// Dates can easily be compared
// The following example compares today's date with January 14, 2100:
let compared = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  compared = "Today is before January 14, 2100.";
} else {
  compared = "Today is after January 14, 2100.";
}
console.log(compared)