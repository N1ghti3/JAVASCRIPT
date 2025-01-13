// Funciones

function myFunc(){
    console.log("hola, función")
}

myFunc()

// Con parametros

function myFuncParams(name){
    console.log(`hola, ${name}`)
}
myFuncParams("Nightie")

// Funciones anonimas

const myFunc2 = function (name){
    console.log(`hola, ${name}`)
}

myFunc2("Nightie Dev")

// Arrow functions

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}

myFunc3("Nightie")

// Parámetros

function sum(a,b) {
    console.group(a +b)
}
sum(5,10)
sum(5)
sum()

function defaultSum(a = 0,b = 0) {
    console.group(a +b)
}
defaultSum()


// Retorno de valores

function mult(a,b){
    return a*b
}

let result = mult(5,10)
console.log(result)

// Funciones anidadas

function extern(){
    console.log("Funcion externa")
    function intern(){
        console.log("Funcion interna")
    }
    intern()
}

extern()
// intern()

// Funciones de orden superior

function applyFunc(func,param){
func(param)
}
applyFunc(myFunc3,"Funcion de orden superior")

// forEach

myArray = [1,2,3,4]

myArray.forEach(function(value) {
    console.log(value)
});
myArray.forEach((value) => console.log(value))