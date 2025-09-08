// JavaScript Sets
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.

// How to Create a Set
// Passing an array to new Set()
// Create an empty set and use add() to add values

// The new Set() Method
let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
console.log(vowels);

// if we use the for....of to iterrate over the set
let vowels1 = new Set(['a', 'e', 'i', 'o', 'u']);
for (let vowel of vowels) {
  console.log(vowel);
}

// Create a Set and add values:
let myVowels = new Set(['a', 'e', 'i', 'o', 'u']);
myVowels.add(1);
myVowels.add(2);
myVowels.add(3);
myVowels.add(4);
myVowels.add(5);

console.log(myVowels);

// Create a Set and add variables:

let MyName = 'Daniel';
let age = 38;
let height = 6;

let mySet = new Set();
mySet.add(MyName);
mySet.add(age);
mySet.add(height);

console.log(mySet);

// If you add equal elements, only the first will be saved:
let MyName1 = 'Daniel';
let age1 = 38;
let height1 = 6;
let mySet1 = new Set();
mySet.add(MyName1);
mySet.add(age1);
mySet.add(height1);
mySet.add('Daniel'); // Adding a duplicate string
mySet.add(38); // Adding a duplicate number
mySet.add(6); // Adding a duplicate number

console.log(mySet);

