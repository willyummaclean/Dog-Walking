import { getPets, getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener(
    "click",
    (click) => {
        const clickSite = click.target
        let walkerID = clickSite.dataset.walkerforeignid
        const allWalkers = getWalkers()
        //debugger
        for (let walker of allWalkers) {
            if (walker.id === parseInt(walkerID)) {
                window.alert(`This doggo gets their walkos from ${walker.name}`)
            }
        }
      } 
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-walkerforeignid="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

