const playerCards= document.querySelectorAll("html body div.player.board-container div.cards-container div.card");
const scoreDiv = document.querySelector(".score")

console.log(playerCards);

playerCards.forEach(elem => elem.addEventListener("click",(e)=> {
    let iaValue = pcPlay()
    let playerValue = playerPlay(iaValue,e)
    scoreResult(playerValue)
}));

function pcPlay(){
    let nValue = Math.floor(Math.random() * 31);
    let rock = (nValue > 0 && nValue < 10),
        paper = (nValue > 10 && nValue < 20),
        scissors = (nValue > 20 && nValue < 30);
    
    let result = rock ? "rock" : paper ? "paper" : scissors ? "scissors" : "default";
    return result;
}

function playerPlay(pcValue,e){
    let playerValue = e.target.getAttribute("value");
    console.log(pcValue);
    let isWin = (playerValue == "rock" && pcValue == "scissors") || 
        (playerValue == "paper" && pcValue == "rock") ||
        (playerValue == "scissors" && pcValue == "paper");
    let isTie = (playerValue == pcValue);

    let score = isTie ? "tie" : isWin ? "win" : "lose"
    console.log(score);
    return score
    
}

function scoreResult(score) {
    scoreDiv.firstChild.textContent = score;
    scoreDiv.children[1].children[0] = "Win: "
}