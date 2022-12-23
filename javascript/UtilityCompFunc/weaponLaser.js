



export const drawWeaponLaser = async(attacker,defender)=>
{
    return new Promise( async(resolve, reject) => 
    {

        /* ---------- Load the music file and play  ---------- */
        var audio =  new Audio('sounds/laserShoot.mp3', 100, true);
        audio.play();

     
        const main = document.querySelector("main")
        const fragment = document.createDocumentFragment() // create and append new elements faster with method



        const wLaser = document.createElement("div");
        wLaser.id = 'weaponLaser'
        //wLaser.style.width = '200px'


        wLaser.innerHTML= `
            
        `



        fragment.appendChild(wLaser)
        main.insertBefore(fragment,null)

        
        
        wLaser.style.width = '200px'
        let enemyPositon = defender.id == "HERO" ? 0 : document.querySelector(`#enemy${defender.id}`).getBoundingClientRect().x
        let enemyWidth = defender.id == "HERO" ? 0 :  document.querySelector(`#enemy${defender.id}`).getBoundingClientRect().width
        let laserWidth = wLaser.getBoundingClientRect().width
        let laserPosition = wLaser.getBoundingClientRect().x

        wLaser.style.transform =`translate3d(${enemyPositon - (enemyWidth / 2) - (laserWidth / 8) - laserPosition}px,${0}px,0px)`
        wLaser.style.width = '0px'

         setTimeout( async() => {audio.pause(); wLaser.remove();  resolve()   }, 2000);
    })



}