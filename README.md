# React.js-Practice-like-Hell

# Day 1: Introduction to React.js + Setup

✅ What You’ll Learn:
-What is React.js?
-Why use React instead of plain HTML/CSS/JS?
-How to set up your first React project (using Vite  or Create React App)
-JSX basics


📘 What is React.js?
React.js is a JavaScript library developed by Facebook for building user interfaces, especially for single-page applications (SPA). It's component-based, declarative, and fast.

⚙️ Setting up React App (Recommended: Vite)
1. Install Node.js from https://nodejs.org
2. Create a new project:


## React Components + Props

1. What are components in React
2. Difference between functional and class components
3. What are props
4. How to pass and receive props
5. Real example to build your first UI



# 🔹 1. What is a React Component?
A component in React is a reusable, independent piece of UI that behaves like a JavaScript function. It takes inputs (called props) and returns React elements (UI output). Components help split the UI into smaller, manageable parts which make development and maintenance easier.

function Button() {
  return <button>Click Me</button>;
}

🗣️ We can say:
“React promotes the component-based architecture. Everything is built using components — like header, footer, cards, etc. Each component focuses on one task and can be reused throughout the app.”


# ❓ 2. What are props in React?
Props (short for properties) are the way to pass data from a parent component to a child component in React. They are read-only, meaning the child component cannot change the props it receives — it can only use them to display or act based on data.

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

🗣️ We can say:
“Props make React components dynamic. Instead of hardcoding values, I can pass different props to the same component and reuse it with different data.”


# ❓ 3. Can a component modify its own props?
No, props are immutable. A component cannot change its own props. If a component needs to manage or update data, it should use state instead.

🗣️ You can say:
“Props are meant for data flow from parent to child. If a component tries to change props, React will throw an error. To manage internal data or changes, we use useState or other hooks.”

# ❓ 4. What's the difference between functional and class components?
“Functional components are JavaScript functions that return JSX. Earlier, only class components could manage state, but with hooks like useState and useEffect, functional components are now the standard. They're cleaner, more readable, and easier to test.”

# ❓ 5. Why should we use functional components over class components?
Functional components are simpler, require less boilerplate, and are easier to manage.
With hooks, they can handle all the things class components used to do 
— like state and side-effects — but with a more intuitive and concise syntax.