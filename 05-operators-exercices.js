// 1. Crea una variable para cada operación aritmética
let num1 = 2
let num2 = 4
let mySum = num1 + num2
let myRest = num1 - num2
let myMult = num1 * num2
let myDiv = num1 / num2
let myMod = num1 % num2
let myExpo = num1 ** num2
let myIncr = num2++
let myDecr = num1--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
myIncr = 1
mySum += 2 
myRest -= 2
myMult *= 2
myDiv /= 2
myMod %= 2
myExpo **= 2

console.log(myIncr) //1
console.log(mySum)  //8
console.log(myRest) //-4
console.log(myMult) //16
console.log(myDiv)  //0.25
console.log(myMod)  //0
console.log(myExpo) //256

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(num1 <= num2)
console.log(num1 == 1)
console.log(num2 >= num1)
console.log(num2 == "5")
console.log(num2 != false)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(num1 >= num2)
console.log(num1 === "0")
console.log(num2 <= num1)
console.log(num2 === "5")
console.log(num2 == false)
// 5. Utiliza el operador lógico and
console.log(num1 <= num2 && num2 == "5")
// 6. Utiliza el operador lógico or
console.log(num1 <= num2 || num2 !== "5")
// 7. Combina ambos operadores lógicos
console.log(num1 <= num2 || num2 == "5" && num2 >= num1)
// 8. Añade alguna negación
console.log(!(num1 <= num2 || num2 == "5" && num2 >= num1))
// 9. Utiliza el operador ternario
const isStudying = true

isStudying ? console.log("Está estudiando") : console.log("No está estudiando")
// 10. Combina operadores aritméticos, de comparáción y lógicas
let myOper
myOper = 5+10
console.log(myOper > num1 + num2 && myOper % num1 < num2)
console.log(!(myOper > num1 + num2 && myOper % num1 < num2))
