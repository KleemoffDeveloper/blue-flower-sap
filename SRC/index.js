console.log("Hello World!");

let subpages = {}
let buttons = {}

window.onload = () => {
    subpages.about = document.getElementById("about-page")
    subpages.contact = document.getElementById("contact-page")
    subpages.adopt = document.getElementById("adopt-page")
    subpages.main = document.getElementById("main-page")


    buttons.about = document.getElementById("about-button")
    buttons.contact = document.getElementById("contact-button")
    buttons.adopt = document.getElementById("adopt-button")
    buttons.main = document.getElementById("main-button")

    buttons.about.onclick = viewAbout
    buttons.contact.onclick = viewContact
    buttons.adopt.onclick = viewAdopt
    // buttons.main.onclick = viewMain
}

let viewAbout = () => {
    subpages.contact.classList.add("invisible")
    subpages.adopt.classList.add("invisible")
    subpages.main.classList.add("invisible")
    subpages.about.classList.remove("invisible")
  
}

let viewContact = () => {
    subpages.about.classList.add("invisible")
    subpages.contact.classList.remove("invisible")
    subpages.adopt.classList.add("invisible")
    subpages.main.classList.add("invisible")

}

let viewAdopt = () => {
    subpages.about.classList.add("invisible")
    subpages.contact.classList.add("invisible")
    subpages.adopt.classList.remove("invisible")
    subpages.main.classList.add("invisible")
}

// let viewMain = () => {
//     subpages.main.classList.remove('invisible')
//     subpages.about.classList.add('invisible')
//     subpages.adopt.classList.add('invisible')
//     subpages.contact.classList.add('invisible')
// }





