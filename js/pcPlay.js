

export function pcPlay(){
    let nValue = Math.floor(Math.random() * 31),
            rock = (nValue >= 0 && nValue < 10),
            paper = (nValue >= 10 && nValue < 20),
            scissors = (nValue >= 20 && nValue <= 30),
                result = rock ? "rock" : paper ? "paper" : scissors ? "scissors" : "default";
    // console.log(rock,paper,scissors);

    
    console.log(result);
    return result;
    
}