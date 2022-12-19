

export const customActionWPromise = async(Action)=>
{
    return new Promise((resolve, reject) => 
    {

        const body = document.querySelector("body")
        const fragment = document.createDocumentFragment() // create and append new elements faster with method


        const cAWP = document.createElement("div");
        cAWP.id = 'customActionWPromise'



        cAWP.innerHTML= `
            <div id='userSelectMainContainer'>
                <div id='userSelectMessage'>
                        <p>
                            ${
                               (()=>
                               {
                                    switch (condition)
                                    {
                                        case "nextLevel":
                                           return `👏💯 Well done ! 🎯 Captain 💯👏<br><br>
                                            You have destroyed all 👽 alien ships 🛸<br><br>
                                            Proceed to NEXT LEVEL !!!!
                                            `
                                            break;
                                        case "HERODEAD":
                                            return`☠️ Ship has been destroyed ☠️`
                                            break;

                                        default:
                                           return `✨👏 Congratulations Captain 👏✨<br><br>
                                            You have just defeated 🤜💥 an 👽 alien ship 🛸 !<br>`
                                            break;
                                    }

                               })()
                            }
                        
                        
                        </p>
                </div>
                <div id='userSelectButtonCon'>
                        <fieldset>

                            <legend>Here are your options as next step :</legend>

                                ${
                                    (()=>
                                    {
                                        switch (condition)
                                        {
                                            case "nextLevel":
                                            return `<input type="radio" id="useroption1" name="nextstep" value="nextLevel" />
                                            <label for="useroption1">to Next Level</label>
                                                `
                                                break;
                                            case "HERODEAD":
                                                return`<input type="radio" id="useroption3" name="nextstep" value="restart" />
                                                <label for="useroption3">Restart the Game !!</label>`
                                                break;

                                            default:
                                            return `<input type="radio" id="useroption1" name="nextstep" value="continue" />
                                            <label for="useroption1">Continue to Fight !!</label>
                                        
                                            <input type="radio" id="useroption2" name="nextstep" value="repair" />
                                            <label for="useroption2">Repair the hull !!</label>
                                        
                                        
                                            <input type="radio" id="useroption3" name="nextstep" value="restart" />
                                            <label for="useroption3">Restart the Game !!</label>`
                                                break;
                                        }

                                    })()
                                }



                                <button type="submit" id="nextStepButton">Submit</button>
                            

                        </fieldset>
                </div>
            </div>
        `



        fragment.appendChild(cAWP)
        body.insertBefore(fragment,null)

        //if user doesnt choose any radio option submit button will be disabled
        document.getElementById("nextStepButton").disabled = true;

        /*---------------- Element appear animation ----------------*/
        userSelect.style.scale = "0.1"
        userSelect.style.transition= "all 1.1s ease-out"
        setTimeout(() => {userSelect.style.scale = "1"}, 50)
        /*---------------- Element appear animation ----------------*/


        //After user select any radio option submit button will be available to click                    
        Array.from(document.querySelectorAll("input[name=nextstep]")).forEach((arg)=>{arg.addEventListener('change',()=>{document.getElementById("nextStepButton").disabled = false})})
        
        /* We have to wait user to select one option to move  thus we are using promise await to get the latest selection */
        let userResult = async() => { return await document.querySelector('input[name="nextstep"]:checked').value}
        

        document.querySelector("#nextStepButton").addEventListener("click",async()=>
        { 
            resolve(userResult()); document.querySelector("#userSelectMain").remove()
        })
        
        console.log("userinfo function called")
         
    });
}






