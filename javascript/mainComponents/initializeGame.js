import { drawMainGameScreen } from "../interfaceComponents/mainGame.js"
import { gameEngine } from "./game/game.js"
import {controlMusic} from "../mainComponents/music/music.js"

export const initializeGame = () =>
{
    document.querySelector(".mainMenu").remove() // deletethe message box element
    drawMainGameScreen()
    gameEngine()
    controlMusic()
}