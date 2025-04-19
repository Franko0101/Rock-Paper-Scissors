const choiceDiv = document.createElement("div");

const choicePara = document.createElement("p");
choicePara.textContent = "Click a button to make your choice";

const rock = document.createElement("button");
rock.textContent = "rock";

const paper = document.createElement("button");
paper.textContent = "paper";

const scissors = document.createElement("button");
scissors.textContent = "scissors";

choiceDiv.appendChild(choicePara);
choiceDiv.appendChild(rock);
choiceDiv.appendChild(paper);
choiceDiv.appendChild(scissors);
document.body.appendChild(choiceDiv);

const gameDiv = document.createElement("div");

const scorePara = document.createElement("p");

document.body.appendChild(gameDiv);

let humanScore = 0, computerScore = 0;

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

function printResult(humanChoice, computerChoice, result) {
    const resultPara = document.createElement("p");

    resultPara.textContent = 
    `Human: ${humanChoice}
     Computer: ${computerChoice}
     Result: ${result}`;
    
    gameDiv.appendChild(resultPara);
    scorePara.textContent = `Human Score: ${humanScore} \t Computer Score: ${computerScore}`
    gameDiv.appendChild(scorePara);
}

function endGame() {

    if (humanScore == 5) {
        const endPara = document.createElement("p");
        endPara.textContent = "You win!";
        gameDiv.appendChild(endPara);
    } else if (computerScore == 5) {
        const endPara = document.createElement("p");
        endPara.textContent = "Computer wins!";
        gameDiv.appendChild(endPara);
    }
}

function playRound(e) {

    let humanChoice = e.target.textContent, computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        printResult(humanChoice, computerChoice, "Thats a draw!")
        return;
    } else {
        switch (humanChoice) {
            case "rock":
                switch(computerChoice) {
                    case "paper":
                        computerScore++;
                        printResult(humanChoice, computerChoice, "Computer wins!");
                        endGame();
                        return;
                
                    case "scissors":
                        humanScore++;
                        printResult(humanChoice, computerChoice, "You win!");
                        endGame();
                        return;
            }

            case "paper":
                switch(computerChoice) {
                    case "scissors":
                        computerScore++;
                        printResult(humanChoice, computerChoice, "Computer wins!");
                        endGame();
                        return;
                
                    case "rock":
                        humanScore++;
                        printResult(humanChoice, computerChoice, "You win!");
                        endGame();
                        return;
            }

            default:
                switch(computerChoice) {
                    case "rock":
                        computerScore++;
                        printResult(humanChoice, computerChoice, "Computer wins!");
                        endGame();
                        return;
                
                    case "paper":
                        humanScore++;
                        printResult(humanChoice, computerChoice, "You win!");
                        endGame();
                        return;
            }
        }
    }
}

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

//playGame();