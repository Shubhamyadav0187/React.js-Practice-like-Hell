# Here are the most important React.js interview and practice questions generated from everything I've learned from **Day 1 to Day 9**, along with detailed answers:

---

# ✅ React.js Question Bank (Day 1 - Day 9)

## 🟦 Day 1: JSX & Components

1. **What is JSX? How is it different from HTML?**  
JSX (JavaScript XML) is a syntax extension that allows writing HTML-like code in JavaScript. Unlike HTML, JSX uses `className` instead of `class`, and expressions are written inside `{}`.

2. **Can a component return more than one element?**  
Yes, by wrapping elements inside a parent element like `<div>` or using `<React.Fragment>` / `<>`.

3. **What is the difference between functional and class components?**  
Class components use ES6 classes and can use lifecycle methods. Functional components are simpler and can use hooks for state and side effects.

4. **Why should component names be capitalized in React?**  
Because React treats lowercase names as native HTML tags. Capitalized names are treated as custom components.

5. **What is the use of fragments (`<></>`) in JSX?**  
Fragments let you return multiple elements without adding extra nodes to the DOM.

---

## 🟦 Day 2: Props & Passing Data

6. **What are props in React? How do they work?**  
Props (short for properties) are read-only data passed from parent to child components via attributes.

7. **Can you modify props in a child component?**  
No. Props are immutable and should not be modified by the child component.

8. **How do you pass data from parent to child?**  
Via props: `<Child name="Shubham" />`

9. **What is `children` prop?**  
`children` is a special prop used to pass content between the opening and closing tags of a component.

10. **Can you pass both `children` and normal props together?**  
Yes. Example: `<Card title="Info">This is content</Card>`

11. **How do you pass an object or array as a prop?**  
By using curly braces: `<User data={{ name: 'John', age: 20 }} />`

---

## 🟦 Day 3: useState Hook

12. **What is `useState`? How does it work?**  
`useState` is a React hook that lets you add local state to functional components. It returns an array: `[state, setState]`.

13. **Can we store objects and arrays in state?**  
Yes. Example: `useState({ name: '', age: 0 })` or `useState([])`

14. **How do you update a specific property in an object stored in state?**  
Use the spread operator: `setState(prev => ({ ...prev, key: newValue }))`

15. **What's the difference between updating state using `...prevState` and replacing it directly?**  
Using `...prevState` preserves other properties. Replacing it directly may remove them.

---

## 🟦 Day 4: Handling Forms

16. **What is the difference between controlled and uncontrolled components?**  
Controlled components use state to manage inputs. Uncontrolled components use `ref` to access DOM values.

17. **What does `e.preventDefault()` do?**  
It prevents the default form submission and page reload behavior.

18. **How do you manage multiple form fields using one state object?**  
By using `name` attribute and updating the field using computed properties: `setForm({ ...form, [e.target.name]: e.target.value })`

19. **How does `nameRef.current.value` work?**  
`nameRef.current` gives the input DOM node. `.value` accesses its current value.

---

## 🟦 Day 5: Lists, Keys, and Conditional Rendering

20. **What is the role of `key` prop in lists?**  
It helps React identify which items have changed, are added, or removed.

21. **Why shouldn't we use array index as key?**  
It can cause issues during reordering and may lead to unexpected behavior.

22. **How do you render conditional content in React?**  
Using `if`, ternary operators, or logical `&&`. Example: `{isLoggedIn && <LogoutButton />}`

23. **Difference between `if`, ternary operator, and `&&` for conditionals?**  
- `if`: used outside JSX
- `?:`: inside JSX to render one of two values
- `&&`: inside JSX to render something conditionally

---

## 🟦 Day 6: useRef Hook & Forms

24. **What is `useRef`? What can it be used for?**  
A hook that returns a mutable ref object. Useful for accessing DOM nodes or persisting values.

25. **How does `useRef` differ from `useState`?**  
`useRef` doesn't trigger re-render on update; `useState` does.

26. **How do you access the DOM using `useRef`?**  
Assign the ref to an element: `<input ref={inputRef} />`, then access via `inputRef.current`

27. **When would you prefer uncontrolled components?**  
When quick form access is needed without state management (e.g., simple forms or integration with libraries).

---

## 🟦 Day 7: Performance Optimization

28. **What is `React.memo` and when should you use it?**  
A HOC that memoizes functional components to prevent unnecessary re-renders if props don’t change.

29. **How does `useMemo` work? What problem does it solve?**  
It memoizes a calculated value to avoid recalculating on every render unless dependencies change.

30. **When should you use `useCallback`?**  
When passing functions to child components to avoid re-creating functions unnecessarily.

31. **Compare `useMemo` vs `useCallback`.**  
- `useMemo`: returns a memoized value
- `useCallback`: returns a memoized function

32. **How does lazy loading with `React.lazy` and `Suspense` improve performance?**  
It splits code into chunks and loads components only when needed, reducing initial load time.

---

## 🟦 Day 8: React Router v6

33. **What is React Router?**  
A library that enables routing in React apps without page reloads.

34. **What is the difference between `Link` and `a` tag?**  
`Link` uses client-side routing; `a` causes full-page reload.

35. **What is the purpose of `<Routes>` and `<Route>`?**  
Defines and maps different paths to components.

36. **How do you navigate programmatically in React?**  
Using `useNavigate()`. Example: `navigate('/home')`

37. **How do you access dynamic URL parameters?**  
With `useParams()` hook. Example: `const { id } = useParams();`

38. **What is the role of `<Outlet />` in nested routes?**  
It renders child routes inside parent route layouts.

39. **How do you handle 404 routes in React Router?**  
Using `<Route path="*" element={<NotFound />} />`

---

## 🟦 Day 9: Context API

40. **What problem does Context API solve?**  
It avoids prop drilling by allowing global state sharing.

41. **What is `createContext()` and how is it used?**  
Creates a context object to be shared via Provider.

42. **How do you consume context using `useContext()`?**  
Call `useContext(MyContext)` inside any component to access the context value.

43. **How do you share and update global state with context?**  
Wrap your app in `Provider` and pass down `state` and `setState` using `useState()`.

44. **Difference between props, context, and state?**  
- `props`: parent-to-child data
- `state`: local to component
- `context`: global state for any component

45. **When should you use Context vs Redux?**  
Use Context for small apps/global values (theme, auth). Use Redux for complex state logic or large-scale apps.

---

Let me know if you'd like:
- Flashcards for quick revision
- A printable PDF version
- Practice test with MCQs

