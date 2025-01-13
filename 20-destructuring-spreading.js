// Desestructuración
// Sintaxis que permite extraer valores dwe un arrays y objetos y asignarlos a variables
let myArray = [1,2,3,4]

let person = {
    name: "Night",
    age: 19,
    alias: "NightieDev"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración
// Sintáxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray

console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray

console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elemtos array

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)


// Sintaxis objects
let {name,age,alias} = person

console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objects con valores predeterminados
let {name2,age2,alias2, email = "nightiedev@dev.vom"} = person

console.log(name2) // No existe
console.log(age2)// No existe
console.log(alias2)// No existe
console.log(email)

// Sintaxis objects con nuevos nombres
let {name : name3,age : age3,alias: alias3} = person

console.log(name3)
console.log(age3)
console.log(alias3)

// Objects anidados
let person3 ={
    name : "Night",
    age : 19,
    alias : "NightieDev",
    walk : function() {
        console.log("La persona camina")
    },
    job: {
        name : "programador",
        exp : 4,
        work: function (){
            console.log(`la persona de ${thisn.age} años de experiencia trabaja.`)
        }
    }
}
let{name :name4, job : {name : jobname}} = person3

console.log(name4)
console.log(jobname)

// Propagación

let myArray2 = [...myArray,5,6]

console.log(myArray2)
// Copia de Arrays
let myArray3 = [...myArray] // Copia
console.log(myArray3)

// Combinación de arrays
let myArray4 = [...myArray,...myArray2,...myArray3]
console.log(myArray4)

// Sintaxis objects

let person4 = {...person, email: "Nightedev@dev.com"}
console.log(person4)

//Copia de objects
let person5 = {...person}
console.log(person5)
