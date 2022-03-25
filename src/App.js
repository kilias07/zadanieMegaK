import './App.css';
import {useState} from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";


function App() {

    const [showRegister, setShowRegister] = useState(false);
    const changeLayout = () => setShowRegister((prev) => !prev);

    return (
        <>
            {showRegister ? <Register changeLayout={changeLayout}/> : <Login changeLayout={changeLayout}/>}
        </>
    );
}

export default App;
