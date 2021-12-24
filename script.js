
const choices = Array("rock","paper","scissors") 
let choice = choices[Math.floor(Math.random()*choices.length)];

function computerPlay() {
    return choice;
}


function playRound(computerChoice,playerInput) {
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
        return "You win!"
    }    
}



rockChoice = document.getElementById("button-R");
rockChoice.addEventListener("click",() => {
    playerInput = "rock";
    computerResults = computerPlay();
    results = playRound(computerResults,playerInput);
    console.log(computerResults)
    let gameResults = document.createElement("div");
    gameResults.innerHTML = results;
    document.getElementsByClassName("bottom-container")[0].appendChild(gameResults);
});


scissorsChoice = document.getElementById("button-S");
scissorsChoice.addEventListener("click",() => {
    playerInput = "scissors";
    computerResults = computerPlay();
    results = playRound(computerResults,playerInput)
    let gameResults = document.createElement("div");
    gameResults.innerHTML = results;
    document.getElementsByClassName("bottom-container")[0].appendChild(gameResults);
});

paperChoice = document.getElementById("button-P");
paperChoice.addEventListener("click",() => {
    playerInput = "paper";
    computerResults = computerPlay();
    results = playRound(computerResults,playerInput)
    let gameResults = document.createElement("div");
    gameResults.innerHTML = results;
    document.getElementsByClassName("bottom-container")[0].appendChild(gameResults);
});
