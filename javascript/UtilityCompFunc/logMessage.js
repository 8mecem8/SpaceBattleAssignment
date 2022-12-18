
export const writeTextLog = (text = "String limit to 29 letters ")=>
{

const logTable = document.querySelector("#mGS-section1-log-table")
const fragment = document.createDocumentFragment() // create and append new elements faster with method


const logText = document.createElement("p");
logText.className = 'logScreenText'



logText.innerHTML= `
        <br>
       ${text}
    
`



fragment.appendChild(logText)
logTable.appendChild(fragment)

/* This method always scrolls the spesific element to the bottom when this function called */
logTable.scrollTo(0, logTable.scrollHeight)

}