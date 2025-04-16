function getComputerChoice() {
    let randomNUmber = Math.floor(Math.random() * 3) + 1;
    switch(randomNUmber) {
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

let humanScore = 0, computerScore = 0;

function printResult(humanChoice, computerChoice, result) {
    console.log(
        `
        Human: ${humanChoice}
        Computer: ${computerChoice}
        Result: ${result}
        `
    );
}

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
                        printResult(humanChoice, computerChoice, "Computer Wins!");
                        computerScore++;
                        return;
                
                    case "scissors":
                        printResult(humanChoice, computerChoice, "Player Wins!");
                        humanScore++;
                        return;
            }

            case "paper":
                switch(computerChoice) {
                    case "scissors":
                        printResult(humanChoice, computerChoice, "Computer Wins!");
                        computerScore++;
                        return;
                
                    case "rock":
                        printResult(humanChoice, computerChoice, "Player Wins!");
                        humanScore++;
                        return;
            }

            default:
                switch(computerChoice) {
                    case "rock":
                        printResult(humanChoice, computerChoice, "Computer Wins!");
                        computerScore++;
                        return;
                
                    case "paper":
                        printResult(humanChoice, computerChoice, "Player Wins!");
                        humanScore++;
                        return;
            }
        }
    }
}

let humanSelection = getHumanChoice(), computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);