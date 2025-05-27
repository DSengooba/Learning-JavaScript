// JavaScript Sorting Arrays
// Sorting an Array
// The sort() method sorts an array alphabetically:
let fuelTypes= ['Petrol', 'Diesel', 'jetA1', 'Ethanol', 'kerosene', 'Hydrogen', 'Natural Gas']
let sorted= fuelTypes.sort();
console.log(sorted)

// Reversing an Array
// The reverse() method reverses the elements in an array:
let fuelTypes1= ['Petrol', 'Diesel', 'jetA1', 'Ethanol', 'kerosene', 'Hydrogen', 'Natural Gas']
let reversed= fuelTypes1.reverse();
console.log(reversed)

// By combining sort() and reverse(), you can sort an array in descending order:
// like in the example below 
let fuelTypes2= ['Petrol', 'Diesel', 'jetA1', 'Ethanol', 'kerosene', 'Hydrogen', 'Natural Gas']
let sorted1=fuelTypes2.sort()
let reversed1= fuelTypes2.reverse();
console.log(sorted1, reversed1)

// JavaScript Array toSorted() Method
// the toSorted() method as a safe way to sort an array without altering the original array
// The difference between toSorted() and sort() is that the first method creates a new array, 
// keeping the original array unchanged, while the last method alters the original array.
let months = ["Jan", "Feb", "Mar", "Apr"];
let sorted2 = months.toSorted();
console.log(sorted2)

// JavaScript Array toReversed() Method
// toReversed() method as a safe way to reverse an array without altering the original array.
// The difference between toReversed() and reverse() is that the first method creates a new array, 
// keeping the original array unchanged, while the last method alters the original array.
let months1 = ["Jan", "Feb", "Mar", "Apr"];
let reversed2 = months1.toReversed();
console.log(reversed2)

// Numeric Sort
// By default, the sort() function sorts values as strings.
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1"
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:
let points = [40, 100, 1, 5, 25, 10];
let Score= points.sort(function(a, b){return a - b});
console.log(Score)

// we can use the same trick to sort an array descending:
let points1 = [40, 100, 1, 5, 25, 10];
let Score1= points1.sort(function(a, b){return b - a});
console.log(Score1)

// The Compare Function
// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments:


// Sorting an Array in Random Order
// Using a sort function, like explained above, you can sort an numeric array in random order
let points2 = [40, 100, 1, 5, 25, 10];
let Score2= points2.sort(function(){return 0.5 - Math.random()});
console.log('the sorted score is', Score2)

// The Fisher Yates Method
// The points.sort() method in the example above is not accurate. It will favor some numbers over others.
// The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!
// In JavaScript the method can be translated to this:
let points3 = [40, 100, 1, 5, 25, 10];

for (let i = points3.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points3[i];
  points3[i] = points3[j];
  points3[j] = k;
}
console.log

let x= 44.4
console.log(Math.floor(x))