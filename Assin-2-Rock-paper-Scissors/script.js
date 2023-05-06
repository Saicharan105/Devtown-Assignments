const rpsOptions = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => Math.floor(Math.random() * 3);

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const playerScoreContainer = document.querySelector("#userScore");

const computerScoreContainer = document.querySelector("#compScore");

const messageContainer = document.querySelector("#plain-text");

const autoPlayContainer = document.querySelector("#auto-play");

let playerScore = 0,
    computerScore = 0;

rock.addEventListener("click", () => game(0));
paper.addEventListener("click", () => game(1));
scissor.addEventListener("click", () => game(2));

autoPlayContainer.addEventListener("click", autoPlay);
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = getComputerChoice();
            game(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

const game = (rpsOption) => {
    const computerResponse = getComputerChoice();
    switch (rpsOption) {
        case 0:
            switch (computerResponse) {
                case 0:
                    messageContainer.innerHTML = "It's a Tie.";
                    break;

                case 1:
                    computerScore++;
                    computerScoreContainer.innerHTML = computerScore;
                    messageContainer.innerHTML = `${rpsOptions[computerResponse]} beats ${rpsOptions[rpsOption]} , computer Wins!`;
                    rock.classList.add("loose");
                    setTimeout(() => {
                        rock.classList.remove("loose");
                    }, 1000);
                    break;

                case 2:
                    playerScore++;
                    playerScoreContainer.innerHTML = playerScore;
                    messageContainer.innerHTML = `${rpsOptions[rpsOption]} beats ${rpsOptions[computerResponse]} , You Win!`;
                    rock.classList.add("win");
                    setTimeout(() => {
                        rock.classList.remove("win");
                    }, 1000);
                    break;

                default:
                    break;
            }
            break;

        case 1:
            switch (computerResponse) {
                case 0:
                    playerScore++;
                    playerScoreContainer.innerHTML = playerScore;
                    messageContainer.innerHTML = `${rpsOptions[rpsOption]} beats ${rpsOptions[computerResponse]} , You Win!`;
                    paper.classList.add("win");
                    setTimeout(() => {
                        paper.classList.remove("win");
                    }, 1000);
                    break;

                case 1:
                    messageContainer.innerHTML = "It's a Tie.";
                    break;

                case 2:
                    computerScore++;
                    computerScoreContainer.innerHTML = computerScore;
                    messageContainer.innerHTML = `${rpsOptions[computerResponse]} beats ${rpsOptions[rpsOption]} , computer Wins!`;
                    paper.classList.add("loose");
                    setTimeout(() => {
                        paper.classList.remove("loose");
                    }, 1000);
                    break;
                default:
                    break;
            }
            break;

        case 2:
            switch (computerResponse) {
                case 0:
                    computerScore++;
                    computerScoreContainer.innerHTML = computerScore;
                    messageContainer.innerHTML = `${rpsOptions[computerResponse]} beats ${rpsOptions[rpsOption]} , computer Wins!`;
                    scissor.classList.add("loose");
                    setTimeout(() => {
                        scissor.classList.remove("loose");
                    }, 1000);
                    break;

                case 1:
                    playerScore++;
                    playerScoreContainer.innerHTML = playerScore;
                    messageContainer.innerHTML = `${rpsOptions[rpsOption]} beats ${rpsOptions[computerResponse]} , You Win!`;
                    scissor.classList.add("win");
                    setTimeout(() => {
                        scissor.classList.remove("win");
                    }, 1000);
                    break;

                case 2:
                    messageContainer.innerHTML = "It's a Tie.";
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
};
