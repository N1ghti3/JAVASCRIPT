// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for(let i = 1; i <=20; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sum = 0
for(let i = 0; i <= 100; i ++){
    sum = sum + i
    console.log(sum)
}
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(let i = 1; i <= 50; i++) {
    sum = i % 2
    
    if (sum == 1)
    {
        continue
    }   else  
        {
            
        }
    console.log(`Hola For: ${i}`)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
myArray = ["Night", "Dev", "NightieDev", 19, true, "nightie.dev@gmail.com"]
for(let valor of myArray)
    {
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let myString = "Hola, Nightie"
console.log(`¿Cuantas vocales tiene "${myString}"?`)
let i =0
for (let valor of myString){
    if (valor == "a" || valor == "e" || valor == "i" || valor == "o" || valor == "u"){
    sum =  i ++
        console.log(`"${myString}" tiene ${i} vocales`)
    }
    
}

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
myArray = [1, 2, 3, 4]
sum = 1
for(let valor of myArray){
    
    sum = sum * valor
    console.log(sum)
}

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
i = 0
while(i <= 10){
    sum = 5 * i
    console.log(`5 * ${i} = ${sum}`)
    i++
}
// 8. Usa un bucle para invertir una cadena de texto
let myNewString = "la-sopa-de-mamá"
for (let valor of myNewString){
    myArray.unshift(valor)
    console.log(myArray) 
}
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let F1 =0, F2 = 1
let Fibonacci
i = 0
while ( i <=10){
    if( i <=1){
        Fibonacci = i
        console.log(`secuencia de fibonacci: ${Fibonacci}`)
    } 
    else{
        Fibonacci = F1 + F2
        F1 = F2
        F2 = Fibonacci
        console.log(`secuencia de fibonacci: ${Fibonacci}`)
    }
    i++
    
}
// for(let i = 0 ; i<= 10; i++){
//     if( i <= 1){
//         Fibonacci= i
//     }
//     else
//     {
//         Fibonacci = F1 + F2
//         F1 = F2
//         F2 = Fibonacci
//     }
//     console.log(`secuencia de fibonacci: ${Fibonacci}`)
// }

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numberArray1 = [1, 2, 10, 15, 25 , 8, 40, 0.5]
let numberArray2 = []
for(let valor of numberArray1){
    if (valor > 10){
        console.log(`Numero guardado: ${valor}`)
        numberArray2.unshift(valor)
        
    }
    
}
console.log(`Numeros guardados:
    ${numberArray2}`)