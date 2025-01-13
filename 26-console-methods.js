//  Console

//log

console.log("Hola, JavaScript!")

// error
console.error("Este es un mensaje de error")
console.error("Error al conectarse a la base de datos", new Error("Conexión fallida"))


// warn
console.warn("Este es un mensaje de advertencia.")

// info
console.info("Este es un mensaje de información adicional")

// table

let data = [
    ["Night", 19],
    ["Night", 19]
]
console.table(data)

data = [
    {name : "Night", age : 19},
    {name : "Night", age : 19}
]
console.table(data)

// group

console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 19")
console.log("ADAWDasdw")
console.groupEnd()

// time
console.time("Tiempo de ejecución1")
for(let i =0; i<1000; i++){

}
console.timeEnd("Tiempo de ejecución1")

console.time("Tiempo de ejecución2")

for(let i =0; i<1000; i++){

}
console.timeEnd("Tiempo de ejecución2")


// assert

let age = 17

console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count

console.count("Click")
console.count("Click")