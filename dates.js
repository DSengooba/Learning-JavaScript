// JavaScript Date Objects
// Date objects are static. The "clock" is not "running".
// The computer clock is ticking, date objects are not.
// By default, JavaScript will use the browser's time zone and display a date as a full text string:

// Creating Date Objects
// Date objects are created with the new Date() constructor.
let m= new Date
console.log(m)

// new Date(date string)
// new Date(date string) creates a date object from a date string:
let y= new Date('2024-11-28' )
console.log('the date i create is', y)

const d = new Date("October 13, 2014 11:13:00");
console.log(d)

// new Date(year, month, ...)
// new Date(year, month, ...) creates a date object with a specified date and time.
let date1 = new Date(2024, 0, 1);
console.log(date1);

const d1 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d1)

// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
const d2 = new Date(2018, 15, 24, 10, 33, 30);
console.log('in this date the specified month was 15', d2)

// Specifying a day higher than max, will not result in an error but add the overflow to the next month:
const d3 = new Date(2018, 5, 35, 10, 33, 30);
console.log(d3)

// Using 6, 4, 3, or 2 Numbers
// 6 numbers specify year, month, day, hour, minute, second:
const d4 = new Date(2018, 11, 24, 10, 33, 30);
console.log('this date is specified by 6 numbers', d4)

// 5 numbers specify year, month, day, hour, and minute:
const d5 = new Date(2018, 11, 24, 10, 33);
console.log('this date is specified by 5 numbers', d5)

// 4 numbers specify year, month, day, and hour:
let d6 = new Date(2024, 0, 1, 10);

// 3 numbers specify year, month, and day:
let d7 = new Date(2024, 0, 1);
console.log('this date is specified by 3 numbers', d7);

// 2 numbers specify year and month:
let d8 = new Date(2024, 0);
console.log('this date is specified by 2 nymbers', d8);

// Previous Century
// One and two digit years will be interpreted as 19xx:
let Old1 = new Date(24, 0);
console.log('this is a date from the previous century', Old1);
// exaample 2 
const Old2 = new Date(99, 11, 24);
console.log('from the previous century', Old2)

// JavaScript Stores Dates as Milliseconds
// JavaScript stores dates as number of milliseconds since January 01, 1970.

// new Date(milliseconds)
// new Date(milliseconds) creates a new date object as milliseconds plus zero time:
const milliDate = new Date(100000000000);
console.log('this is a date from millisecounds', milliDate)
// Example 2 
let milliDate1 = new Date(0);
console.log('this is the 1st date from millisecounds', milliDate1);
// January 01 1970 minus 100 000 000 000 milliseconds is:
const milliDate2 = new Date(-100000000000);
console.log(milliDate2)
// January 01 1970 plus 24 hours is:
const milliDate3 = new Date(24 * 60 * 60 * 1000);
// or this below
const milliDate4 = new Date(86400000);
console.log('these 2 dates are the same', milliDate3)
console.log('these 2 dates are the same', milliDate4)
// 01 January 1970 plus 0 milliseconds is:
const milliDate5 = new Date(0);
console.log("Jan 1970 plus 0 millisecounds is", milliDate5)

// Displaying Dates
// JavaScript will (by default) output dates using the toString() method. 
// This is a string representation of the date, including the time zone. 
// The format is specified in the ECMAScript specification:

// new Date() without arguments, creates a date object with the current date and time:
const current = new Date();
console.log('this is the current date and time', current)
// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
const current1 = new Date();
current1.toString();
console.log('current date converted to string', current1)
// The toDateString() method converts a date to a more readable format:
const current2 = new Date();
current2.toDateString();
console.log('a more readable format', current2)
// The toUTCString() method converts a date to a string using the UTC standard:
const currentInUTC = new Date();
currentInUTC.toUTCString();
console.log('This is the current date in UTC', currentInUTC)
// The toISOString() method converts a date to a string using the ISO standard:
const ISOdate = new Date();
ISOdate.toISOString();
console.log('this is the current date in ISO', ISOdate)