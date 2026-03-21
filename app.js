let humanScore = 0;
let computerScore = 0;
const game  = ["rock" , "paper" , "scissors"]

function getCompChoice(){
     let getRandomIndex = Math.floor(Math.random()*3)
     return game[getRandomIndex];
}
function getHumanChoice(){
    let choice = prompt("enter 'rock', 'paper', 'sicssors' ").toLowerCase()
    return choice;
}
function playround(humanChoice , computerChoice){
    if (humanChoice === computerChoice ) {
        console.log("Draw");
        
    }else if ( humanChoice === "rock" && computerChoice === "scissors" || humanChoice ==="scissors" && computerChoice=== "paper" || humanChoice ==="paper"&&computerChoice==="rock") {
    console.log("You Win ");
    humanScore++
}else{
    console.log("You Lose")
    computerScore++
}

}
function playGame (){
    for (let i = 0;  i < 5 ; i++) {
    let humanChoice = getHumanChoice()
    let computerChoice = getCompChoice()
        playround(humanChoice , computerChoice)
    }
    if (humanScore > computerScore) {
    console.log(" Over All You Win!")
} else if (computerScore > humanScore) {
    console.log(" Over All You Lose!")
} else {
    console.log("It's a Draw!")  
}

}
playGame()