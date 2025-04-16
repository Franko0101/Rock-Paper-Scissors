function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber) {
        case 1:
            return "rock";

        case 2:
            return "paper";

        default:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Insert rock, paper or scissors");
}

function printResult(humanChoice, computerChoice, result) {
    console.log(
        `
        Human: ${humanChoice}
        Computer: ${computerChoice}
        Result: ${result}
        `
    );
}

function playGame() {

    let humanSelection = getHumanChoice(), computerSelection = getComputerChoice();
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice == computerChoice) {
            printResult(humanChoice, computerChoice, "Thats a draw!")
            return;
        } else {
            switch (humanChoice) {
                case "rock":
                    switch(computerChoice) {
                        case "paper":
                            printResult(humanChoice, computerChoice, "Computer wins!");
                            computerScore++;
                            return;
                    
                        case "scissors":
                            printResult(humanChoice, computerChoice, "You win!");
                            humanScore++;
                            return;
                }
    
                case "paper":
                    switch(computerChoice) {
                        case "scissors":
                            printResult(humanChoice, computerChoice, "Computer wins!");
                            computerScore++;
                            return;
                    
                        case "rock":
                            printResult(humanChoice, computerChoice, "You win!");
                            humanScore++;
                            return;
                }
    
                default:
                    switch(computerChoice) {
                        case "rock":
                            printResult(humanChoice, computerChoice, "Computer wins!");
                            computerScore++;
                            return;
                    
                        case "paper":
                            printResult(humanChoice, computerChoice, "You win!");
                            humanScore++;
                            return;
                }
            }
        }
    }

    for (i = 0; i<5; i++) {
        playRound(humanSelection, computerSelection);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
    }

    console.log(
        `
        Human Score: ${humanScore}
        Computer Score: ${computerScore}
        `
    );

    if(humanScore == computerScore) {
        console.log("That's a draw!");
    } else if (humanScore > computerScore) {
        console.log("You Win!");
    } else {
        console.log("Computer Win!");
    }
}

playGame();