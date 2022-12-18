import { drawMainGameScreen } from "../interfaceComponents/mainGame.js"
import { gameEngine } from "./game/game.js"
import {controlMusic} from "../mainComponents/music/music.js"

export const initializeGame = async() =>
{
    document.querySelector(".mainMenu").remove() // deletethe message box element
    await drawMainGameScreen()
    await gameEngine()
    await controlMusic()
}