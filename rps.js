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


