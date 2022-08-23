import { playerPlay } from "./playerPlay.js";
import { pcPlay } from "./pcPlay.js";



const playerCards= document.querySelectorAll("html body div.player.board-container div.cards-container div.card");
const scoreDiv = document.querySelector(".score");
const pcCards = document.querySelectorAll(".cards-container .card-pc");
const scoreButton = document.querySelector(".score-button");
console.log(pcCards);
let isValid = true;

function scoreResult(score) {
    isValid = false;
    scoreDiv.classList.toggle("score-active");
    // setTimeout(() => {
    //     scoreDiv.classList.remove("score-active");
    // }, 2000);
    scoreDiv.children[0].textContent = score;

    scoreButton.addEventListener("click",() => {
        isValid =true
        scoreDiv.classList.remove("score-active");
    })
    // console.log(scoreDiv.children[0]);
    // scoreDiv.children[1].children[0] = "Win: "
}

playerCards.forEach(elem => elem.addEventListener("click",(e)=> {
    if(isValid){
        let pcValue = pcPlay()
    let playerValue = playerPlay(pcValue,e)
    scoreResult(playerValue)
    pcActiveCards(pcValue)
    }
}));

function pcActiveCards(value){
    
    if( value == "rock"){
        pcCards[0].classList.toggle("active-rock");
        setTimeout(() => {
            pcCards[0].classList.remove("active-rock");
        }, 1000);
    }else if(value == "paper"){
        pcCards[1].classList.toggle("active-paper");
        setTimeout(() => {
            pcCards[1].classList.remove("active-paper");
        }, 1000);
    }else {
        pcCards[2].classList.toggle("active-scissors")
        setTimeout(() => {
            pcCards[2].classList.remove("active-scissors");
        }, 1000);
    }
}
