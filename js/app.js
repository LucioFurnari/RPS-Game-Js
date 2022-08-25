import { playerPlay } from "./playerPlay.js";
import { pcPlay } from "./pcPlay.js";
import { scoreResult } from "./score.js";
import { isValid } from "./score.js";

const playerCards= document.querySelectorAll("html body div.player.board-container div.cards-container div.card");






playerCards.forEach(elem => elem.addEventListener("click",(e)=> {
    if(isValid){
        let pcValue = pcPlay(e.target.getAttribute("value"))
        let playerValue = playerPlay(pcValue,e)
        scoreResult(playerValue)
            
    }
}));


