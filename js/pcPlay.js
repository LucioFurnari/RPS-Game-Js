const pcCards = document.querySelectorAll(".cards-container .card-pc");
let rockCont = 0;
let paperCont = 0;
let scissorsCont = 0;

export function pcPlay(choise){
    switch (choise) {
        case "rock":
            rockCont++
            break;
        case "paper":
            paperCont++
            break;
        case "scissors":
            scissorsCont++
            break;
    }

    console.log(rockCont);
    console.log(paperCont);
    console.log(scissorsCont);
    let nValue = Math.floor(Math.random() * 31);
            // let rock = (scissorsCont > 3 ? true : nValue >= 0 && nValue < 10);
            // let paper = (rockCont > 3 ? true : nValue >= 10 && nValue < 20);
            // let scissors = (paperCont > 3 ? true : nValue >= 20 && nValue <= 30);
            
    let result;
    if(scissorsCont > 3 || (nValue >= 0 && nValue < 10)) {
            result = "rock"
        } else if (rockCont > 3 || (nValue >= 10 && nValue < 20)){
            result = "paper"
        }else if (paperCont > 3 || (nValue >= 20 && nValue <= 30)){
            result ="scissors"
        }



            // let result = rock ? "rock" : paper ? "paper" : scissors ? "scissors" : "default";
    switch (choise) {
        case "paper":
            scissorsCont = 0;
            break;
        case "rock":
            paperCont = 0;
            break;
        case "scissors":
            rockCont = 0;
            break;
    }
    // console.log(rock,paper,scissors);

    pcActiveCards(result)
    console.log(result);
    return result;
    
}
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
