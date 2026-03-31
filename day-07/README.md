# 🚀 Day 07 JavaScript Projects

This repository contains my **Day 07 JavaScript projects**, focusing on interactive browser games. These projects helped me practice **functions, loops, conditional logic, user input validation, and game design**.

---

## 🕹️ Project 1: Rock-Paper-Scissors Game

A classic **Rock-Paper-Scissors** game built using JavaScript.

### Features

- Player vs computer gameplay
- Input validation (accepts only `"rock"`, `"paper"`, or `"scissors"`)
- Determination of winner for each round
- Replay option to play multiple rounds

### How It Works

1. The player enters a choice (rock, paper, or scissors) via `prompt()`.
2. The computer randomly chooses a move.
3. The winner is determined based on standard rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
4. The game announces the result in the console.
5. Optionally, the player can play again.

### What I Learned

- Input validation and loops
- Random number generation for computer moves
- Function decomposition for cleaner code
- Conditional logic for game rules

---

## 🧮 Project 2: Number Guessing Game

An interactive **number guessing game** where the player must guess a randomly generated number within a defined range.

### Features

- Random number between 1 and 100
- Input validation for numeric values
- Feedback for each guess:
  - Too high
  - Too low
  - So close! (within a defined close range)
- Tracks number of attempts
- Replay option

### How It Works

1. The game generates a random number at the start of each round.
2. The player inputs a guess via `prompt()`.
3. The game gives feedback based on the difference between the guess and the target number:
   - `correct` → player wins
   - `close-high` → slightly above target
   - `close-low` → slightly below target
   - `too-high` / `too-low` → far from target
4. The game continues until the correct number is guessed.
5. After the round, the player can choose to play again.

### What I Learned

- Loop and function-based game design
- Using constants (`MAX`, `CLOSE_RANGE`) for scalability
- Clean conditional logic using helper functions (`getResult()`)
- Tracking attempts and giving meaningful feedback
- Avoiding recursion in favor of `while` loops

---

## 🛠️ Technologies Used

- Vanilla JavaScript
- Browser environment (`prompt()`, `alert()`, `console.log()`)

---

## 🔮 Next Steps (for my future practice)

- Convert both games to **DOM-based interactive games**
- Improve UX with buttons, animations, and live feedback
- Add difficulty levels, scoring, and attempt limits
- Package as portfolio-ready projects

---

## 📚 Summary of Day 07 Learnings

1. **Function decomposition:** Breaking code into smaller, reusable functions
2. **Input validation:** Ensuring user inputs are valid and safe
3. **Game loop design:** Using loops to manage gameplay instead of recursion
4. **Conditional logic:** Using clear, readable conditions to handle game rules
5. **Constants vs variables:** Using `const` for fixed values and `let` for changing ones

---

## 🎉 Inacio Campos aka Kiibay

This is part of my **JavaScript learning journey**, Day 07 projects.  
Building small interactive games to strengthen core JS skills and prepare for DOM-based applications.
