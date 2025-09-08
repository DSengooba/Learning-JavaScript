function sleep(){
    console.log('Daniel is sleeping')
}
sleep()

function talk(){
    console.log("We learn how to talk at infancy")
}
talk()

function breed(){
    console.log("breeding chics")
}
breed()

//a function that returns 
function Adult(){
    return "I am 18"
}
let AD = Adult()
console.log(AD)

//a function with parameters
function car(make, model, year, color){
    return "my car is " + make +'and its of ' + model + 'its year of manufacture is' + year + 'and its color is' + color
}
let cz = car('Toyota','landcruizer', 2022 , 'black')
console.log(cz)

//example 2 
function tv(make, size){
    return 'My TV is ' + make + 'and its size is' + size  
}
let ds = tv("Sony", '75 inches')
console.log(ds)

//creating an object
let fridge = {Make: 'LG', Capacity: '60liters', Voltage: '240v'}
console.log(fridge)