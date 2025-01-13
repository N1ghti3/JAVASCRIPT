// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function mySum(a = 0,b = 0){
    console.log(a + b)
}
mySum(5 + 15)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function obtenerMayorNumero(numeros){
    if(numeros.length ===0){
        throw new Error("El array no puede estar vacio")
    }
    return Math.max(...numeros);
}
const numeros = [4,8,20,19,45]
const mayor = obtenerMayorNumero(numeros);
console.log("El numero mayor es:", mayor)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let sum = 0
let i =0
function cantidadVocales(vocales){
    for(let valor of vocales ){
    if (valor == "a" || valor == "e" || valor == "i" || valor == "o" || valor == "u"){
        sum =  i ++
            
        }
        console.log(`"${vocales}" tiene ${i} vocales`)
    }
}
vocales = "Hola"
const vocalesString = cantidadVocales(vocales)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const strings = ["hola", "mundo", "javascript"];
console.log(strings)
function convertirAMayusculas(arrayStrings) {
    return arrayStrings.map(function(string) {
        return string.toUpperCase();
    });
}


const resultado = convertirAMayusculas(strings);

console.log(resultado); 

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }

    // Verificamos si el número tiene divisores desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {

        if (numero % i === 0) {
            return false; 
        }
    }

    return true;
}

console.log(`El numero ${13} es primo?
${esPrimo(13)}`);  // true

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(array1, array2) {
    // Usamos el método filter para buscar elementos que estén en ambos arrays
    return array1.filter(elemento => array2.includes(elemento));
}

// Ejemplo de uso
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const comunes = elementosComunes(array1, array2);

console.log(comunes); // Salida: [3, 4, 5]

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaNumerosPares(array) {
    
    return array
        .filter(numero => numero % 2 === 0) // Filtra los números pares
        .reduce((acumulador, numero) => acumulador + numero, 0); // Suma los números pares
}

// Ejemplo de uso
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8];
const sumaPares = sumaNumerosPares(numeros2);

console.log(sumaPares); // Salida: 20 

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarAlCuadrado(array) {
    // Usamos el método map para elevar cada número al cuadrado
    return array.map(numero => numero ** 2);
}

// Ejemplo de uso

const cuadrados = elevarAlCuadrado(numeros2);

console.log(cuadrados); // Salida: [1, 4, 9, 16, 25]

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(cadena) {
    // Dividimos la cadena en un array de palabras, invertimos el array y lo unimos de nuevo
    return cadena.split(" ").reverse().join(" ");
}

const texto = "Hola mundo desde JavaScript";
const textoInvertido = invertirPalabras(texto);

console.log(textoInvertido); // Salida: "JavaScript desde mundo Hola"

// 10. Crea una función que calcule el factorial de un número dado
function calcularFactorial(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    return factorial;
}

// Ejemplo de uso
console.log(calcularFactorial(5)); // Salida: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(calcularFactorial(0)); // Salida: 1 (0! = 1)
