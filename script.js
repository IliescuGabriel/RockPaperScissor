const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}
function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "Rock" && computerSelection == "Scissors") || 
        (playerSelection == "Paper" && computerSelection == "Rock") || 
        (playerSelection == "Scissors" && computerSelection == "Paper")
        ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It'a tie!"
    }
    else if(result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}.`; 
    }
    else {
        return `You lost! ${computerSelection} beats ${playerSelection}.`;
    }
}
function getPlayerChoice(){
    let validateInput = false;
    while ( validateInput == false){
        const input = prompt("Type rock, paper, or scissors!");
        if( input == null){
            continue;
        }

        const inputInLower = input.toLowerCase();
        if (choices.includes(inputInLower)){
            validateInput = true;
            return inputInLower;
        }
    }
}

function game(){
    for (let i =0; i<5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();