// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let fName = "Nightie"

if (fName === "Nightie") 
    {
    console.log(`¡Hola ${fName}!`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "NightieDev"
let password = "NightieDev123*"

if ( user === "NightieDev" && password === "NightieDev123*")
    {
        console.log(`Bienvenido ${user}`)

    }
else {
    console.log("Verifique el usurio y contraseña")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 0.1
if (number > 0 ){
    console.log("El número es positivo")
}
else if (number < 0){
        console.log("El número es negativo")
    }
else {
        console.log("El número es 0")
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16
if (age >= 18)
    {
        console.log("Eres mayor de edad, puedes votar")
    }else if (age >= 17 && age < 18) {
        age = 18 - age
        console.log(`Te falta ${age} año para poder votar`)
    }else 
    {
        age = 18 - age 
        console.log(`Eres menor de edad te faltan ${age} años para poder votar`)
    }
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const edad = age >= 18 ? "Adulto": "Menor"
console.log(edad)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 3
if (mes >= 1 && mes <= 3){
    console.log("Estamos en invierno")
}else if(mes > 3 && mes <= 6){
    console.log("Estamos en Primavera")
}else if (mes > 6 && mes <= 9)
    {
        console.log("Estamos en Verano")
    }else if (mes > 9 && mes <= 12){
        console.log("Estamos en otoño")
    }else {
        console.log("Ingrese un més valido")
    }
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == 4 || mes == 6 || mes == 9 || mes == 11)
    {
        console.log('Este mes tiene 30 días')
    }else if(mes == 1|| mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12 )
        {
            console.log("Este mes tiene 31 días")
        }else if (mes == 2){
            console.log("Este mes tiene 28 días")
        }else {
            console.log("Ingrese un més valido")
        }


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let saludo = 0
switch(saludo){
    case 0:
        console.log('Hola')
    break
    
    case 1:
        console.log('Hello')
    break
    
    case 2:
        console.log('Salut')
    break
    
    default:
        console.log('Seleccione un idioma valido')
    }
// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch(mes){
    case 1:
    case 2:
    case 3:
        console.log("Estamos en invierno")
    break
    case 4: 
    case 5:
    case 6:
        console.log("Estamos en Primavera")
    break
    case 7:
    case 8:
    case 9:
        console.log("Estamos en Verano")
    break
    case 10:
    case 11:
    case 12:
        console.log("Estamos en otoño")
    break
    default:
        console.log("ingrese un mes valido")
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Este mes tiene 31 días")
    break
    case 2:
        console.log("Este mes tiene 28 días")
    break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Este mes tiene 30 días")
    break
    default: 
    console.log("Ingrese un mes valido")
}