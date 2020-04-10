import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode";

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <div className="navBar">
            
            <h1>Gabby's Advanced React Sprint Challenge</h1>

            <button
            data-testid="darkModeBtn"
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}>
                 Toggle Dark Mode 
            </button>
        </div>
    )
}

export default NavBar;