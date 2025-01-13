// 1. Crea un función que utilice error correctamente
function ErrorFunction(a, b){
try{
    sum = a * b - c 
}catch(error){
console.error("Este es el mensaje de error: "+ error.message)
}
}
ErrorFunction(1,3)

// 2. Crea una función que utilice warn correctamente
function WarnFunction(a,b){
    try{
        rest = a -b -c
    }catch(warn){
            console.warn( warn.message)
    }
}
WarnFunction(1,5,3)

// 3. Crea una función que utilice info correctamente
function InfoFunction(){
    console.info("No olvidar esta función")
}

// 4. Utiliza table
let datos = [
    {id: 1, name : "Night", age: 19},
    {id: 2, name : "Nighti", age: 20},
    {id: 3, name : "Nightie", age: 21}
]
console.table(datos)

// 5. Utiliza group
console.group("Usuario:")
console.log("Nombre: Nightie")
console.log("Edad: 19")
console.log("ADAWDasdw")
console.groupEnd()

// 6. Utiliza time
console.time("Tiempo de ejecución1")
for(let i =0; i<1000; i++){

}
console.timeEnd("Tiempo de ejecución1")

// 7. Valida con assert si un número es positivo
let numeroPositivo = -8
console.assert(numeroPositivo > 0, "El numero debe ser positivo")

// 8. Utiliza count
console.count("Uso")
console.count("Uso")
console.count("Uso")
// 9. Utiliza trace
function foo() {
    function bar() {
        console.trace();
        }
    bar();
    }   
    foo();

// 10. Utiliza clear
console.clear()