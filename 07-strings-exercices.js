// 1. Concatena dos cadenas de texto
let string1, string2,stringJunto, myName
myName = "Ale"
string1 = 'Hoy es'
string2 = ' un gran día'
stringJunto = string1 + string2
console.log(stringJunto)

// 2. Muestra la longitud de una cadena de texto
console.log(stringJunto.length)

// 3. Muestra el primer y último carácter de un string
console.log(stringJunto[0])
console.log(stringJunto[17])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(stringJunto.toUpperCase())

// 5. Crea una cadena de texto en varias líneas
console.log(stringJunto.toLowerCase())

// 6. Interpola el valor de una variable en un string
console.log(`¡${myName}!, recuerda que: ¡${stringJunto}!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(stringJunto.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(stringJunto.includes("Hoy"))
// 9. Comprueba si dos strings son iguales

console.log(string1 == string2)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(string1.length == string2.length)