// 1. Captura una excepción utilizando try-catch
try {
    console.log(mFirstError);
} catch (error) {
    console.log(`Primer error: ${error.message}`);
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(mySecondError);
} catch (error) {
    console.log(`Segundo error: ${error.message}`);
} finally {
    console.log("Mensaje del finally");
}

// 3. Lanza una excepción genérica
try {
    throw new Error("Excepción genérica lanzada");
} catch (error) {
    console.log(`Excepción capturada: ${error.message}`);
}

// 4. Crea una excepción personalizada
class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message);
        this.a = a;
        this.b = b;
    }
    printNumbers() {
        console.log(`${this.a} + ${this.b}`);
    }
}

function sumIntegers(a, b) {
    if (a + b === 0) {
        throw new SumZeroIntegerError("La suma de los números es igual a cero.", a, b);
    }
    return a + b;
}

try {
    console.log(sumIntegers(0, 10));
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message);
    error.printNumbers();
}

// 5. Lanza una excepción personalizada
try {
    console.log(sumIntegers(-5, 5));
} catch (error) {
    console.log("Excepción personalizada lanzada:", error.message);
    error.printNumbers();
}

// 6. Lanza varias excepciones según una lógica definida
function procesarNumero(numero) {
    if (numero < 0) {
        throw new Error("El número es negativo");
    } else if (numero === 0) {
        throw new Error("El número es igual a cero");
    } else if (numero > 100) {
        throw new Error("El número es demasiado grande");
    }
    return `Número válido: ${numero}`;
}

try {
    console.log(procesarNumero(150));
} catch (error) {
    console.log(`Error al procesar número: ${error.message}`);
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    console.log(procesarNumero(-10)); // Lanza excepción
    console.log(procesarNumero(50)); // Este no se ejecutará
} catch (error) {
    console.log(`Error capturado: ${error.message}`);
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["123", "12.34", "abc", null, undefined, "45.67"];
valores.forEach(valor => {
    try {
        const resultado = parseFloat(valor);
        if (isNaN(resultado)) throw new Error(`No se puede convertir "${valor}" a un número`);
        console.log(`Valor convertido: ${resultado}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
});

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function verificarPropiedad(obj, propiedad) {
    if (!obj.hasOwnProperty(propiedad)) {
        throw new Error(`El objeto no tiene la propiedad "${propiedad}"`);
    }
    return obj[propiedad];
}

try {
    const obj = { nombre: "Juan", edad: 25 };
    console.log(verificarPropiedad(obj, "apellido"));
} catch (error) {
    console.log(`Error: ${error.message}`);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function realizarOperacionConReintentos(operacion, maxReintentos = 10) {
    let reintentos = 0;
    while (reintentos < maxReintentos) {
        try {
            return operacion(); // Intenta ejecutar la operación
        } catch (error) {
            reintentos++;
            console.log(`Error en el intento ${reintentos}: ${error.message}`);
            if (reintentos === maxReintentos) {
                console.log("Se alcanzó el número máximo de reintentos");
                throw error; // Lanza el error después de agotar los reintentos
            }
        }
    }
}

try {
    realizarOperacionConReintentos(() => {
        if (Math.random() < 0.8) {
            throw new Error("Falló la operación");
        }
        console.log("Operación completada exitosamente");
    });
} catch (error) {
    console.log(`Operación fallida: ${error.message}`);
}
