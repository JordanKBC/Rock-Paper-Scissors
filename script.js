
const choices = Array("rock","paper","scissors") 
let choice = choices[Math.floor(Math.random()*choices.length)];

function play() {
    return choice;
}

function computerPlay() {
    return play();
}


function playRound(computerChoice) {
    playerInput = prompt("What is your choice?")
    let playerChoice = playerInput.toLowerCase();
    if (playerChoice == "rock" && computerChoice == "scissors") {
        return "You win! Rock beats Scissors"
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        return "You Lose! Scissors beats Paper"
    }
    else if (playerChoice == computerChoice) {
        return "Draw!"
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        return "You Lose! Paper beats Rock"
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        return "You Lose! Rock beats Scissors"
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        return "You win! Scissors beats Rock"
    }    
    else if (playerChoice == "paper" && computerChoice == "rock") {
        return "You win! Paper beats rock"
    }    
}
function game() {
    console.log(playRound(computerChoice))
    console.log(playRound(computerChoice))

}
  

const computerChoice = computerPlay();
game()