// Clases es un objeto complejo a manera de plantilla
class Person{
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis
let person = new Person("Nightie", 19,"NightieDev")
let person2 = new Person("Nightie", 19,"NightieDev")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto
class DefaultPerson{
    constructor(name = "Sin nombre",age = 0,alias="Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}
let person3 =new DefaultPerson("Night",19)
console.log(person3)

// Acceso a propiedades
console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "NightieDev"
console.log(person3.alias)

//Funciones en clases
class PersonWithMethod{
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk() {
        console.log("la persona camina")
    }
}
let person4 =new PersonWithMethod("Night",19,"NightieDev")
person4.walk()


// Propiedades privadas
class PrivatePerson{
    #bank
    constructor(name,age,alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay(){
        this.#bank
    }
}
let person5 =new PersonWithMethod("Night",19,"NightieDev", "NIGHT123456789")

// No podemos acceder
//console.log(person4.bank)  
//person5.bank = "adawdasdwa"       //bank no es #bank

console.log(person5)

// Getters y Setters
class GetPerson{
#name
#age
#alias
    constructor(name,age,alias){
        this.#name = name
        this.#age = age
        this.#alias = alias
    }
    get name(){
        return this.#name
    }
}

let person6 = new GetPerson("Night",19,"NightieDev")
console.log(person6)

class GetSetPerson{
    #name
    #age
    #alias
    #bank
        constructor(name,age,alias, bank){
            this.#name = name
            this.#age = age
            this.#alias = alias
            this.#bank = bank
        }
        get name(){
            return this.#name
        }
        set bank(bank){
            this.#bank = bank
        }
    }
    person6.bank = "new Night123456789"
console.log(person6)


// Herencia
class Animal {

    constructor(name){
        this.name = name
    }

    sound(){
        console.log("emite un sonido generico")
    }
}

class Dog extends Animal{
    
    run(){
        console.log("El perro corre")
    }

}
class Fish extends Animal{
    constructor(name, size){
        super(name)
        this.size = size
    }
    swim(){
        console.log("El pez nada")
    }

}

let myDog = new Dog("NightieDog")
myDog.run()
myDog.sound()

let myFish = new Fish("NightieFish", 4)
myFish.swim()
myFish.sound()

// Metodos estaticos
class MathOperations {
    static sum(a,b){
        return a+b
    }
}

console.log(MathOperations.sum(5,15))