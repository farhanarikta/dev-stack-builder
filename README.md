# 🧱 Dev Stack Builder

A modern and responsive web application that helps developers explore different technologies and build their own personalized technology stack.

Users can browse technologies, check their category, difficulty, rating, and description, and add their preferred technologies to their personal stack.

## 🚀 Technologies Used

* React.js
* JavaScript (ES6+)
* Tailwind CSS
* React-Toastify
* JSON
* Vite

## ✨ Features

* 🔍 **Explore Technologies** — Browse different frontend, backend, database, styling, language, DevOps, and tool technologies.
* 🧰 **Build Your Own Stack** — Add technologies to a personalized stack and remove them whenever needed.
* 🔔 **Interactive Notifications** — Get toast notifications when technologies are added, removed, or when duplicate actions are attempted.

## 📱 Responsive Design

The website is designed to work across desktop, tablet, and mobile screen sizes.

## 📂 Project Structure

```text
src/
├── assets/
├── components/
├── data/
│   └── technologies.json
├── App.jsx
├── index.css
└── main.jsx
```

## 👩‍💻 Author

Rikta
## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make UI code easier to write, read, and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to store and update data. In this project, I used it to manage the selected technologies in the user's stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to load the technology data from the JSON file when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React understand which items were added, removed, or changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, I used it to show an empty-stack message when no technology has been selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send information back by calling a function that the parent passes to it through props.
