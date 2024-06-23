function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        return "rock";
    } else if(randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;




function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
        return;
    }

    
    const winConditions = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    };

    
    if(winConditions[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        humanScore++
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        computerScore++
        }
    }

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore) {
        console.log(`You win the game! Final score: You ${humanScore} - Computer ${computerScore}`);     
    } else if(computerScore > humanScore) {
        console.log(`You lose the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`It's a tie game! Final score: You ${humanScore} - Computer ${computerScore}`);
    }
}

