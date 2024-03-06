/* ----------------------- OBJECTS -----------------------*/

//* Objects are complex data structures allowing us to stores severals values and functions together

//! Suntax:

const person = {
  firstName: "Roo", // inside an object, variable are called properties
  lastName: "Rogers",
  age: 221,
  education: ["algorithmics", "html", "git", "javascript"],
  job: {
    name: 'cyber-sorcerer',
    hours: '35',
  },
  getIdentity : function(){ // inside an object, functions are called methods
    return 'I am what you see'
  }
};

//  Accesses an object's property
console.log(person.firstName);
console.log(person.job.name);
console.log("i'm studying " + person.education[3].toUpperCase() + " right now");
console.log(person.getIdentity());
