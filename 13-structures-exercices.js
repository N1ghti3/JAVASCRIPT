// 1. Crea un array que almacene cinco animales
let myArray = []
myArray = ["Gato","Perro","Alce","Tiburon","Delfin"]
// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("Oso")
myArray.push("Serpiente")
console.log(myArray)
// 3. Elimina el que se encuentra en tercera posición
console.log(`Adios:${myArray.splice(2,1)}`)
console.log(myArray)
// 4. Crea un set que almacene cinco libros
let mySet = new Set()
mySet = new Set(["Libro1","Libro2","Libro3","Libro4","libro5"])
// 5. Añade dos más. Uno de ellos repetido
console.log(mySet.add("Libro1"))
console.log(mySet.add("Libro6"))
// 6. Elimina uno concreto a tu elección
console.log(mySet.delete("libro5"))
console.log(mySet)
// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map()
myMap = new Map([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [8,"Agosto"],
    [9,"Septiembre"],
    [10,"Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"],
])
console.log(myMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(`¿Está el mes 5?
    ${myMap.has(5)}`)
console.log(`El mes 5 es: ${myMap.get(5)}`)
// 9. Añade al mapa una clave con un array que almacene los meses de verano
let myNewArray = []
console.log(myNewArray)
myNewArray.push(myMap.get(7))
myNewArray.push(myMap.get(8))
myNewArray.push(myMap.get(9))
console.log(myNewArray)
myMap.set("Verano", myNewArray)

console.log(myMap.get("Verano"))
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map  
let myArray2 = Array.from(mySet)
console.log(myArray2)
let myNewMap = new Map([myArray2.slice(0,2)])
myNewMap.set(myArray2[2],myArray2[3])
console.log(myNewMap)