const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const myKeyboard = document.getElementById("myKeyboard")
const petList = ["panda", "lion", "tigre", "ecureuil", "elephant", "cheval", "leopard"]




let pet = petList[aleaNb(0, petList.length, )]
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

// AFFICHAGE DU TABLEAU PETLIST DANS LA DIV
// petList.forEach(element => {
//     let pet= arrayPet
//      pet = pet.toUpperCase()
//     let myPet= `<div id="pets${pets}">${pets}</div>`

//    petName.innerHTML = (myPet)

//  });



// RANDOM
function aleaNb(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
const arrayPet = pet.split("")

arrayPet.forEach((element, index) => {
    let myLetter = element;
    let myIndex = index;
    let myCase = `<div class="border border-dark col-lg-1 col-1 rounded  myLetter" id="indexLetter${myIndex}">☠️</div>`
    petName.innerHTML += myCase;
});
myKeyboard.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target.nodeName == "BUTTON") {
        console.log(e.target.textContent)


    }
})
let dennis = 2
document.getElementById(`indexLetter${dennis}`).innerText = "z"