let furniture=['chairs', 'tables', 'centerTable', 'kitchen cabins', 'sofa set' ]
console.log(furniture)

// Accessing arrays
// using indexing
let furniture1=['chairs', 'tables', 'centerTable', 'kitchencabins', 'sofaset' ]
let myFurniture = furniture1[4]
console.log(myFurniture)
// Change 3rd item to Rose 
let furniture2=['chairs', 'tables', 'centerTable', 'kitchencabins', 'sofaset' ]
furniture2[3] = 'Rose'
console.log(furniture2)

// converting an array to a string
// we use .toString()
let furniture3=['chairs', 'tables', 'centerTable', 'kitchencabins', 'sofaset' ]
let result= furniture3.toString()
console.log(typeof result)
let length = furniture3.length
console.log(length)

// a simple for loop that prints my name 4 times 
let myName=['Daniel']
for (let i = 0; i < 4; i++) {
  console.log("Daniel");
}


for (let y = 4; y <= 9; y++) {
  console.log(y);
}

