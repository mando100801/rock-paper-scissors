function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);

    switch(num){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    playerSelection = convertRPCtoNum(playerSelection);
    computerSelection = convertRPCtoNum(computerSelection);
    let result = (playerSelection - computerSelection + 3) % 3;
    switch(result){
        case 0:
            return ["Tie", 0];
        case 2:
            return ["You Lose! " + convertNumtoRPC(playerSelection) + " beats " + convertNumtoRPC(computerSelection), 2] 
        case 1:
            return ["You Win! " + convertNumtoRPC(playerSelection) + " beats " + convertNumtoRPC(computerSelection), 1] 
    }
}

//Rock = 0, Paper = 1, Scissors = 2
//str is case-sensitive
function convertRPCtoNum(str){
    switch(str){
        case "Rock":
            return 0;
        case "Paper":
            return 1;
        case "Scissors":
            return 2;
    }
}

function convertNumtoRPC(num){
    switch(num){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

playerScore = 0;
computerScore = 0;

rockBtn = document.querySelector("#Rock");
paperBtn = document.querySelector("#Paper");
scissorsBtn = document.querySelector("#Scissors");

result = document.querySelector("#Result");
result2 = document.querySelector("#Result2");
score = document.querySelector("#Score");

rockBtn.addEventListener('click',() => {
    if(playerScore === 0 && computerScore === 0){
        result2.textContent = "";
    }
    tmp = playRound("Rock", getComputerChoice());
    result.textContent = tmp[0];
    if(tmp[1] === 1){
        playerScore++;
    }
    if(tmp[1] === 2){
        computerScore++;
    }
    if(playerScore === 5){
        result2.textContent = "You won!";
        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore === 5){
        result2.textContent = "You lost!";
        playerScore = 0;
        computerScore = 0;
    }
    score.textContent = playerScore + "   " + computerScore;
})

paperBtn.addEventListener('click', () => {
    if(playerScore === 0 && computerScore === 0){
        result2.textContent = "";
    }
    tmp = playRound("Paper", getComputerChoice());
    result.textContent = tmp[0];
    if(playerScore === 0 && computerScore === 0){
        result2.textContent = "";
    }
    if(tmp[1] === 1){
        playerScore++;
    }
    if(tmp[1] === 2){
        computerScore++;
    }
    if(playerScore === 5){
        result2.textContent = "You won!";
        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore === 5){
        result2.textContent = "You lost!";
        playerScore = 0;
        computerScore = 0;
    }
    score.textContent = playerScore + "   " + computerScore;
})

scissorsBtn.addEventListener('click', () => {
    if(playerScore === 0 && computerScore === 0){
        result2.textContent = "";
    }
    tmp = playRound("Scissors", getComputerChoice());
    result.textContent = tmp[0];
    if(playerScore === 0 && computerScore === 0){
        result2.textContent = "";
    }
    if(tmp[1] === 1){
        playerScore++;
    }
    if(tmp[1] === 2){
        computerScore++;
    }
    if(playerScore === 5){
        result2.textContent = "You won!";
        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore === 5){
        result2.textContent = "You lost!";
        playerScore = 0;
        computerScore = 0;
    }
    score.textContent = playerScore + "   " + computerScore;
})

