import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddColor.css";

const AddColor = ({ setColorsData }) => {
    const [formData, setFormData] = useState({ name: "", hex: "#000000" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setColorsData(prevColors => [...prevColors, formData]);
        navigate("/colors");
    };

    return (
        <div className="add-color-form">
            <h1>Add a New Color</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Color name
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter a name for the color"
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Color value
                        <input
                            type="color"
                            name="hex"
                            value={formData.hex}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Add this color</button>
            </form>
        </div>
    );
};

export default AddColor;
