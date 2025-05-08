// In JavaScript, an object is a data type that stores collections of key-value pairs. 
// These pairs, known as properties, allow you to associate a value with a specific key, which is typically a string.

// Creating Objects

const house = { nam: "Kichen", type: "full unit", model: "island" }
console.log(house.nam)
console.log(house.type)
console.log(house.model)

// Create another object
const plant = {nam1:"tree", type:"deseediuos", season:"bianual" }
console.log(plant["nam1"])
console.log(plant["type"])
console.log(plant["season"])

// an object when one of the attributes is a function 
const chair = {type: "rocker", color: "oak", canrock: function () {return "this chair can rock"} }
console.log(chair.type)
console.log(chair["color"])
console.log(chair.canrock())
const flask = {}
flask.capacity= "one litre"
flask.color= "Silver"
flask.make= "Thermos"
flask.use= "Food Flask"
flask.IsFlaskSafe= function (){
    return "yes"
}
console.log(flask)
console.log(flask.IsFlaskSafe())