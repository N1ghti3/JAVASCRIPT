// 1. Exporta una función
export function Function(){
    console.log("Esta es una función exportada")
}

// 2. Exporta una constante
export const myConst = "Esta es una constante exportada"

// 3. Exporta una clase
export class MyClass{
    constructor(name,age,alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.bank = bank   
    }
}

// 4. Importa una función
import Circle2, { add } from "./28-export-modules.js"

console.log(add(8,20))

// 5. Importa una constante
import { PI } from "./28-export-modules.js"
console.log("Esta es mi constante importada: " + PI)

// 6. Importa una clase
import { Circle } from "./28-export-modules.js"
let circle = new Circle(10)
console.log(circle.radius)

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function division(a,b){
    return a /b;
}
// export default const helloWorld = "Hello World"
// export default class HelloWorldClass {
//     constructor(name,age,alias, bank){
//         this.name = name
//         this.age = age
//         this.alias = alias
//         this.bank = bank   
//     }
// }
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import defaultImport from "./28-export-modules.js"
let circle2 = new Circle2(10)
console.log(circle2.area())
// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
