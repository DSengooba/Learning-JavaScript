// JS Iterables 
// Iterables are iterable objects (like Arrays).
// Iterables can be accessed with simple and efficient code.
// Iterables can be iterated over with for..of loops

// The For Of Loop
// The JavaScript for..of statement loops through the elements of an iterable object.
// Iterating Over a String
// You can use a for..of loop to iterate over the elements of a string:

let alphabets = ["a", "b", "c", "d", "e", "f", "g"];
for (let letters of alphabets) {
  console.log(letters);
}

// Example 2
let EvenNumbers = [2, 4, 6, 8, 10, 12, 14];
for (let number of EvenNumbers) {
  console.log('number', number);
}


// Iterating Over a Set
// You can use a for..of loop to iterate over the elements of a Set:
let mySet = new Set([1, 2, 3]);
for (let value of mySet) {
  console.log("value",value);
}

// Example 2 
let OurFlagColors = new Set(["black", "yellow", "red"]);
for (let UgColor of OurFlagColors) {
  console.log(UgColor, 'is on our flag');
}

// Iterating Over a Map
// You can use a for..of loop to iterate over the elements of a Map:
let myMap = new Map([['name', 'Daniel'], ['age', 38], ['gender', 'Male'], ['height', 6]]);
for (let [key, value] of myMap) {
  console.log(key, value);
}

// Home Made Iterable
// This iterable returns never ending: 10,20,30,40,.... Everytime next() is called:

const myIterable = {
  data: [10, 20, 30],
  [Symbol.iterator]() {
    let index = 0;
    const items = this.data;
    return {
      next() {
        if (index < items.length) {
          return { value: items[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};
// Use it in a for...of loop
for (const value of myIterable) {
  console.log(value);
}