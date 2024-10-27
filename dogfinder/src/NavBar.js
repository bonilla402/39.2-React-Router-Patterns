// src/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar({ dogs }) {
    return (
        <nav className="navbar">
            <h2>Dog Finder</h2>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.name}>
                        <NavLink
                            to={`/dogs/${dog.name}`}
                            className={({ isActive }) => isActive ? "active-link" : undefined}
                        >
                            {dog.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            {/* Link to the main dogs page, styled as a button */}
            <NavLink
                to="/dogs"
                className={({ isActive }) => isActive ? "all-dogs-link active-link" : "all-dogs-link"}
            >
                See All Dogs
            </NavLink>
        </nav>
    );
}

export default NavBar;
