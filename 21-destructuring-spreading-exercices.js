// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray =[ 1,2,3,4]
let myArray2 =[ 5,6,7,8]
let[myValue0, myValue1] = myArray
console.log(myValue0)
console.log(myValue1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [myValue2,,myValue3,,myValue4 = 5] = myArray
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let object0 = 
{
    name: "Night",
    age: 19,
    alias: "NightieDev",
    job:
    {
        name:"Soporte TI",
        exp: 4,
        work: function ()
        {
            console.log(`la persona de ${this.age} años de experiencia trabaja.`)
        }
    }

}
let {name,age} = object0
console.log(name)
console.log(age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name: name2,age : age2} = object0
console.log(name2)
console.log(age2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {job : {name : jobname, exp : experience,work}} = object0
console.log(jobname)
console.log(experience)
console.log(work)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray3 =[...myArray,...myArray2]
console.log(myArray3)

// 7. Usa propagación para crear una copia de un array
let myArray1= [...myArray]
console.log(myArray1)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let object1 = 
{
    name2: "Night",
    age2: 19,
    alias2: "NightieDev",
}
let object2 = {...object0, ...object1}
console.log(object2)

// 9. Usa propagación para crear una copia de un objeto
let object3 ={...object0}
console.log(object3)

// 10. Combina desestructuración y propagación
let [myValor0, myValor1]= myArray1
let {job : {name : jobname2, exp : experience2}} = object0

let myNewArray = [myValor0, myValor1]
console.log(myNewArray)
myNewArray.push(jobname2)
myNewArray.push(experience2)
console.log(myNewArray)