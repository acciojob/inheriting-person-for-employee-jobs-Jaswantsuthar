function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
  };
}

function createEmployee(name, age, jobTitle) {
  const person = createPerson(name, age);
  return {
    ...person,
    jobTitle,
    jobGreet() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
  };
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
