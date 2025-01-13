// Loops o bucles

// for

for(let i = 0; i < 5; i++) {
    console.log(`Hola For: ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemnto: ${numbers[i]}`)
}

// While

let i =0
while (i < 5) {
    console.log(`Hola While: ${i}`)
    i++
}

// do while

i =6
do{
    console.log(`Hola do: ${i}`)
    i++
}
while(i < 5)


// for of

myString = "Hola JavaScript"

myArray = [1, 2, 3, 4]

mySet = new Set(["Night", "Dev", "NightieDev", 19, true, "nightie.dev@gmail.com"])

myMap = new Map([
    ["name", "Night"],
    ["email", "night.dev@gmail.com"],
    ["age", 19],
])

for(let valor of myArray)
    {
    console.log(valor)
}

for(let valor of mySet)
    {
    console.log(valor)
}

for(let valor of myMap)
    {
    console.log(valor)
}


for(let valor of myString)
    {
    console.log(valor)
}

// Buenas Practicas

// break y continue
for(let i = 0; i < 10; i++) {
    if (i == 5)
    {
        continue
    }   else if ( i==7)
        {
            break
        }
    console.log(`Hola For: ${i}`)
}
