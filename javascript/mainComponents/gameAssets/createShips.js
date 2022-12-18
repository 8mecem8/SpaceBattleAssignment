import { writeTextLog } from "../../UtilityCompFunc/logMessage.js"
import { Ship } from "./shipClass.js"


export const createShips= async(gameWave) =>
{
    return new Promise((resolve, reject) => 
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
        writeTextLog(`⚠️  Attention  ⚠️ Captain !!!!! Radars detected ${enemies.length} Enemy ships, Get ready to Engage !!!`)
        return resolve({hero,enemies})
    })
}