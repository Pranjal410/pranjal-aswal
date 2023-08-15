import "./App.styled.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/index.jsx";

//FONTS
import "../src/styles/font.css";
import { AppStyled } from "./App.styled.jsx";

function App() {
    return (
        <AppStyled>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
            </Routes>
        </AppStyled>
    );
}

export default App;
