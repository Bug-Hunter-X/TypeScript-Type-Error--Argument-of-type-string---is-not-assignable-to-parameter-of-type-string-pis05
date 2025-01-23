function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(persons: string[]) {
  return "Hello, " + persons.join(', ');
}

let user = ["Jane", "Doe"];

console.log(greeter(user[0])); //Access the first element of the array
console.log(greeterArray(user)); // Pass the array to a function that accepts an array