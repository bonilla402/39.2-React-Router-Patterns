// src/DogList.js
import React from 'react';
import './DogList.css';
import { NavLink } from 'react-router-dom';

function DogList({ dogs }) {
    return (
        <div className="dog-list-container">
            <h1 className="dog-list-title">Meet Our Pawesome Friends!</h1>
            <div className="dog-list">
                {dogs.map(dog => (
                    <NavLink to={`/dogs/${dog.name}`} className="dog-link" key={dog.name}>
                        <div className="dog-card">
                            <img src={dog.src} alt={dog.name} className="dog-photo"/>
                            <h3>{dog.name}</h3>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default DogList;
