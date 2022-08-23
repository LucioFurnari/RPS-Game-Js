

export  function playerPlay(pcValue,e){
    let playerValue = e.target.getAttribute("value");
    // console.log(pcValue);
    let isWin = (playerValue == "rock" && pcValue == "scissors") || 
        (playerValue == "paper" && pcValue == "rock") ||
        (playerValue == "scissors" && pcValue == "paper");
    let isTie = (playerValue == pcValue);

    let score = isTie ? "tie" : isWin ? "win" : "lose"
    console.log(score);
    return score
    
}
