let computerScore = 0;
let playerScore = 0;

//This function gives the computer's input through randomisation
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random()*3);
    return choices[index];
}

//This function decides if the computer or the player wins
function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return "It is a Draw"
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ||playerSelection == "Scissors" && computerSelection == "Paper"
            ||playerSelection == "Paper" && computerSelection == "Rock" ) {
        playerScore += 1;
        return `Player Wins. ${playerSelection} beats ${computerSelection}`
    }
    else {
        computerScore += 1;
        return `Computer Wins. ${computerSelection} beats ${playerSelection}`
    }
}

//Create a div to display the result of the current round

let comDisplayScore = document.querySelector(".comScore");
comDisplayScore.innerHTML = computerScore;

let playerDisplayScore = document.querySelector(".playerScore");
playerDisplayScore.innerHTML = playerScore;

let resultStatement = document.querySelector(".resultStatement");


//Add event listeners to each button to be fed to the playerplay() function
let buttonNL = document.querySelectorAll("button");
let buttonList = [...buttonNL];
let playerSelection = "";

buttonList[0].addEventListener("click", () => {
    playerSelection="Rock"
    resultStatement.innerHTML = playRound(playerSelection,computerPlay())
    comDisplayScore.innerHTML = computerScore;
    playerDisplayScore.innerHTML = playerScore;
} );

buttonList[1].addEventListener("click", () => {
    playerSelection="Paper"
    resultStatement.innerHTML = playRound(playerSelection,computerPlay())
    comDisplayScore.innerHTML = computerScore;
    playerDisplayScore.innerHTML = playerScore;
} );

buttonList[2].addEventListener("click", () => {
    playerSelection="Scissors"
    resultStatement.innerHTML = playRound(playerSelection,computerPlay())
    comDisplayScore.innerHTML = computerScore;
    playerDisplayScore.innerHTML = playerScore;
} );




//Create a div to display the result of the current round
//Create a score keeper for the computer and user which restarts whenever 
//   one of them hits five




