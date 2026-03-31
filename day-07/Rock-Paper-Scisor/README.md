# 🪨 Rock Paper Scissors Game (JavaScript)

📌 Overview

This is a simple **Rock Paper Scissors** game built using JavaScript.
The game runs in the browser using `prompt()` and `console.log()` for interaction.

It allows a user to play against the computer with score tracking and replay functionality.

---

## 🚀 Features

- 🎮 Play Rock, Paper, Scissors against the computer
- 🔁 Replay the game multiple times
- 🧠 Random computer choice generation
- 📊 Score tracking (User vs Computer)
- ⚠️ Input validation for better user experience

---

## 🛠️ Technologies Used

- JavaScript (Vanilla JS)
- Browser APIs (`prompt`, `alert`, `console`)

---

## 📂 How It Works

1. The user is prompted to enter:
   - `rock`, `paper`, or `scissors`

2. The computer randomly selects one of the three options
3. The game compares both choices:
   - Rock beats Scissors
   - Paper beats Rock
   - Scissors beats Paper

4. The result is displayed in the console
5. Scores are updated accordingly
6. The user is asked if they want to play again

---

## 🧩 Game Logic

- Input is validated using a loop
- Choices are normalized using `.toLowerCase()`
- Random selection is generated using `Math.random()`
- Conditions determine the winner of each round

---

## ▶️ How to Run

1. Open your browser
2. Open Developer Tools (`F12`)
3. Paste the JavaScript code into the console
4. Press Enter
5. Follow the prompts

---

## ⚠️ Limitations

- No graphical user interface (console-based)
- Uses blocking prompts (`prompt`, `alert`)
- Not suitable for production apps

---

## 🔮 Future Improvements

- Add a graphical UI (buttons instead of prompts)
- Add animations and sound effects
- Store scores using localStorage
- Convert to a web app using HTML/CSS

---

Built as part of a JavaScript learning journey.
