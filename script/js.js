// Crea un array
const userArray = [];
for (let i = 0; i < 2; i++) {
  const value = prompt("Introduce un valor" + i);
  userArray.push(value);
}


console.log("Introduce tu nombre " + typeof userArray);
console.log("Introduce tu edad " + userArray.join(", "));
