// JavaScript Array Search
// JavaScript Array indexOf()
// The indexOf() method searches an array for an element value and returns its position.
let ToyotaCars=['LandCruizer', 'Raum', 'Collora', 'Corona', 'Filder' ]
let position = ToyotaCars.indexOf('Corona') + 1;
console.log(position)

// JavaScript Array lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the 
// specified element.
let ToyotaCars1=['LandCruizer', 'Raum', 'Collora', 'Corona', 'Filder', 'Raum' ];
let position1= ToyotaCars1.lastIndexOf('Raum') + 1;
console.log(position1)

// JavaScript Array includes()
// This allows us to check if an element is present in an array (including NaN, unlike indexOf).
let ToyotaCars2=['LandCruizer', 'Raum', 'Collora', 'Corona', 'Filder', 'Raum' ];
let result5= ToyotaCars2.includes('Collora');
let result6= ToyotaCars2.includes('Mazda')
console.log(result5)
console.log(result6)

// JavaScript Array find()
// The find() method returns the value of the first array element that passes a test function.
let numbers= [10,20,30,40, 50, 55, 65, 85, 100]
let firstLarge= numbers.find(myFunction);

function myFunction(value, index, array){
    return value > 55;
}
console.log(firstLarge)

// JavaScript Array findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.
let numbers1= [10,20,30,40, 50, 55, 65, 85, 100]
let ItsIndex= numbers1.findIndex(myFunction);

function myFunction(value, index, array){
    return value > 55
}
console.log(ItsIndex)

// JavaScript Array findLast() Method
// he findLast() method that will start from the end of an array and return 
// the value of the first element that satisfies a condition.
let numbers2= [10,20,30,40, 50, 55, 65, 85, 100]
let firstLarge1 = numbers2.findLast(x => x > 40);
console.log(firstLarge1)

// JavaScript Array findLastIndex() Method
// the findLast() method that will start from the end of an array and return the value of the 
// first element that satisfies a condition.
let numbers3= [10,20,30,40, 50, 55, 65, 85, 100]
let lastIndex = numbers3.findLastIndex(x => x > 40);
console.log(lastIndex)
