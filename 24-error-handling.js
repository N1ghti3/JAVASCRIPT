// Excepeción

//! Produce una expeción
//  let myObject
//  console.log(myObject.email)


// Captura  de errores
let myObject
// try-catch

try {
    // Código que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch {
    // Bloque de error
    console.log("Se ha producido un error")
}

// Captura de error

try {
    // Código que intenta ejecutar
    console.log(myObject.email)
 
} catch (error) {
    // Bloque de error
    console.log("Se ha producido un error", error.message)
}

// finally

try {
    // Código que intenta ejecutar
    console.log(myObject)
    console.log("Finaliza la ejecución sin errores")
} catch {
    // Bloque de error
    console.log("Se ha producido un error")
}   finally{
    console.log(" Este codigo se ejecuta siempre")
}
// No está soportado
// try {
//     
//     console.log(myObject)
//     console.log("Finaliza la ejecución sin errores")
// }finally{
//     console.log(" Este codigo se ejecuta siempre")
// }

// Lanzamiento de errores

// throw
function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}
try {
    console.log(sumIntegers(5, 10))
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// Capturar varios tipos de errores
try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// Crear excepciones personalizadas
class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}
try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}