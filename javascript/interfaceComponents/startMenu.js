const body = document.querySelector("body")
const main = document.querySelector("main")
const fragment = document.createDocumentFragment() // create and append new elements faster with method


const sMenu = document.createElement("div");
sMenu.className = 'mainMenu'



sMenu.innerHTML= `
    <div class='mainMenuContainer'>
        <div class='mMessage'>
                <p>
                Hi Captain π<br><br>
                π¨!π!π¨!π π Earth has been attacked by a horde of π½ aliens π₯!π₯!π₯!π!<br><br> 
                As π captain of the USS HelloWorld π, 
                Your mission to destroy π₯π€ alien shipsπΈπΈπΈ<br><br>
                Good Luck Captain βοΈπ
                </p>
        </div>
        <div class='mMButtonCon'>
            <button class='mMStartB'>START GAME</button>
        </div>
    </div>
`



fragment.appendChild(sMenu)
main.insertBefore(fragment,null)

