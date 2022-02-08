
// This function takes the user input and returns it as a capitalised string
function playerPlay() {
    rawChoice 
    rawChoiceFirstChar = (rawChoice.split(""))[0];
    formattedChoice = rawChoiceFirstChar.toUpperCase()
    for (i=1; i < rawChoice.length; i++) {
        formattedChoice += rawChoice[i].toLowerCase();
    }
    return formattedChoice;
}

//This function gives the computer's input through randomisation
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random()*3);
    return choices[index];
}

let playerChoice = playerPlay();
let computerChoice = computerPlay();

//This function decides if the computer or the player wins
function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return "It is a Draw"
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ||playerSelection == "Scissors" && computerSelection == "Paper"
            ||playerSelection == "Paper" && computerSelection == "Rock" ) {
        return `Player Wins. ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `Computer Wins. ${computerSelection} beats ${playerSelection}`
    }
}





