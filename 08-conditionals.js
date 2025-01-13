// if, else if, else


//if (si)

let age = 20

if (age == 20)
    {
        console.log("La edad es 20")


    }

// else (si no) 
if (age == 20) 
    {
        console.log("La edad es 20")
    }
    else 
    {
        console.log(" La edad es no es 20")
    }

// else if (si no, si)
if (age == 20) 
    {
        console.log("La edad es 20")
    }
    else if (age < 18)
    {
        console.log("Es menor de edad")
    }
    else 
    {
        console.log(" La edad es no es 20 ni es menor de edad")
    }
    

// Operador ternario
const message = age == 20 ? "La edad es 20" : "La edad no es 20"
console.log(message)


// Switch
let day = 3
let dayName

switch (day){
    case 0:
        dayName = "Lunes"
    break
    
    case 1:
        dayName = "Martes"
    break
    
    case 2:
        dayName = "Miercoles"
    break
    
    case 3:
        dayName = "Jueves"
    break
    
    case 4:
        dayName = "Viernes"
    break
    
    case 5:
        dayName = "Sabado"
    break
    
    case 6:
        dayName = "Domingo"
    break

    default:
        dayName = "Número de día incorrecto"
}
console.log(dayName)