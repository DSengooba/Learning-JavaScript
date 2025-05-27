// JavaScript Array Methods
// 1.JavaScript Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)

// JavaScript Array toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
let furniture3=['chairs', 'tables', 'centerTable', 'kitchencabins', 'sofaset' ]
let result= furniture3.toString()
console.log(typeof result)
let length = furniture3.length
console.log(length)

// JavaScript Array at()
// Get the third element of furnitre4 using at():
let furniture4=['chairs', 'tables', 'centerTable', 'kitchencabins', 'sofaset' ]
let myChoice = furniture4.at(2);
console.log(myChoice)

// Get the third element of furniture5 using []:
let furniture5=['chairs', 'tables', 'centerTable', 'kitchencabins', 'sofaset' ]
let myChoice1 = furniture4[2];
console.log(myChoice1)

// JavaScript Array join()
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
let furniture6=['chairs', 'tables', 'centerTable', 'kitchencabins', 'sofaset' ]
let result1 = furniture6.join(" * ")
console.log(result1)

// Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.
// This is what popping and pushing is:
// Popping items out of an array, or pushing items into an array.

// 1. JavaScript Array pop()
// The pop() method removes the last element from an array:
let furniture7=['chairs', 'tables', 'centerTable', 'kitchencabins', 'sofaset' ]
let result2= furniture7.pop()
console.log(furniture7)
console.log(result2)

// JavaScript Array push()
// The push() method adds a new element to an array (at the end):
let furniture8=['chairs', 'tables', 'centerTable', 'kitchencabins', 'sofaset' ]
let result4= furniture8.push('Rocker')
console.log(furniture8)

// Shifting Elements
// Shifting is equivalent to popping, but working on the first element instead of the last.
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
let furniture9=['chairs', 'tables', 'centerTable', 'kitchencabins', 'sofaset' ]
let newArry= furniture9.shift()
console.log(furniture9)
console.log(newArry)

// JavaScript Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
let furniture10=['chairs', 'tables', 'centerTable', 'kitchencabins', 'sofaset' ]
let new1= furniture10.unshift('Curtain Rods')
console.log(furniture10)

// Changing Elements
// Array elements are accessed using their index number:
// in this example am changing the elememt at index [0]
let cars= ['Toyota', 'Mazda', 'Mercedece', 'Audi', 'Nissan']
cars[0]= 'Subaru'
console.log(cars)

// JavaScript Array length
// The length property provides an easy way to append a new element to an array:
let cars1= ['Toyota', 'Mazda', 'Mercedece', 'Audi', 'Nissan'];
cars1[cars1.length]="subaru"
console.log(cars1)

// JavaScript Array delete()
// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.
let cars2= ['Toyota', 'Mazda', 'Mercedece', 'Audi', 'Nissan'];
delete cars2[1]
console.log(cars2)

// Merging Arrays (Concatenating)
// In programming languages, concatenation means joining strings end-to-end.
// Concatenation "snow" and "ball" gives "snowball".
// Concatenating arrays means joining arrays end-to-end.

// JavaScript Array concat()
// The concat() method creates a new array by merging (concatenating) existing arrays:
// (Merging Two Arrays)
let ListOne= ['firewood', 'charcoal', 'sawdust']
let ListTwo= ['Gas','Electric bunner', 'Kerosene stove' ]
let cookingSources= ListOne.concat(ListTwo)
console.log(cookingSources)

// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.
// (Merging Three Arrays)
let List1= ['firewood', 'charcoal', 'sawdust']
let List2= ['Gas','Electric bunner', 'Kerosene stove' ]
let list3= ['Benzine', 'spirit', 'ethanol']
let cookingSources2= List1.concat(List2, list3);
console.log(cookingSources2)