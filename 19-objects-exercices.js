// 1. Crea un objeto con 3 propiedades
let objeto = {
    propiedad1 : "hola",
    propiedad2 : 20,
    propiedad3 : 3007980127,

}
// 2. Accede y muestra su valor
console.log(objeto)
// 3. Agrega una nueva propiedad
objeto.propiedad4 = "Mi propiedad4"
// 4. Elimina una de las 3 primeras propiedades
delete objeto.propiedad3
// 5. Agrega una función e invócala
objeto.propiedad5 = function(){
    console.log("Mi propiedad5")
}
objeto.propiedad5()
// 6. Itera las propiedades del objeto
for(let key in objeto){
    console.log(key + ":" + objeto[key])
}

// 7. Crea un objeto anidado
objeto.propiedad6 = { 
    name: "Programador",
    exp: 15,
    work: function(){
        console.log("La persona trabaja")
    }
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(objeto.propiedad6.exp)
objeto.propiedad6.work()

// 9. Comprueba si los dos objetos creados son iguales
let objeto2 = {
    propiedad1 : "hola",
    propiedad2 : 20,
    propiedad4 : "Mi propiedad4",
    propiedad5 : function(){
        console.log("Mi propiedad5")
    },
    propiedad6 : { 
        name: "Programador",
        exp: 15,
        work: function(){
            console.log("La persona trabaja")
        }

    }
}

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(objeto.propiedad1 == objeto2.propiedad1) // true