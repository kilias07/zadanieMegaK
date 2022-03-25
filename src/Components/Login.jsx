import React, {useState} from 'react';
import Warming from "./Warming";

const Login = ({changeLayout}) => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [showWarms, setShowWarms] = useState({
        email: null,
        password: null,
    });


    const onChange = (e) => {

        //update state
        setLoginData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

        //validation email
        if (e.target.name === 'email' && !(e.target.value).includes('@')) {
            setShowWarms(prev => ({
                ...prev,
                [e.target.name]: "invalid email address",
            }));
        }

        //validation password
        else if (e.target.name === 'password' && e.target.value.length <= 8) {
            setShowWarms(prev => ({
                ...prev,
                [e.target.name]: "password must be at least 8 characters",
            }));
        }

        //reset value
        else {
            setShowWarms(prev => ({
                ...prev,
                [e.target.name]: null
            }));
        }


    }
    const Login = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div>
                <button onClick={changeLayout}>Rejestracja</button>
            </div>
            <h1>Formularz Logowania</h1>
            <form>
                <div>
                    <label> Email
                        <input type="text" value={loginData.email} name="email" onChange={onChange}/>
                    </label>
                    {showWarms.email && <Warming warms={showWarms.email}/>}
                </div>
                <div>
                    <label> Hasło
                        <input type="text" value={loginData.password} name="password" onChange={onChange}/>
                    </label>
                    {showWarms.password && <Warming warms={showWarms.password}/>}
                </div>
            </form>
        </>

    );
};

export default Login;
