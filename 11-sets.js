// set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Night", "Dev", "NightieDev", 19, true, "nightie.dev@gmail.com"])

console.log(mySet)

// Metodos comunes

// add y delete

mySet.add("https://mour.dev")   // Añade al final

console.log(mySet)

mySet.delete("https://mour.dev")

console.log(mySet)

console.log(mySet.delete("Night"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Dev"))

console.log(mySet.has("Night"))

// Size
console.log(mySet.size)

// Convertir un Set a Array

let myArray = Array.from(mySet)

console.log(myArray)

// Convertir un Array a Set

mySet = new Set(myArray)

console.log(mySet)

//
mySet.add("nightie.dev@gmail.com")
mySet.add("nightie.dev@gmail.com")
mySet.add("nightie.dev@gmail.com")
console.log(mySet)