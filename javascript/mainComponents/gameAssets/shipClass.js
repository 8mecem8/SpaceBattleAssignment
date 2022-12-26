
export class Ship
{
    constructor(hull = 20,firepower = 5,accuracy = .7,id = "HERO")//preassigned arguments for hero ship
    {
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
        this.id = id
    }

    attack(enemyShip)
    {
        enemyShip.hull -= this.firepower
    }

    repair()
    {
        this.hull = hull
    }

    drawHtml(i)
    {
        const section3FieldEnemy = document.querySelector("#mGS-section3-field-enemy")
        const fragment = document.createDocumentFragment() // create and append new elements faster with method

        const enemyDiv = document.createElement("div");
        enemyDiv.className = 'enemy'
        enemyDiv.id = `enemy${i}`
        enemyDiv.setAttribute("data-number", `${i}`);
        enemyDiv.style.animationDelay = `${i/3}`
        enemyDiv.style.animationDuration = `${i/3+1}s`

        enemyDiv.innerHTML= `
            
        `

        fragment.appendChild(enemyDiv)
        section3FieldEnemy.appendChild(fragment)
    }
    deleteHtml(id)
    {   
        if(document.querySelector(`#enemy${id}`))
        {
        
            document.querySelector(`#enemy${id}`).style.animation = "none";//Previous animations must be deleted to next ones can work even if next ones are not animations
            /* ---------- Load the music file and play  ---------- */
            var audio =  new Audio('sounds/explosion.mp3', 100, true);
            
        

            /* ---------- Explosion animation enemy html elements  ---------- */
            const enemyToGo = document.querySelector(`#enemy${id}`)
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
            enemyToGo.appendChild(fragment)
            audio.play();

            document.querySelector(`#enemy${id}`).style.transition = "4s";
            setTimeout(() => {
                document.querySelector(`#enemy${id}`).style.filter= 'invert()';
                document.querySelector(`#enemy${id}`).style.transform = "translate3d(300px, 102vh, 0px)  skew(0deg, 38deg) rotateZ(43deg)" 
            }, 1000);//have to wait little bit to apply the transformation effect

            setTimeout(() => {/* document.querySelector(`#enemy${id}`).remove() */;audio.pause()}, 4000); // enemyships sent to out of the screen will be deleted before nextgame function !!
        }
    }

}