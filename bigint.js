// the Bigint operator
// Operators that can be used on a JavaScript Number can also be used on a BigInt.
// The bigint data type is intended for use when integer values might exceed the range that is supported by the int data type
let x = 99999999999999;
let y = 9999999999999999n;
console.log("the big int without n is ", x)
console.log("the big int with n is ", y)
// Example 2 how to create a Bignit
let z = 1234567890123456789012345n;
let c = BigInt(1234567890123456789012345)
console.log("the big int with n is not rounded off", z)
console.log("the big int in z is the same as", c)

// BigInt multiplication example 
let xb = 9007199254740995n;
let yb = 9007199254740995n;
let zb = xb * yb;
console.log("the big int will be multiplied and the result is a bigint", zb)

// BigInt division example
 let b = 5n;
 let d = b / 2n;
console.log(d) 
// let e = 5n;
// let f = Number(e) / 2
// console.log(f)

// BigInt data type (BigInt is a type of Binit)
let v = BigInt(999999999999999);
let type = typeof v;
console.log(typeof v)
