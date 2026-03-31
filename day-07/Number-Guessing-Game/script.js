const MAX = 100;
const CLOSE_RANGE = 10;
const getUserInput = () => {
  let userInput = Number(prompt(`Guess between 1 - ${MAX}`));

  while (isNaN(userInput) || userInput <= 0 || userInput > MAX) {
    alert(`Please enter a number between 1-${MAX}`);
    userInput = Number(prompt(`Guess between 1 - ${MAX}`));
  }

  return userInput;
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * MAX) + 1;
};

const getResult = (guess, target) => {
  const diff = guess - target;
  if (diff === 0) return "correct";
  if (diff > 0 && diff <= CLOSE_RANGE) return "close-high";
  if (diff < 0 && diff >= -CLOSE_RANGE) return "close-low";
  if (diff > 0) return "too-high";
  return "too-low";
};

const playGame = () => {
  let playAgain = "yes";

  while (playAgain === "yes") {
    const target = getRandomNumber();
    let guess;
    let attempts = 0;

    do {
      guess = getUserInput();
      attempts++;
      const result = getResult(guess, target);

      if (result === "correct") break;

      if (result === "close-high") {
        console.log("So close! A bit high");
      } else if (result === "close-low") {
        console.log("So close! A bit low");
      } else if (result === "too-high") {
        console.log("Too High!");
      } else if (result === "too-low") {
        console.log("Too Low!");
      }
    } while (guess !== target);

    console.log(`yey 🎉 You did it in (${attempts}) attempts`);

    const playAgainInput = prompt("Play again? yes/no");

    playAgain = playAgainInput ? playAgainInput?.toLowerCase().trim() : "no";
  }
};

playGame();
