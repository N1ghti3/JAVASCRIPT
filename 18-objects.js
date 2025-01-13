// Objects
// Colección de propiedades muy parecido a un Map

// sintaxis

let person ={
    name : "Night",
    age : 19,
    alias: "NightieDev"

}

// Acceso a propiedades

// Notacion punto
console.log(person.name)
console.log(person.age)
console.log(person.alias)

// Notación de corchetes

console.log(person ["name"])

// Modificación de propiedades

person.name = "Nightie Dev"
console.log(person.name)

console.log( typeof person.age)
person.age = "28"
console.log( typeof person.age)
console.log(person.age)

// Eliminación de propiedades

delete person.age
console.log(person)

// Nueva propiedad

person.email = "nightiedev@gmai.com"
person["age"] = 19
console.log(person)


// Metodos (funciones)

let person2 ={
    name : "Night",
    age : 19,
    alias: "NightieDev",
    walk: function(){
        console.log("La persona camina")
    }

}
person2.walk()

// Anidación de objects


let person3 ={
    name : "Night",
    age : 19,
    alias: "NightieDev",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function(){
            console.log("La persona trabaja")
        }
    }

}
console.log(person3)
console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objects

let person4 ={
    name: 'Nightie Dev',
    alias: 'NightieDev',
    email: 'nightiedev@gmai.com',
    age: 19
}
console.log(person)
console.log(person4)

console.log(person == person4) // false
console.log(person === person4) // false

console.log(person.name == person4.name) // true

// Iteracion

for(let key in person4){
    console.log(key + ":" + person4[key])
}