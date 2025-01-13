// 1. Crea una clase que reciba dos propiedades
class FirstClass {
    constructor(name, email){
        this.name = name
        this.email = email
    }
}
// 2. Añade un método a la clase que utilice las propiedades
class SecondClass {
    constructor(name, email){
        this.name = name
        this.email = email
    }
    walk() {
        console.log("la persona camina")
    }
}
// 3. Muestra los valores de las propiedades e invoca a la función
let person = new SecondClass("nightie", "nightie.dev@dev.com")
console.log(person)
console.log(person.walk())
// 4. Añade un método estático a la primera clase
class ThirdClass {

    constructor(name, email, ){
        this.name = name
        this.email = email

    }
    walk() {
        console.log("la persona camina")
    }

    static mathArithemtic(variable1,variable2){
        const sum = variable1 + variable2
        const rest = variable1 - variable2
        const divAVariable = variable1 / variable2
        const divBVariable = variable2 / variable1
        const mult= variable1 * variable2

        return sum 
    }
}
// 23-24-26-27 vacaciones hasta el 7 de enero

// 5. Haz uso del método estático
let person1 = new ThirdClass("","",1,2)
console.log(ThirdClass.mathArithemtic(1,2))
// 6. Crea una clase que haga uso de herencia
class FatherClass{

    constructor(apellido){
        this.apellido = apellido
    }
    // Caracteristicas físicas
    static altura(){
        console.log("Mide 1.80 m")
    }
    static pelo(){
        console.log("Tiene el pelo rubio")
    }
}

class SonClass extends FatherClass {
    constructor(name){
        this.name = name
    }
    pelo(){
        console.log("Tiene el pelo rubio")
    }

}
// 7. Crea una clase que haga uso de getters y setters
/*
class GetSetClass{

        constructor(name,age,alias, bank){
            this.name = name
            this.age = age
            this.alias = alias
            this.bank = bank
        }
        get name(){
            return this.name
        }
        set bank(bank){
            this.bank = bank
        }
    }
*/
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class GetSetClass{
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
// 9. Utiliza los get y set y muestra sus valores
let person2 = new GetSetClass("Night",19,"NightieDev","Night123456789")
console.log(person2)
// 10. Sobrescribe un método de una clase que utilice herencia
class Son2Class extends FatherClass {
    constructor(name){
        this.name = name
    }
    pelo(){
        console.log("Tiene el pelo oscuro")
    }

}