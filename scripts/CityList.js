import { getWalkers } from "./database.js"

const walkers = getWalkers()


document.addEventListener(
    "click",
    (click) => {
        const clickSite = click.target
        const walkerName = clickSite.dataset.walkername
        if (clickSite.dataset.type === "city")
        window.alert(`This city is serviced by ${walkerName}`)
        
        

     }
        
)


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li data-type="city" data-walkername="${walker.name}" >${walker.city}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

