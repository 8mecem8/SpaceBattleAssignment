
export const writeTextLog = async (text = "String limit to 29 letters ")=>
{
    return new Promise( async(resolve, reject) => {
                //To prevent bug we need to disable the attack button when printing to log section
                document.querySelector(`#mGS-section2-button1`).disabled = true
                
        
                

                /* ---------- Load the music file and play  ---------- */
                var audio =  new Audio('sounds/screenWrite.mp3', 100, true);
                audio.play();
                /* ---------- Load the music file and play  ---------- */


                const logTable = document.querySelector("#mGS-section1-log-table")
                const fragment = document.createDocumentFragment() // create and append new elements faster with method


                const logText = document.createElement("p");
                logText.className = 'logScreenText'

                //If the messages for the enemy change the color
                if(text.includes('Enemy Ship')){logText.className += ` textForEnemy`}


                let textToWrite = text.split("")
                logText.innerHTML = `<br>`

                const textToWriteFunc = async()=>
                {
                let letter = textToWrite.shift()
                logText.innerHTML += `${letter}`
                
                //set cycle to print letters one by one
                if(textToWrite.length){setTimeout(async () => { await textToWriteFunc()}, 30);}
                //when all letters printed to the log section, fullfil the promise, stop audio and if text say time to engage make the attack button active
                if(!textToWrite.length){resolve();audio.pause();text.includes('Engage')? document.querySelector(`#mGS-section2-button1`).disabled = false : null}
                
                /* This method always scrolls the spesific element to the bottom when this function called */
                        logTable.scrollTo(0, logTable.scrollHeight)
                }
                await textToWriteFunc()

                

                
                fragment.appendChild(logText)
                logTable.appendChild(fragment)

                /* This method always scrolls the spesific element to the bottom when this function called */
                logTable.scrollTo(0, logTable.scrollHeight)
        })
}