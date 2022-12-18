const body = document.querySelector("body")
const main = document.querySelector("main")
const fragment = document.createDocumentFragment() // create and append new elements faster with method


const sMenu = document.createElement("div");
sMenu.className = 'mainMenu'



sMenu.innerHTML= `
    <div class='mainMenuContainer'>
        <div class='mMessage'>
                <p>
                Hi Captain 👋<br><br>
                🚨!🆘!🚨!🆘 🌍 Earth has been attacked by a horde of 👽 aliens 💥!💥!💥!🆘!<br><br> 
                As 👑 captain of the USS HelloWorld 🚀, 
                Your mission to destroy 💥🤜 alien ships🛸🛸🛸<br><br>
                Good Luck Captain ☘️🙏
                </p>
        </div>
        <div class='mMButtonCon'>
            <button class='mMStartB'>START GAME</button>
        </div>
    </div>
`



fragment.appendChild(sMenu)
main.insertBefore(fragment,null)

