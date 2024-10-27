import React from "react";
import { NavLink } from "react-router-dom";
import "./ColorList.css";

const ColorList = ({ colors }) => {
    return (
        <div className="color-list">
            <h1>Welcome to the Color Factory</h1>
            <NavLink to="/colors/new">
                <button className="add-color-button">Add a Color</button>
            </NavLink>
            <p>Please select a color:</p>
            <ul>
                {colors.map((color) => (
                    <li key={color.name}>
                        <NavLink to={`/colors/${color.name}`} className="color-link">
                            {color.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ColorList;
