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

console.log(getComputerChoice());