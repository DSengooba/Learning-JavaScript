// undefined is a primitive value in JavaScript that represents the absence of a value. 
// It is automatically assigned to variables that have been declared but not initialized, 
// or to function arguments for which no value was provided. It is also the return value of a 
// function that does not explicitly return anything
// Here are some exaples. 
let x;
console.log(x); // undefined

function myFunc(a, b) {
    console.log(a, b);
}

myFunc(1); // 1 undefined

function noReturn() { }
console.log(noReturn()); // undefined

const obj = {};
console.log(obj.name); // undefined

const arr = [1, 2, 3];
console.log(arr[3]); // undefined

// more examples 
let v;
if (v === undefined) {
  text = "v is undefined";
} else {
  text = "v is defined";
}

// typeof 
let b;
if (typeof b === "undefined") {
  text = "b is undefined";
} else {
  text = "b is defined";
}