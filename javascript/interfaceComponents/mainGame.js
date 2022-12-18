



export const drawMainGameScreen = async()=>
{

const main = document.querySelector("main")
const fragment = document.createDocumentFragment() // create and append new elements faster with method



const mGScreen = document.createElement("div");
mGScreen.id = 'mainGameScreen'



mGScreen.innerHTML= `
    <div id="mGS-main-wrapper">
        <div id="mGS-section1">
            <div id="mGS-section1-log">
                <div id="mGS-section1-log-wrapper">
                <h3>-Captain's Log-</h3>
                <div id="mGS-section1-log-table"></div>

                </div>
            </div>
        </div>

        <div id="mGS-section2">
            
            <div id="mGS-section2-hero-ship">
                <p id="mGS-section2-info">Hull Health: <span>20</span></p>
                <div id="mGS-section2-buttons">
                    <button id="mGS-section2-button1" type="button">Attack</button>

                    <button id="mGS-section2-button2" type="button">Retreat</button>
                </div>
            </div>

        </div>

        <div id="mGS-section3">
            <div id="mGS-section3-wave">Alien Wave:<span>1</span></div>

            <div id="mGS-section3-field-enemy">
                
            </div>
        </div>
    </div>
`



fragment.appendChild(mGScreen)
main.insertBefore(fragment,null)






/*---------------- Element slide animation ----------------*/
mGScreen.style.transform = "translateX(3688px)"
mGScreen.style.transition= "all 1.5s ease-out"
setTimeout(() => {mGScreen.style.transform = "translateX(0px)"}, 50)
/*---------------- Element slide animation ----------------*/


/*---------------- Ship position animation ----------------*/
document.querySelector("#mGS-section2-hero-ship").style.transition= "all 4s"
setTimeout(() => {document.querySelector("#mGS-section2-hero-ship").style.backgroundPosition = "right"}, 2000)
/*---------------- Ship position animation ----------------*/


/*---------------- Log screen animation ----------------*/
document.querySelector("#mGS-section1-log").style.transition= "all 2s"
setTimeout(() => 
{
    document.querySelector("#mGS-section1-log").style.background = "#11161df5"
    document.querySelector("#mGS-section1-log-wrapper").style.visibility = "visible"
}, 2000)
/*---------------- Log screen animation ----------------*/


/*---------------- Set the elements width in a dynammic way ----------------*/
let widthLimit = document.querySelector("#mGS-section1").getBoundingClientRect().width
document.querySelector("#mGS-section1-log-table").style.width = `${widthLimit}px`
/*---------------- Set the elements width in a dynammic way ----------------*/


/*---------------- Main Button Enter Animation ----------------*/
document.querySelectorAll("#mGS-section2-buttons > button")[0].style.transition= "all 2s"
document.querySelectorAll("#mGS-section2-buttons > button")[1].style.transition= "all 2s"
setTimeout(() => 
{
    document.querySelectorAll("#mGS-section2-buttons > button")[0].style.height = "43px"
    document.querySelectorAll("#mGS-section2-buttons > button")[1].style.height = "43px"
}, 2000)
/*---------------- Main Button Enter Animation ----------------*/


}