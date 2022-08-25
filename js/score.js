export const scoreDiv = document.querySelector(".score");
export const scoreButton = document.querySelector(".score-button");
export let isValid = true;

export function scoreResult(score) {
    isValid = false;
    scoreDiv.classList.toggle("score-active");
    scoreDiv.children[0].textContent = score;
    
    scoreButton.addEventListener("click",() => {
        isValid =true
        scoreDiv.classList.remove("score-active");
    })
}

