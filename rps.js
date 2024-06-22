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


