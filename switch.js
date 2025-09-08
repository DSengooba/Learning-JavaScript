// SWITCH
// My example is with car types 
let carType = "SUV";

switch (carType) {
  case "Sedan":
    console.log("A sedan is a four-door car type with a traditional trunk.");
    console.log("Examples: Toyota Corolla, Honda Civic, Nissan Altima");
    break;
  case "SUV":
    console.log("A Sport Utility Vehicle is a large car that can often carry five to seven passengers with three rows of seats.");
    console.log("Examples: Range Rover, Jeep Cherokee, Suzuki Vitara");
    break;
  case "Crossover":
    console.log("A crossover is a mix of an SUV and a hatchback, built more for city traffic.");
    console.log("Examples: Honda Odyssey, Chrysler Pacifica");
    break;
  case "Hatchback":
    console.log("A hatchback is a mix of a sedan and a station wagon, with a hatch that opens upwards.");
    console.log("Examples: Volkswagen Golf, Kia Rio");
    break;
  case "Coupe":
    console.log("A coupe is a two-door car, often with a sporty look.");
    console.log("Examples: Ford Mustang, Audi A5, Chevrolet Corvette");
    break;
  default:
    console.log("Invalid car type");
}

// Meals a day example 
let meal = 44;

switch (meal) {
  case "Breakfast":
    console.log("Breakfast");
    break;
  case "Lunch":
    console.log("Lunch");
    break;
  case "Dinner":
    console.log("Dinner");
    break;
  default:
    console.log("Invalid meal");
}



