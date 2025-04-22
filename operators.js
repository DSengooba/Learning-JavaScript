// Assign the value 10 to a 
let a = 10
let b = 44
console.log(a+b)
let firstname="Daniel"
let secoundname="Sengooba"
console.log(firstname+secoundname)
let x = 20
let y = 46
let z = 77
// this is an example of addition
console.log(x + y)
// subtraction
console.log(z - x)
// multiplication
console.log(y * z)
// division
console.log(z / x)
// this is an example of exponational
let h = 10
console.log(h**10)
// Modulus
let c = 40
console.log(c%5)
// An example of increament
let t = 7
t++
console.log(t++)
// An example of decreament
let f = 19
f--
console.log(f--)
let j = 25
j+=5
console.log(j+=5)
// j=j+5
let k = 25
k-=5
console.log(k-=5)
// k=k-5
let r = 25
r*=5
console.log(r*=5)
// r=r*5
let w = 25
w/=5
console.log(w/=5)
// w=w/5
let l = 25
l%=5
console.log(l%=5)
// l=l%5
let q = 25
q**=5
console.log(q**=5)
// q=q**5

// comparision operators 
console.log(4==4)
console.log(4=="4")
console.log(4==="4")

// not equal to 
console.log(8!=10)
// not equal value or not equal type
console.log(8!==16)
console.log(8!=="cars")
// graeter than
console.log(20>10)
// less than
console.log(10<20)
// greater than or equal to 
console.log(9>=5+4)
// less than or equal to 
console.log(7<=7)
// tarnary operator
let age = 20;
let message = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
console.log(message); 
// Output: You are eligible to vote

// LOGICAL OPERATORS
const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
console.log(a1)
console.log(a2)
console.log(a3)
console.log(50>70 && 90<100)
// Examples above are for the AND operator.

const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
console.log(o1)
console.log(o2)
console.log(o3)
console.log(60>40 || 40<20)
console.log(100<300 || 50>70)
// the above examples are for the OR operator. 

const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
console.log(n1)
console.log(n2)
console.log(n3)
// the above examples are for the NOT operator.

// since we had already covered the "tyepof" operator i have not handeled it again

let e="He is a plumber"
let v="He is a driver"
console.log(e &&= v)
// same as e = e && e=v

let p="She is a girl"
let i="She is 20 years"
let n="She is a goat"
console.log(p ||= i)
// same as p = p || (p = i)

