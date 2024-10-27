// src/Dog.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dog.css';

function Dog({ dog }) {
    if (!dog) {
        return <h2 className="dog-not-found">Dog not found!</h2>;
    }

    return (
        <div className="dog-card">
            <h2 className="dog-name">{dog.name}</h2>
            <div className="dog-content">
                <img src={dog.src} alt={dog.name} className="dog-photo" />
                <ul className="dog-facts">
                    {dog.facts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                    ))}
                </ul>
            </div>
            <NavLink to="/dogs" className="go-back-button">
                Go Back
            </NavLink>
        </div>
    );
}

export default Dog;
