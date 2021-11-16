const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const myKeyboard = document.getElementById("myKeyboard")
const petList = ["panda", "lion", "tigre", "ecureuil", "elephant", "cheval", "leopard", "chien", "chat", "kangourou", "loup", "pingouin", "koala", "manchot", "hippotame", "guepard", "zebre", "griffon", "linx"]
let play = true



let pet = petList[aleaNb(0, petList.length, )]

// console.LOG POUR TRICHER
 console.log(pet)


// CREATION DU CODE POUR CREER UNE BOUCLE A INCLURE DANS LA BOUCLE LIGNE 15 A 20

// let myLetter = "z";
// myLetter = myLetter.toUpperCase();
// let myKey = `<button id="myKey${myLetter}">${myLetter}</button>`;
// myKeyboard.innerHTML += (myKey);


alphabet.forEach(element => {
    let myLetter = element
    myLetter = myLetter.toUpperCase()
    let myKey = `<button class="myKey m-2 col-2 btn btn-outline-dark id="myKey${myLetter}">${myLetter}</button>`
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
    let myCase = `<div class="border border-dark col-lg-1 col-1 rounded  myLetter" id="indexLetter${myIndex}">_</div>`
    petName.innerHTML += myCase
})

let nbLetter = 0
let life = 8





myKeyboard.addEventListener("click", (e) => {
    // console.log(e.target)
    if (e.target.nodeName == "BUTTON" && play === true) {
        let myScore = nbLetter
        console.log(e.target.innerText)
        e.target.className = "m-2 col-2 btn btn-danger"
        e.target.disabled = true
        arrayPet.forEach((element, index) => {
            if (e.target.innerText.toLowerCase() == element) {
                document.getElementById(`indexLetter${index}`)
                    .innerText = element
                nbLetter++

            } 
        })
        if (nbLetter == arrayPet.length) {
            if (confirm("Gagner! Voulez-vous rejouer ?")) {
                location.reload()
            }
            play = false
        }

        if (myScore == nbLetter) {
            life--
            

        }
        console.log(life)
        switch (life) {


            case 0:
                
                document.getElementById("myLife").innerHTML = ""
                if (confirm("perdu, voulez-vous rejouer ?")) {
                    location.reload();
                };
                play = false;
                break;


            case 7:
                document.getElementById("myLife").innerHTML = "❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️🤍"
                break

            case 6:
                document.getElementById("myLife").innerHTML = "❤️ ❤️ ❤️ ❤️ ❤️ ❤️ 🤍 🤍"
                break

            case 5:
                document.getElementById("myLife").innerHTML = "❤️ ❤️ ❤️ ❤️ ❤️ 🤍 🤍 🤍"
                break

            case 4:
                document.getElementById("myLife").innerHTML = "❤️ ❤️ ❤️ ❤️ 🤍 🤍 🤍 🤍"
                break
            case 3:
                document.getElementById("myLife").innerHTML = "❤️ ❤️ ❤️ 🤍 🤍 🤍 🤍 🤍"
                break

            case 2:
                document.getElementById("myLife").innerHTML = "❤️ ❤️ 🤍 🤍 🤍 🤍 🤍 🤍"
                break

            case 1:
                document.getElementById("myLife").innerHTML = "❤️ 🤍 🤍 🤍 🤍 🤍 🤍 🤍"
                break
            default:
                break;
        }



    }
})