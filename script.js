

function playerPlay() {
    rawChoice = prompt("What is your choice?")
    rawChoiceFirstChar = (rawChoice.split(""))[0];
    formattedChoice = rawChoiceFirstChar.toUpperCase()
    for (i=1; i < rawChoice.length; i++) {
        formattedChoice += rawChoice[i].toLowerCase();
    }
    return formattedChoice;
}

function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random()*3);
    return choices[index];
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return "It is a Draw"
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ||playerSelection == "Scissors" && computerSelection == "Paper"||playerSelection == "Paper" && computerSelection == "Rock" ) {
        return `Player Wins. ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `Computer Wins. ${computerSelection} beats ${playerSelection}`
    }
}


function game() {
    for (let i=0; i < 4; i++) {
        let playerChoice = playerPlay();
        let computerChoice = computerPlay();
        if (playerChoice != undefined && computerChoice != undefined) {
            console.log(playRound(playerChoice,computerChoice));
        }
    }
}

game();


