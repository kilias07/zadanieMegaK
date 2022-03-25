import React, {useState} from 'react';
import Warming from "./Warming";

const Register = ({changeLayout}) => {
    const [registerData, setRegisterData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const [showWarms, setShowWarms] = useState({
        name: null,
        surname: null,
        email: null,
        password: null,
        passwordConfirm: null,
    });

    const onChange = (e) => {

        //update state
        setRegisterData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

        //validation name & surname
        if ((e.target.name === 'name' || e.target.name === 'surname') && e.target.value.length < 4) {
            setShowWarms(prev => ({
                ...prev,
                [e.target.name]: "name must have at least 4 characters",
            }));
        }

        //validation email
        else if (e.target.name === 'email' && !(e.target.value).includes('@')) {
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

        //validation passwordConfirm
        else if (e.target.name === 'passwordConfirm' && e.target.value !== registerData.password) {
            setShowWarms(prev => ({
                ...prev,
                [e.target.name]: "passwords should be the same",
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

    const SignUp = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div>
                <button onClick={changeLayout}>Logowanie</button>
            </div>
            <h1>Formularz Rejestracji</h1>
            <form onSubmit={SignUp}>

                <div>
                    <label> Name
                        <input type="text" value={registerData.name} onChange={onChange} name="name"/>
                    </label>
                    {showWarms.name && <Warming warms={showWarms.name}/>}
                </div>

                <div>
                    <label> Surname
                        <input type="text" value={registerData.surname} onChange={onChange} name="surname"/>
                    </label>
                    {showWarms.surname && <Warming warms={showWarms.surname}/>}
                </div>

                <div>
                    <label> Email
                        <input type="text" value={registerData.email} onChange={onChange} name="email"/>
                    </label>
                    {showWarms.email && <Warming warms={showWarms.email}/>}
                </div>
                <div>
                    <label> Hasło
                        <input type="text" value={registerData.password} onChange={onChange} name="password"/>
                    </label>
                    {showWarms.password && <Warming warms={showWarms.password}/>}

                </div>
                <div>
                    <label> Potwierdź hasło
                        <input type="text" value={registerData.passwordConfirm} onChange={onChange}
                               name="passwordConfirm"/>
                    </label>
                    {showWarms.passwordConfirm && <Warming warms={showWarms.passwordConfirm}/>}

                </div>
                <button type="submit">Zatwierdź</button>
            </form>
        </>
    );
};

export default Register;
