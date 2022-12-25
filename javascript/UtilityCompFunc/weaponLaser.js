



export const drawWeaponLaser = async(attacker,defender)=>
{
    return new Promise( async(resolve, reject) => 
    {

        /* ---------- Load the music file and play  ---------- */
        var audio =  new Audio('sounds/laserShoot.mp3', 100, true);
        audio.play();
        /* ---------- Load the music file and play  ---------- */

     
        const main = document.querySelector("main")
        const fragment = document.createDocumentFragment() // create and append new elements faster with method



        const wLaser = document.createElement("div");
        wLaser.id = 'weaponLaser'


        wLaser.innerHTML= ``//may be gonna need this method keep it 


        /* --------------- Laser Css animation Before inserting the element -------------- */
        let enemyPositonY = defender.id == "HERO" ? document.querySelector(`#enemy${attacker.id}`).getBoundingClientRect().y : document.querySelector(`#enemy${defender.id}`).getBoundingClientRect().y
        let angle = attacker.id == "HERO"?  enemyPositonY < 300 ? -27 :  enemyPositonY > 500 ? 36 : 0 :0

        if(attacker.id == "HERO")
        {wLaser.style.transform =`rotateZ(${angle}deg)`}

        //Movement in Y axis
        wLaser.style.top = `${(enemyPositonY )}px`
        /* --------------- Laser Css animation Before inserting the element -------------- */



        fragment.appendChild(wLaser)
        main.insertBefore(fragment,null)

        

        /* --------------- Laser Css animation -------------- */
        wLaser.style.width = '200px'
        let enemyPositonX = defender.id == "HERO" ? 0 : document.querySelector(`#enemy${defender.id}`).getBoundingClientRect().x
        let enemyWidth = defender.id == "HERO" ? 0 :  document.querySelector(`#enemy${defender.id}`).getBoundingClientRect().width
        let laserWidth = wLaser.getBoundingClientRect().width
        let laserPositionX = wLaser.getBoundingClientRect().x

        //Movement in x axis
        wLaser.style.transform =`translateX(${enemyPositonX + (enemyWidth / 2) - (laserWidth / 8) - laserPositionX}px) rotateZ(${angle}deg)`
        wLaser.style.width = '0px'
        /* --------------- Laser Css animation -------------- */



        //Stop sound, remove html element, fulfill promise
        setTimeout( async() => {audio.pause(); wLaser.remove();  resolve()   }, 3000);
    })



}