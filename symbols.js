// Symbols are often used to add unique property keys to an object that won't collide with keys any 
// other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object
// Symbols are created using the Symbol() function. The function takes an optional string parameter,
// which can be used to give the Symbol a description.

// creating symbol
const x = Symbol()

typeof x; // symbol
console.log(x)

// You can add symbols as a key in an object using square brackets []. For example,
let id = Symbol("id");

let person = {
    fname: "Daniel",

    // adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {fname: "Daniel", Symbol(id): 123}

// two symbols with the same description

const value1 = Symbol('this is javascript');
const value2 = Symbol('this is javascript');

console.log(value1 == value2); // false