/* ----------------------- OBJECTS -----------------------*/

//* Objects are complex data structures allowing us to stores severals values and functions together

//! Suntax:

const person = {
  firstName: "Roo", // inside an object, variable are called properties themselves called keys
  lastName: "Rogers", // 
  age: 221,
  education: ["algorithmics", "html", "git", "javascript"],
  job: {
    name: "cyber-sorcerer",
    hours: "35",
  },
  getIdentity: function () {
    // inside an object, functions are called methods
    return "I am what you see";
  },
};

//  Accesses an object's property
console.log(person.firstName);
console.log(person.job.name);
console.log("i'm studying " + person.education[3].toUpperCase() + " right now");
console.log(person.getIdentity());

//todo Creates an object named "car" with these properties:
//todo model : audi
//todo year : 2020
//todo color: red
//todo options : array with heated seat, electrical windows
//todo engine : object with cylinder, horse power
//todo description : method that returns "I am an audio launched in 2020"

const car = {
  model: "audi",
  year: 2020,
  color: "red",
  options: ["heated seats", "electical windows"],
  engine: {
    cylinder: "303",
    horsePower: 300,
  },
  description: function () {
    return `I am an ${this.model} launched in ${this.year} with ${this.options[0]} and i've got ${this.engine.horsePower} horses of power.`;
  },
};


//todo displays model
console.log(car.model);

//todo displays first option
console.log(car.options[0]);

//todo displays description
// console.log(car.description());

const carMessage = car.description()
console.log(carMessage);



