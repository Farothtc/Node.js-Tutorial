// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const john = "john";
const peter = "peter";
const secret = "SUPER SECRET";

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi("Susan");
sayHi(john);
sayHi(peter);
