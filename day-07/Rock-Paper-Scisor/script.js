let userScore = 0;
let computerScore = 0;
function rockPaperScissorsGame() {
  let userInput = prompt("Choose Rock, Paper of Scissors: ");
  userInput = userInput?.toLowerCase();
  while (
    !userInput ||
    (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors")
  ) {
    alert("Please enter Rock, Paper or Scissors");
    userInput = prompt("Choose Rock, Paper or Scissors: ");
    userInput = userInput?.toLowerCase();
  }

  let userChoice = userInput;

  let computerChoice;
  const randomChoice = Math.floor(Math.random() * 3) + 1;

  switch (randomChoice) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  console.log("User : " + userChoice);
  console.log("Computer: " + computerChoice);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("User WIN 🎉");
    userScore++;
  } else if (userChoice === computerChoice) {
    console.log("Its a TIE!");
  } else {
    console.log("Computer WIN 😥");
    computerScore++;
  }

  console.log(`Score -> User: ${userScore} | Computer: ${computerScore}`);
  const tryAgainInput = prompt("Play Again? yes/no");

  const tryAgain = tryAgainInput ? tryAgainInput.toLowerCase().trim() : "no";

  if (tryAgain === "yes" || tryAgain === "y") {
    rockPaperScissorsGame();
  } else {
    console.log("FINAL SCORE");
    console.log(`You: ${userScore} || Computer: ${computerScore}`);
    console.log("Thanks For Playing!");
  }
}

rockPaperScissorsGame();
