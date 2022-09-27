let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let playerSelection = "";

// when rock is clicked
rock.addEventListener("click", () => {
    // set player selection to rock
    playerSelection = "rock";
    // add 1 to round
    roundCount++;
    playRound();
  });

// when paper is clicked
paper.addEventListener("click", () => {
    // set player selection to paper
    playerSelection = "paper";
    // add 1 round count
    roundCount++;
    playRound();
  });

// when scissors is clicked
scissors.addEventListener("click", () => {
    // set player selection to scissors
    playerSelection = "scissors";
    // add  1
    roundCount++;
    playRound();
  });

// gets the choice for computer either rock, paper, or scissors
function getComputerChoice() {
    // pick random number between 1-3
    let randNum = Math.floor((Math.random() * 3) + 1);
    // if number is 1 pick rock
    if (randNum === 1) {
        let computerSelection = "rock";
        return computerSelection;
    }
    // if number is 2 pick paper
    else if (randNum === 2) {
        let computerSelection = "paper";
        return computerSelection;
    }
    // if number is 3 pick scissors
    else if (randNum === 3) {
        let computerSelection = "scissors";
        return computerSelection;
    }
        
}


// plays round of game
function playRound(playerCount, computerCount) {
    // ask player for choice
    //let playerSelection = prompt("Pick rock, paper, or scissors:").toLowerCase();

    console.log(playerSelection);

    // get computer selection
    computerSelection = getComputerChoice().toLowerCase();
    console.log(computerSelection);

    let decision = "";

    // if player selection and computer selection are the same, tie
    if (playerSelection === computerSelection) {
        decision = `You tie, ${playerSelection} ties ${computerSelection}`;
        playerScore++;
        console.log(decision);
    }

    if (playerSelection === 'rock' & computerSelection === 'paper') {
        decision = `You lose, ${computerSelection} beats ${playerSelection}`;
        console.log(decision);
        computerScore++;

    }

    if (playerSelection === 'rock' & computerSelection === 'scissors') {
        decision = `You win, ${playerSelection} beats ${computerSelection}`;
        console.log(decision);
        playerScore++;

    }

    if (playerSelection === 'paper' & computerSelection === 'rock') {
        decision = `You win, ${playerSelection} beats ${computerSelection}`;
        console.log(decision);
        playerScore++;


    }

    if (playerSelection === 'paper' & computerSelection === 'scissors') {
        decision = `You lose, ${computerSelection} beats ${playerSelection}`;
        console.log(decision);
        computerScore++;
    }

    if (playerSelection === 'scissors' & computerSelection === 'rock') {
        decision = `You lose, ${computerSelection} beats ${playerSelection}`;
        console.log(decision);
        computerScore++;

    }

    if (playerSelection === 'scissors' & computerSelection === 'paper') {
        decision = `You win, ${playerSelection} beats ${computerSelection}`;
        console.log(decision);
        playerScore++;

    }
    
    // when 5 rounds done
    if (roundCount === 5) {
      gameResult();
    }
}

// displays result of game and resets values
function  gameResult(){

    if (playerScore === computerScore) {
        console.log("Tie game!")
        playerScore = 0;
        computerScore = 0;
        //console.log(playerScore);
        //console.log(computerScore);
    }

    // if player has higher score they win
    if (playerScore > computerScore) {
        console.log("You win the game!")
        playerScore = 0;
        computerScore = 0;
        //playerScore = 0;
        //computerScore = 0;
    }

    // if computer has higher score then player loses
    if (playerScore < computerScore) {
        console.log("You lost the game!")
        playerScore = 0;
        computerScore = 0;

    }
}  



