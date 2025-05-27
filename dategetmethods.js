// JavaScript Get Date Methods
// The new Date() Constructor
// In JavaScript, date objects are created with new Date().
// new Date() returns a date object with the current date and time.

// Get the Current Time
const date = new Date();
console.log(date)

// 1. The getFullYear() Method
// The getFullYear() method returns the year of a date as a four digit number:
const byYear = new Date("2021-03-25");
byYear.getFullYear();
console.log('getFullyear is', byYear)

// 2. The getMonth() Method
// The getMonth() method returns the month of a date as a number (0-11).
const byMonth = new Date("2021-03-25");
byMonth.getMonth()
console.log('getMonth is', byMonth)
// const d = new Date();
const byMonth1 = new Date();
byMonth1.getMonth();
console.log('this is the current date when we use getMonth', byMonth1)

// You can use an array of names to return the month as a name:
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d1 = new Date("2021-03-25");
let month = months[d1.getMonth()];
console.log('the month in this date is', month)
// the current date month
const months1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentDate = new Date();
let month1 = months[currentDate.getMonth()];
console.log('the cuurent month for todays date is', month1)

// 3. The getDate() Method
// The getDate() method returns the day of a date as a number (1-31):
const dateDate = new Date("2021-03-25");
dateDate.getDate();
console.log('the day in this date is', dateDate.getDate()); 
// using the current date 
const dateDate1 = new Date();
dateDate1.getDate();
console.log('the day in the current date', dateDate1.getDate())

// 4. The getHours() Method
// The getHours() method returns the hours of a date as a number (0-23):
let dateHours = new Date("2024-01-01T15:30:00");
console.log('the hours in this date are', dateHours.getHours());  // returns 15
// on the current date 
const dateHours1 = new Date();
dateHours1.getHours();
console.log('the hours in the current date are', dateHours1.getHours())

// 5. The getMinutes() Method
// The getMinutes() method returns the minutes of a date as a number (0-59):
let dateMins = new Date("2024-01-01T15:30:00");
dateMins.getMinutes();
console.log('the miniutes in this date are', dateMins.getMinutes());  // returns 30
// using the current date 
const dateMins1 = new Date();
dateMins1.getMinutes();
console.log('the miniutes in the current date are', dateMins1.getMinutes())

// 6. The getSeconds() Method
// The getSeconds() method returns the seconds of a date as a number (0-59):
let dateSec = new Date("2024-01-01T15:30:45");
dateSec.getSeconds();
console.log('the seconds in this date are', dateSec.getSeconds());  // returns 45
// using the current date 
const dateSec1 = new Date();
dateSec1.getSeconds();
console.log('the seconds in the current date are', dateSec1.getSeconds());

// 7. The getMilliseconds() Method
// The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
let dateMilli = new Date("2024-01-01T15:30:45.123");
dateMilli.getMilliseconds();
console.log('the milliseconds in this date are', dateMilli.getMilliseconds());  // returns 123
// using the current date 
const dateMilli1 = new Date();
dateMilli1.getMilliseconds();
console.log('the milliseconds in the current date are', dateMilli1.getMilliseconds())

// 8. The getDay() Method
// The getDay() method returns the weekday of a date as a number (0-6).
let dateDay = new Date("2024-01-01");
dateDay.getDay();
console.log('the day in this date is', dateDay.getDay());  
// Using the current date
const dateDay1 = new Date();
dateDay1.getDay();
console.log('the day in the current date is', dateDay1.getDay())
// Using an aray of names 
// You can use an array of names, and getDay() to return weekday as a name:
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeek = new Date("2024-01-01");
console.log('the day of the week in this date is', weekdays[dayOfWeek.getDay()]);
// using the curent date
const weekdays1 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek1 = new Date();
let dayOfWeek2 = weekdays1[dayOfWeek1.getDay()];
console.log('the day of the week in the current date is', weekdays1[dayOfWeek1.getDay()])

// 9. The getTime() Method
// The getTime() method returns the number of milliseconds since January 1970
const d = new Date("1970-01-01");
d.getTime();
console.log('the number of milliseconds in this date are', d.getTime())
// In a given date 
const d2 = new Date("2021-03-25");
d2.getTime();
console.log('the number of milliseconds in the date are', d2.getTime())
// using the current time 
const d3 = new Date();
d3.getTime();
console.log('the number of milliseconds in the current time are', d3.getTime())

// 10. The Date.now() Method
// Date.now() returns the number of milliseconds since January 1, 1970.
let ms = Date.now();
console.log(ms)

// Calculate the number of years since 1970/01/01:
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);
console.log('there are', years, 'years')