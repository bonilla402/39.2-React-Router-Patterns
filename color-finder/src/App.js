import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import AddColor from "./AddColor";
import './App.css';

const App = () => {
    const [colorsData, setColorsData] = useState([
        { name: "red", hex: "#FF0000" },
        { name: "green", hex: "#00FF00" },
        { name: "blue", hex: "#0000FF" }
    ]);

    function ColorWrapper() {
        const { name } = useParams();
        const color = colorsData.find(color => color.name.toLowerCase() === name.toLowerCase());
        return color ? <Color color={color} /> : <p>Color not found</p>;
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/colors" element={<ColorList colors={colorsData} />} />
                    <Route path="/colors/new" element={<AddColor setColorsData={setColorsData} />} />
                    <Route path="/colors/:name" element={<ColorWrapper />} />
                    <Route path="*" element={<Navigate to="/colors" replace />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
