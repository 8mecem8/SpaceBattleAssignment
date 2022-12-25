const body = document.querySelector("body")
const main = document.querySelector("main")
const fragment = document.createDocumentFragment() // create and append new elements faster with method






const infoPop = document.createElement("div");
infoPop.id = 'infoPopUp'
//infoPop.style.transform = "translateY(-100vh)"
infoPop.style.opacity = "0"
infoPop.style.display = "none"
infoPop.style.transition = "all 0.9s linear"


infoPop.innerHTML= `
    <div id='infoPopUpContainer'>
        <div id='infoPopUpMessage'>
                <p>
                    Hello Dear User/Visitor 👋<br><br><br>
                    This Html game created as a bootcamp Project, Tech Stack is Html, Css, Javascript <br><br> 
                    Game's type is mixed of turn-based & text-based with some added simple graphics & sounds & Css animations<br><br><br>
                    How to Play:<br><br>
                    Follow the Captain's log and click/press/select on Buttons/options when available/clickable/selectable<br><br><br>
                    Graphics & Sounds & other materials used in the game are not mine & found/selected randomly from search engines<br><br><br>
                    Thank you for your interest in this test project🙏<br><br>
                    Wish you happy/great day/night
                </p>
        </div>
        <div id='infoPopUpButton'>
            <button id='infoPopUpOkay'>X</button>
        </div>
    </div>
`



const infoButton = document.createElement("button");
infoButton.id = 'infoButtonFixed'



infoButton.innerHTML= `ℹ`

infoButton.addEventListener("click",()=>
{
    //infoPop.style.transform = "translateY(0px)"
    infoPop.style.display = "flex"
    setTimeout(() => {infoPop.style.opacity = "1"}, 100);
})




fragment.appendChild(infoPop)
fragment.appendChild(infoButton)
main.insertBefore(fragment,null)

document.querySelector("#infoPopUpOkay").addEventListener("click",()=>
{
    infoPop.style.opacity = "0"
    setTimeout(() => {infoPop.style.display = "none"}, 100);

})
