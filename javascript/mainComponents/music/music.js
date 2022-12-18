

export const controlMusic = ()=>
{


/* ---------- Load the music file and play  ---------- */
var audio = new Audio('sounds/theme.mp3', 100, true);
audio.play();


/* ----------Create HTML elements for Music Controls  ---------- */

const main = document.querySelector("main")
const fragment = document.createDocumentFragment() // create and append new elements faster with method


const mControl = document.createElement("div");
mControl.className = 'musicControl'


mControl.innerHTML= `
    
          <button class='musicControl-button'>⏯</button>
    
`


fragment.appendChild(mControl)
main.insertBefore(fragment,null)




/* ---------- Music Controls  ---------- */
let musicStatus = 'playing'
document.querySelector(".musicControl-button").addEventListener('click',()=>
{
    if(musicStatus == "playing"){audio.pause(),musicStatus = 'stopped'}
    else if(musicStatus == 'stopped') {audio.play(), musicStatus = "playing"}

})


}