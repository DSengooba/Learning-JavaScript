// The for of loop 
let myName = ['Daniel', 'Sengooba', 'Arnold']
let name2 = '';
for (let x of myName){
    name2 += x; 
    console.log(x)
}

// Example using an object 
let person = {
    name: 'Daniel', age: 38, occupation: 'Sys Admin', tribe: 'muganda', status: 'married' 
}
for (let k in person){
console.log(k)
}

// Array with objects 
let subjects = [
    {Name: 'Daniel', SST: 60, MATH: 78, ENG: 92, SCI: 85}, 
    {Name: 'David', SST: 80, MATH: 70, ENG: 68, SCI: 75},
    {Name: 'Sharon', SST: 76, MATH: 91, ENG: 55, SCI: 55}, 
    {Name: 'Gift', SST: 87, MATH: 74, ENG: 83, SCI: 64}, 
    {Name: 'Naome', SST: 77, MATH: 90, ENG: 64, SCI: 70}]
console.log(subjects[0])
console.log(subjects[0].MATH)
console.log(subjects[3].ENG)
for (let y of subjects){
    let totalscore= y['totalscore']
    totalscore= y.SST + y.MATH + y.ENG + y.SCI
    let average = totalscore / 4;
console.log(y.Name + " "+ y.ENG + " " + " " + y.MATH + " "+ y.SCI+ " " + y.SST + ' ' + totalscore)
}

// Lets do the average 
let subjects1 = [
  { Name: 'Daniel', SST: 60, MATH: 78, ENG: 92, SCI: 85 },
  { Name: 'David', SST: 80, MATH: 70, ENG: 68, SCI: 75 },
  { Name: 'Sharon', SST: 76, MATH: 91, ENG: 55, SCI: 55 },
  { Name: 'Gift', SST: 87, MATH: 74, ENG: 83, SCI: 64 },
  { Name: 'Naome', SST: 77, MATH: 90, ENG: 64, SCI: 70 }
];

for (let p of subjects) {
  let totalScore = p.SST + p.MATH + p.ENG + p.SCI;
  let average = totalScore / 4;
  console.log(p.Name + "'s average score is: " + average);
}







