import { drawMainGameScreen } from "../interfaceComponents/mainGame.js"
import { gameEngine } from "./game/game.js"
import {controlMusic} from "../mainComponents/music/music.js"

export const initializeGame = async() =>
{
    document.querySelector(".mainMenu").remove() // deletethe message box element
    await drawMainGameScreen()
    //To prvent bug we need to disable the attack button
    document.querySelector(`#mGS-section2-button1`).disabled = true
    await gameEngine()
    await controlMusic()
}