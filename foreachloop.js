// for each loop
let numb = [20, 10, 30, 50]
let h = [];
numb.forEach(daniel);
function daniel(value){
    h.push(value + 2)
}
console.log(h)

// Example 2 
let scores = [100, 99, 98, 77]
let newScore = [];
scores.forEach(newMark);
function newMark(value2){
    newScore.push(value2 - 10)
}
console.log(newScore)

// Example 3 
let distance = [70, 120, 300, 200]
let roundTrip = [];
distance.forEach(roundT)
function roundT(miles){
    roundTrip.push(miles * 2)
}
console.log(roundTrip)

// An array of strings 
let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Cyan']
let colors2 = [];
colors.forEach(filtered)
function filtered(newArr){
if (newArr.length < 5){
    colors2.push(newArr)
}
}
console.log(colors2)
