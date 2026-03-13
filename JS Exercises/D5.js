/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"]
for (let i = 0; i < pets.length; i++) {
  console.log("EXERCISE 1:", pets[i]) //verified
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort()
console.log("EXERCISE 2:", pets) //verified

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
for (let i = pets.length - 1; i >= 0; i--) {
  console.log("EXERCISE 3:", pets[i]) //verified
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("EXERCISE 4, Original order:", pets)

let firstPet = pets.splice(0, 1)[0]

pets.push(firstPet)

console.log("EXERCISE 4, New order:", pets) //verified

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
]

//PRIIMA PROVA:
//adds the same property to all, fast but not realistic
//for(let i=0; i<cars.length;i++){
//    cars[i].licensePlate = 'existing'
//    console.log(cars)
//}

//SECONDA PROVA:
//adds different properties for each of them. Manual and more time consuming but more realistic
cars[0].licensePlate = "AB 456 CD"
cars[1].licensePlate = "HJ-098-KL"
cars[2].licensePlate = "HH-RK 90"

console.log("EXERCISE 5:", cars) //verified

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
//PRIMA PARTE:
let newObj = {
  brand: "Tata",
  model: "Altroz",
  color: "white",
  trims: ["XE", "XM", "XZ", "XZ+"],
  licensePlate: "DL 01 AB 1234",
}

cars.push(newObj)
console.log("EXERCISE 6a:", cars) //verified

//SECONDA PARTE:
for (let i = 0; i < cars.length; i++) {
  let newArr = cars[i].trims.pop() //careful to call the propertyyyy
  console.log("EXERCISE 6b:", cars[i].trims) //verified
}

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  let toSave = cars[i].trims[0]
  justTrims.push(toSave)
}
console.log("EXERCISE 7:",justTrims) //verified

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === "b") {
    console.log("EXERCISE 8:","Fizz")
  } else {
    console.log("EXERCISE 8:","Buzz")
  }
}
// Found .charAt(0) and .startsWith() but I prefer it this way.

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i =0

while(numericArray[i] !==32 ){
    console.log("EXERCISE 9:",numericArray[i])//verified
    i++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

const alphabeticOrder = []
for(let i=0;i<charactersArray.length;i++){
switch(charactersArray[i]){
    case'g': alphabeticOrder.push(7)
    break
    case'n': alphabeticOrder.push(12)
    break
    case'u': alphabeticOrder.push(19)
    break
    case'z': alphabeticOrder.push(21)
    break
    case'd': alphabeticOrder.push(4)
    break
}

}
console.log("EXERCISE 10:",alphabeticOrder)//verified

//I used the italian alphabetic order