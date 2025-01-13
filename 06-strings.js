// Strings

// Concatenación
let myName = "Ale"
let greeting = "Hola, " + myName + "!"
console.log(greeting)


// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[9])


// Metodos comunes
console.log(greeting.toUpperCase()) //Mayusculas
console.log(greeting.toLowerCase()) //Minusculas

console.log(greeting.indexOf("Hola")) // Indice en el que se encuentra
console.log(greeting.indexOf("Ale"))
console.log(greeting.indexOf("NightieDev"))

console.log(greeting.includes("Hola")) // Si tiene el valor
console.log(greeting.includes("Ale"))
console.log(greeting.includes("NightieDev"))

console.log(greeting.slice(0,8)) //Toma los elementos en el rango

console.log(greeting.replace("Ale", "NightieDev")) // Reemplaza


//template literals (plantillas literales)

let message = `Hola, 
este es 
mi curso de 
JavaScript`

console.log(message)

let email = "nightiedev@gmail.com"
console.log(`Hola, ${myName}! 
Tu email es ${email}`)