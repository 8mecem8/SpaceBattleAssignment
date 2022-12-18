import "../../interfaceComponents/startMenu.js"
import { Userinput } from "../../UtilityCompFunc/getUserInput.js"
import { writeTextLog } from "../../UtilityCompFunc/logMessage.js"
import { createShips } from "../gameAssets/createShips.js"


let enemyArrayAfterFight = []
let gameWave = 1



export const gameEngine= async function()
{
    let ShipHullValue = document.querySelector("#mGS-section2-info > span")
    let GameWaveValue = document.querySelector("#mGS-section3-wave > span")
    let {hero,enemies} = await createShips(gameWave)
    
    

    const startFight = async()=>
    {

            while(enemies.length && hero.hull > 0)
        {
            console.log("enemy taken from enemies array !!!")
            let enemy = enemies.shift()
            if(enemy.hull <= 0){break}            

            //As stated in the Assignment Task Hero ship first to attack
            let whosToAttack = hero
            let whosToGetDamage = enemy


            
            while(enemy.hull > 0 && hero.hull > 0)
            {
                switch (true) {
                    case Math.random() < whosToAttack.accuracy:
                            console.log('before ',whosToAttack,whosToGetDamage)
                            whosToAttack.attack(whosToGetDamage)
                            console.log('after ',whosToAttack,whosToGetDamage)
                            


                        
                            //we need to change the roles  after each attack happens
                            whosToAttack = whosToGetDamage
                            whosToGetDamage = whosToAttack == hero ? enemy : hero
                            
                        break;
                
                    default: console.log('chance missed')
                             console.log('chance missed before',whosToAttack,whosToGetDamage)
                            //we need to change the roles  after each attack attemps even if it is missed
                            whosToAttack = whosToGetDamage
                            whosToGetDamage = whosToAttack == hero ? enemy : hero
                            console.log('chance missed after',whosToAttack,whosToGetDamage)
                        break;
                }
            }


            if(hero.hull < 1 &&  hero.hull <= 0){console.log('Our hero is dead...... Game Over'); heroDead(); break}
            
            //When an enemy die hull value less or equal to 0 , is deleted from array and html
            enemy.hull <= 0 ? enemy.deleteHtml(enemy.id) : enemyArrayAfterFight.push(enemy) 
            
            
            console.log("enemy before userInput result ===>",enemy)
            //End of each figth fight ask user to what want to do as next step go on figthing/repair/restart
            

            let result = !enemies.length ? await Userinput("nextLevel") : await Userinput()

            console.log("result",result)

            switch (result) {
                case 'nextLevel':
                   await nextWave()
                    break;

                case 'restart':
                   await restartGame()
                    break;

                case 'repair':
                    console.log(`repair the hull`)
                    break;
                default:
                    break;
            }

            /* ---------- end of the while loop ---------- */
        } 

        enemyArrayAfterFight.length <= 0 ? null : enemies = enemyArrayAfterFight

    }
     

    const nextWave = async()=>
    {
        console.log('next !!!!!',enemies.length)
        await writeTextLog(`Heyyyyyyy This is Awesome !! You have cleaned the ${gameWave}st Wave of Enemy Ships`)
        setTimeout( async() => {await writeTextLog("dont get relax , Be ready for next Wave !!!")}, 2500);
        //setTimeout(() => {Array.from(document.querySelectorAll("#mGS-section1-log-table > p")).forEach(arg => arg.remove()) /*Clean log screen */}, 4000);
        console.log('nextGame function !!!!')
        gameWave++
        await gameEngine();

    }

    const heroDead = async()=>
    {
        let heroDeadResult = await Userinput("HERODEAD")
        await writeTextLog("User restarted the game")
        await writeTextLog("3.....2......1...")
        await writeTextLog("Get Ready !!!!!!")
        setTimeout(() => {restartGame()}, 2000);

    }

    const restartGame= async()=>
    {
        gameWave = 1; GameWaveValue.innerHTML = gameWave

        Array.from(document.querySelectorAll("#mGS-section1-log-table > p")).forEach(arg => arg.remove()) //Clean log screen
        Array.from(document.querySelectorAll(".enemy")).forEach(arg => arg.remove())//Remove old enemies
        
        await gameEngine();
        
    }




    /* When user clicks hero starts fight sequence  */
    document.querySelector("#mGS-section2-button1").addEventListener('click',startFight)

    const run = function()
    {
        
        ShipHullValue.innerHTML = hero.hull
        GameWaveValue.innerHTML = gameWave
        


        requestAnimationFrame(run)
    }
    run()
}

