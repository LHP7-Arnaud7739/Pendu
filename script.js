const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const myKeyboard = document.getElementById("myKeyboard")
const petList = ["panda", "lion", "tigre", "ecureuil", "elephant", "cheval", "leopard"]

let pet = petList[aleaNb(0, petList.length)]
console.log(pet)
// CREATION DU CODE POUR CREER UNE BOUCLE A INCLURE DANS LA BOUCLE LIGNE 15 A 20

// let myLetter = "z";
// myLetter = myLetter.toUpperCase();
// let myKey = `<button id="myKey${myLetter}">${myLetter}</button>`;
// myKeyboard.innerHTML += (myKey);


alphabet.forEach(element => {
    let myLetter = element
    myLetter = myLetter.toUpperCase()
    let myKey = `<button class="m-2 col-2 btn btn-outline-dark id="myKey${myLetter}">${myLetter}</button>`
    myKeyboard.innerHTML += (myKey)
})



function aleaNb(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}