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
            return "Tie";
        case 2:
            return "You Lose! " + convertNumtoRPC(playerSelection) + " beats " + convertNumtoRPC(computerSelection) 
        case 1:
            return "You Win! " + convertNumtoRPC(playerSelection) + " beats " + convertNumtoRPC(computerSelection) 
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

function game(){
    let winCounter = 0;
    for(i = 0; i < 5; i++){
        let result = null;
        do{
            let playerSelection = prompt("Your choice?");
            let computerSelection = getComputerChoice();
            result = playRound(playerSelection, computerSelection);
            console.log(result);
            if(result.charAt(4) === "W"){
                winCounter++;
            }
        } while(result === "Tie");
    }
    if(winCounter === 3){
        console.log("You won a best-of-five");
    }
    else{
        console.log("You lost a best-of-five");
    }
}