# 🚀 Day 08 — JavaScript Execution Context (GEC, FEC, Stack & Heap)

## 📚 Module 02 — Deep Dive into JavaScript Core

---

## 📌 Overview

Day 08 marks the beginning of **Module 02**, where I move beyond basic JavaScript and start understanding how JavaScript works internally.

In this project, I explored:

- 🌍 Global Execution Context (GEC)
- ⚙️ Function Execution Context (FEC)
- 🧠 Creation Phase (CP) & Execution Phase (EP)
- 📚 Call Stack (LIFO)
- 📦 Heap Memory

This is a **core foundation topic** that helps in understanding advanced concepts like closures, async JS, and debugging.

---

## 🧾 The Code

```javascript
const message = "I can do it";

function sum(a, b) {
  const result = a + b;
  return result;
}

function mul(a, b) {
  const result = a * b;
  return result;
}

function calc(a, b) {
  return (sum(a, b) + mul(a, b)) / 2;
}

function getResult(a, b) {
  return calc(a, b);
}

getResult(8, 5);
```

---

## 🌍 Global Execution Context (GEC)

### 🟡 Creation Phase (CP)

During this phase:

- Memory is allocated
- Variables are initialized with `undefined`
- Functions are stored in memory (Heap)

| Identifier | Value     |
| ---------- | --------- |
| message    | undefined |
| sum        | function  |
| mul        | function  |
| calc       | function  |
| getResult  | function  |

---

### 🟢 Execution Phase (EP)

- `message` is assigned → `"I can do it"`
- Function call begins → `getResult(8, 5)`

---

## ⚙️ Function Execution Context Flow

### 🔄 Execution Steps

```text
getResult(8,5)
   ↓
calc(8,5)
   ↓
sum(8,5) → 13
   ↓
mul(8,5) → 40
   ↓
(13 + 40) / 2 = 26.5
```

---

## 📚 Call Stack (LIFO)

> Last In → First Out

### 🧱 Stack Flow

```text
[ GEC ]
   ↓
[ getResult ]
   ↓
[ calc ]
   ↓
[ sum ] → pop
   ↓
[ mul ] → pop
   ↓
[ calc ] → pop
   ↓
[ getResult ] → pop
   ↓
[ GEC ]
```

---

## 📦 Heap Memory

Heap stores:

- Function objects
- Reference values

```text
Heap Memory:
- sum() {}
- mul() {}
- calc() {}
- getResult() {}
```

---

## 🖼️ Diagrams

### 🔥 GEC & FEC (Creation + Execution Phases)

![GEC_FEC](./GEC%20and%20FEC%20with%20CP%20and%20EP%20flow.JPG)

---

### 🧠 Stack & Heap Flow

![STACK_HEAP](./Stack%20and%20Heap%20Flow.JPG)

---

### 📚 Call Stack Visualization

![STACK](./Stack%20Diagram.JPG)

---

## 🎯 Final Output

```javascript
26.5;
```

---

## 💡 Key Learnings (Day 08)

✔ JavaScript runs in **two phases: Creation & Execution**
✔ Functions are **hoisted and stored in memory**
✔ Each function creates its own **Execution Context**
✔ The **Call Stack manages execution order (LIFO)**
✔ Memory is divided into **Stack & Heap**

---

## 🧠 Personal Insight

Understanding execution context completely changed how I think about JavaScript.

Now I can:

- Trace how functions run step-by-step
- Understand where variables live
- Debug code more effectively

---

## 🚀 Next Step

Moving forward in **Module 02**:

- DOM Manipulation 🌐
- Event Handling 🎯
- Interactive Projects 🔥

---

## 👨‍💻 Author (Inacio Campos aka Kiibay)

Future **7-figure developer** in progress 🚀
Day 08 complete ✅

---

<p align="center">
  ⭐ Keep going. Consistency beats everything.
</p>
