
export const writeTextLog = async (text = "String limit to 29 letters ")=>
{
    return new Promise( async(resolve, reject) => {
                
        
                /* ---------- Load the music file and play  ---------- */
                var audio =  new Audio('sounds/screenWrite.mp3', 100, true);
                audio.play();
                /* ---------- Load the music file and play  ---------- */


                const logTable = document.querySelector("#mGS-section1-log-table")
                const fragment = document.createDocumentFragment() // create and append new elements faster with method


                const logText = document.createElement("p");
                logText.className = 'logScreenText'



                let textToWrite = text.split("")
                logText.innerHTML = `<br>`

                const textToWriteFunc = async()=>
                {
                let letter = textToWrite.shift()
                logText.innerHTML += `${letter}`

                if(textToWrite.length){setTimeout(async () => { await textToWriteFunc()}, 100);}
                if(!textToWrite.length){resolve();audio.pause()}
                
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