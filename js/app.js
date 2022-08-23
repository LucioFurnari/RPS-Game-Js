import { playerPlay } from "./playerPlay.js";
import { pcPlay } from "./pcPlay.js";



const playerCards= document.querySelectorAll("html body div.player.board-container div.cards-container div.card");
const scoreDiv = document.querySelector(".score");
const pcCards = document.querySelectorAll(".cards-container .card-pc");
console.log(pcCards);


function scoreResult(score) {
    scoreDiv.classList.remove("score-active");
    scoreDiv.classList.toggle("score-active");
    setTimeout(() => {
        scoreDiv.classList.remove("score-active");
    }, 2000);
    scoreDiv.children[0].textContent = score;
    console.log(scoreDiv.children[0]);
    // scoreDiv.children[1].children[0] = "Win: "
}

playerCards.forEach(elem => elem.addEventListener("click",(e)=> {
    let pcValue = pcPlay()
    let playerValue = playerPlay(pcValue,e)
    scoreResult(playerValue)
    pcActiveCards(pcValue)
}));

function pcActiveCards(value){
    pcCards[0].classList.remove("active-rock");
    pcCards[1].classList.remove("active-paper");
    pcCards[2].classList.remove("active-scissors");
    if( value == "rock"){
        pcCards[0].classList.toggle("active-rock");
        setTimeout(() => {
            pcCards[0].classList.remove("active-rock");
        }, 2000);
    }else if(value == "paper"){
        pcCards[1].classList.toggle("active-paper");
        setTimeout(() => {
            pcCards[1].classList.remove("active-paper");
        }, 2000);
    }else {
        pcCards[2].classList.toggle("active-scissors")
        setTimeout(() => {
            pcCards[2].classList.remove("active-scissors");
        }, 2000);
    }
}
