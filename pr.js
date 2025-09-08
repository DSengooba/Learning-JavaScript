let numbs = [""];
let g = 0;
while (g < 10){
    console.log(g)
    g++
}

// print 6 to 10 
let numbs2 = '';
let x = 6;
while (x <= 10){
    console.log('the numbers', x);
    x++
}

//  the do while 
let k = 6;
do{
    console.log(k);
    k++;
}
while (k<=10);

// for of loop
let count = [10, 20, 30, 40, 50, 60, 70];
for (let x of count){
    if (x > 30){
        break;
    }
    else{}
    console.log('the break is', x)
}

//  continue
let score = [5,10,15,8,12,20];
for (let p of score){
    if (p < 12){
        continue;
    }
     else {
        console.log('prints', p);
     }
    
}

// creating a set
let myDan = new Set(['d','a','n','i','e','l']);
console.log(myDan);

// add items to a set
let myDan1 = new Set(['d','a','n','i','e','l']);
myDan1.add(1);
myDan1.add(2);
myDan1.add(3);
myDan1.add(4);

for (let )

