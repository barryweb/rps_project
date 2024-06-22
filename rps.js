//Define function
//Declare variable and initialize it with math method to generate random number
//use math method to conditionally return one of the multiple choices(r, p, s)
//use return statement to return the selected choice

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

//define function 
//use prompt method to ask the user for their choice
//validate the input to ensure its one of the valid choices(r, p, s)
//return the valid choice
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


//define the function 'playRound' with parameters '()' humanChoice & computerChoice
//make humanChoice case-insensitive by converting it toLowerCase();
//implement the game logic to determine the winner based on the choices
//increment ++ the humanScore OR computerScore based on the winner
//Log a message indicating the winner of the round

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
        return;
    }

    //define the rules of the game
    const winConditions = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    };

    //determine winner and update the score
    if(winConditions[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        humanScore++
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        computerScore++
        }
    }
    //loop 5 times to simulate 5 rounds
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    //compare to determine winner with conditionals and log the overall winner
    if(humanScore > computerScore) {
        console.log(`You win the game! Final score: You ${humanScore} - Computer ${computerScore}`);     
    } else if(computerScore > humanScore) {
        console.log(`You lose the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`It's a tie game! Final score: You ${humanScore} - Computer ${computerScore}`);
    }
}

