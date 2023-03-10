import { writeTextLog } from "../../UtilityCompFunc/logMessage.js"
import { Ship } from "./shipClass.js"


export const createShips= async(gameWave) =>
{
    return new Promise(async (resolve, reject) => 
    {

        /* ------------- Create the Hero Ship ------------- */
        const hero =  new Ship(undefined,undefined,undefined)

        /* ------------- Create the Enemy Ships ------------- */

        let hull = () => Math.floor(Math.random()*4)+3 //value should be between 3-6, variable should be a arrow function when called value to differ
        let firepower = () => Math.floor(Math.random()*3)+2 //value should be between 2-4, variable should be a arrow function when called value to differ
        let accuracy = () => (Math.random()*.3+.6).toFixed(2)//value should be between .6-.8, variable should be a arrow function when called value to differ

        const enemies = Array.from({length:(Math.ceil(Math.random()+2*(gameWave)))},(arg,i)=> (new Ship(hull(),firepower(),accuracy(),i)))//number of enemies determined by the waves of game state

        /* ------------- Add the Enemy Ships to DOM ------------- */
        enemies.forEach((arg,i)=>arg.drawHtml(i))
        
        /* ------------- Enemy Ships enterence animation 1 by 1 ------------- */
        let time = 1000
        Array.from(document.querySelectorAll(".enemy")).forEach(arg => 
            {
                time += 600 
                arg.style.transition= "all 2s"
                setTimeout(() => {arg.style.transform = "translate3d(0px,0px,0)"}, time);
            })
        /* ------------- Enemy Ships enterence animation 1 by 1 ------------- */
        
        console.log('new ships are created !!!!!!!!!!!!!!!!!!!', enemies)
        setTimeout( async() => {await writeTextLog(`⚠️  Attention  ⚠️ Captain !!!!! Radars detected ${enemies.length} Enemy ships, Get ready to Engage !!!`)}, enemies.length > 3 ? 6000 : 3000);
        
        return resolve({hero,enemies})
    })
}



function start()
{
    Array.from(document.querySelectorAll(".enemy")).forEach(arg => 
        {
            
            const fragment = document.createDocumentFragment() // create and append new elements faster with method


            const explodeAni = document.createElement("div");
            explodeAni.id = 'ufo'



            explodeAni.innerHTML= `
            <div class="stick" style="--i:1"></div>
            <div class="stick" style="--i:2"></div>
            <div class="stick" style="--i:3"></div>
            <div class="stick" style="--i:4"></div>
            <div class="stick" style="--i:5"></div>
            <div class="stick" style="--i:6"></div>
            
            <div id="circle"></div>
            
            <div class="light__wave"></div>

            <div class="triangle" style="--j:1"></div>
            <div class="triangle" style="--j:2"></div>
            <div class="triangle" style="--j:3"></div>
            <div class="triangle" style="--j:4"></div>
            <div class="triangle" style="--j:5"></div>
            <div class="triangle" style="--j:6"></div>
            <div class="triangle" style="--j:7"></div>
            <div class="triangle" style="--j:8"></div>
                
            `



            fragment.appendChild(explodeAni)
            arg.appendChild(fragment)
        })

}