let age = [20, 33, 17, 44, 70, 103, 19]
let t = []
age.forEach(Daniel)
function Daniel(a, b, c) {
    let m = a * 2
    t.push(m) //pushes (adds) new items in the empty array we created at t
}
console.log('the modified array is', t)

// create an array of strings 
let names = ['Daniel', 'James', 'Godwins', 'Abraham', 'Paul', 'Juliet']
let New1 = []
names.forEach(theNames)
function theNames(l, o, n) {
    let y = 'the name is ' + l
    New1.push(y)
}
console.log(New1)

// Example 2 using the .forEach()
// in my example i thought about amking use of 2 arrays 


let country = ['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'Congo', 'South Sudan'];
let city = ['Kampala', 'Nairobi', 'Dar es Salaam', 'Kigali', 'Kinshasa', 'Juba'];
let EastAfrica = [];

country.forEach((value, index) => {
  let y = "Its city is " + city[index] + " in " + value;
  EastAfrica.push(y);
});

console.log(EastAfrica);

// how about if we added a 3rd array
let country1 = ['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'Congo', 'South Sudan'];
let city1 = ['Kampala', 'Nairobi', 'Dar es Salaam', 'Kigali', 'Kinshasa', 'Juba'];
let gdp = [2260, 2310, 1260, 910, 560, 280];
let EastAfrica1 = [];

country.forEach((value, index) => {
  let y = "Its city is " + city[index] + " in " + value + " with a GDP per capita of $" + gdp[index];
  EastAfrica1.push(y);
});

console.log(EastAfrica1)

// JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
let numbers1 = [45, 4, 9, 16, 25];
let numbers2 = numbers1.map(myNumbers);

function myNumbers(value) {
  return value * 2;
}
console.log(numbers2)

// JavaScript Array flatMap()
// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr)

// JavaScript Array filter()
// The filter() method creates a new array with array elements that pass a test.
// In the example, the callback function does not use the index and array parameters, so they can be omitted:
let numbers = [45, 4, 9, 16, 25, 19, 77];
let over18 = numbers.filter(myNumbers2);

function myNumbers2(value, index, array) {
  return value > 18;
}
console.log(over18)

// JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array.
// The reduce() method does not reduce the original array.
let numb3 = [45, 4, 9, 16, 25];
let sum = numb3.reduce(myNumbers3);

function myNumbers3(total, value, index, array) {
  return total + value;
}
console.log(sum)

// The reduce() method can accept an initial value:
let numb4 = [45, 4, 9, 16, 25];
let sum1 = numb4.reduce(myNumbers4, 105);

function myNumbers4(total, value) {
  return total + value;
}
console.log(sum1)

// JavaScript Array reduceRight()
// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
// The reduceRight() works from right-to-left in the array. See also reduce().
// The reduceRight() method does not reduce the original array.
let numb5 = [45, 4, 9, 16, 25];
let sum2 = numb5.reduceRight(myReduced1);

function myReduced1(total, value, index, array) {
  return total + value;
}
console.log(sum2)

// JavaScript Array every()
// The every() method checks if all array values pass a test.
// This example checks if all array values are larger than 18:
let numb6 = [45, 4, 9, 16, 25, 19, 77];
let over18a = numb6.every(myNumbers5);

function myNumbers5(value, index, array) {
  return value > 18;
}
console.log('All over 18 is', over18a)

// JavaScript Array some()
// The some() method checks if some array values pass a test.
let numb7 = [45, 4, 9, 16, 25, 19, 77];
let Someover18 = numb7.some(myOver18);

function myOver18(value, index, array) {
  return value > 18;
}
console.log('Some over 18 is ', Someover18)

// JavaScript Array.from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.
let myName = Array.from("DANIEL");
console.log(myName)

// JavaScript Array keys()
// The Array.keys() method returns an Array Iterator object with the keys of an array.
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}
console.log(text)

// JavaScript Array entries()
// The entries() method does not change the original array.
let cars = ['Nissan', 'Mazda', 'Toyota', 'KIA', 'LandRover'];
let iterator = cars.entries();
for (let pair of iterator) {
  console.log(pair[0] + ": " + pair[1]);
}

// JavaScript Array with() Method
// the Array with() method is a safe way to update elements in an array without altering the original array.
let months = ["January", "February", "Mar", "April"];
let myMonths = months.with(2, "March");
console.log(myMonths)

// JavaScript Array Spread (...)
// The ... operator expands an iterable (like an array) into more elements:

let myNumb1 = [1, 2, 3];
let moreNumbers = [...myNumb1, 4, 5, 6];
console.log(moreNumbers);
// The ... operator (spread operator) expands the numbers array into individual elements, 
// which are then combined with the additional elements 4, 5, and 6 to create a new array moreNumbers.

// You can also use it to merge two arrays:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let combined = [...arr1, ...arr2];
console.log(combined);



