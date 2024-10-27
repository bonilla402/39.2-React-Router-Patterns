import './App.css';
import dogData from './dogData';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import DogList from './DogList';
import NavBar from './NavBar';
import Dog from "./Dog";

// Wrapper component to find the dog based on the URL parameter and pass it to Dog
function DogWrapper() {
    const { name } = useParams();
    const dog = dogData.find(dog => dog.name.toLowerCase() === name.toLowerCase());
    return <Dog dog={dog} />;
}

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar dogs={dogData} />
                <Routes>
                    <Route path="/dogs" element={<DogList dogs={dogData} />} />
                    <Route path="/dogs/:name" element={<DogWrapper />} />
                    <Route path="*" element={<Navigate to="/dogs" replace />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

App.defaultProps = {
    dogs: dogData
};

export default App;
