// Estructura de datos (array)

// Declaración
let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array (3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Night", "Dev", "NightieDev", 19, true ]
myArray2 = new Array("Night", "Dev", "NightieDev", 19, true )

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Nightie"
myArray2[1] = "Dev"
myArray2[4] = "NightieDev"

console.log(myArray2)

myArray[0] = "Nightie"
myArray[1] = "Dev"
myArray[2] = "NightieDev"
console.log(myArray)

// Metodos comunes

MyArray = []

// Push y pop
console.log(myArray)
myArray.push("Nightie")
myArray.push("Dev")
myArray.push("NIghtieDev")
myArray.push("19")

console.log(myArray)

console.log(myArray.pop())   //*Elimina el ultimo elemento y lo devuelve
console.log(myArray.pop())
console.log(myArray.pop())
console.log(myArray.pop())
console.log(myArray.pop())
console.log(myArray.pop())
myArray.pop()

console.log(myArray)

// Shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Night", "Nightiedev")
console.log(myArray)

// length
console.log(myArray.length)

// clear
myArray = []
myArray.length = 0 //alternativa
console.log(myArray)

// slice
myArray = ["Night", "Dev", "NightieDev", 19, true]

let myNewArray = myArray.slice(1,3)
console.log(myArray)
console.log(myNewArray)

// splice
myArray.splice(1,3)
console.log(myArray)

myArray = ["Night", "Dev", "NightieDev", 19, true]

myArray.splice(1,2,"Nueva entrada")
console.log(myArray)