import React from "react";
import { NavLink } from "react-router-dom";
import "./Color.css";

const Color = ({ color }) => {
    return (
        <div className="color-page" style={{ backgroundColor: color.hex }}>
            <h1>THIS IS {color.name}</h1>
            <h2>ISN'T IT BEAUTIFUL?</h2>
            <NavLink to="/colors">
                <button className="go-back-button">GO BACK</button>
            </NavLink>
        </div>
    );
};

export default Color;
