
export class Ship
{
    constructor(hull = 20,firepower = 5,accuracy = .7,id = "HERO")//preassigned arguments for hero ship
    {
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
        this.id = id
    }

    attack(enemyShip)
    {
        enemyShip.hull -= this.firepower
    }

    repair()
    {
        this.hull = hull
    }

    drawHtml(i)
    {
        const section3FieldEnemy = document.querySelector("#mGS-section3-field-enemy")
        const fragment = document.createDocumentFragment() // create and append new elements faster with method

        const enemyDiv = document.createElement("div");
        enemyDiv.className = 'enemy'
        enemyDiv.id = `enemy${i}`

        enemyDiv.innerHTML= `
            
        `

        fragment.appendChild(enemyDiv)
        section3FieldEnemy.appendChild(fragment)
    }
    deleteHtml(id)
    {   
        if(document.querySelector(`#enemy${id}`))
        {
         document.querySelector(`#enemy${id}`).style.filter= 'invert()';
         setTimeout(() => {document.querySelector(`#enemy${id}`).remove()}, 2000);
        }
    }

}