import { useState } from "react"
// import {useState}from 'react'

const LightDarkMode = () => {

    const [isDark, setIsDark] = useState(false)
    const toggleTheme = () => {
        setIsDark(!isDark)
    };

    const appStyle = {
        backgroundColor: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
        padding: "30px",
        minHeight: "100vh",
        transition: "all 0.3s",
    }
    return (
        <div style={appStyle}>
            <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
            <button onClick={toggleTheme}>
                Switch to {isDark ? "Light" : "Dark"} Mode
            </button>
        </div>
    )
}

export default LightDarkMode