import React, {useState} from 'react';
import '../styles/Session.scss';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [user, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/login',{user,password})
        .then(res => {
            console.log(res)
            if(res.data.Login) {
                navigate('/')
            } else {
                alert("Error")
            }
        })
        .catch(err => console.log(err));
    }
    return (
        <div className="login">
            <div className="form-container">
            <center><h2>Iniciar Sesión</h2></center>

            <form action="/" className="form" onSubmit={handleSubmit}>
                <label for="email" className="label">Usuario</label>
                <input type="text" name="email" id="user" className="input input-email" onChange={e => setEmail(e.target.value)}/>

                <label for="password" className="label">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="*********" className="input input-password" onChange={e => setPassword(e.target.value)}/>

                <button type="submit" className="primary-button login-button" onClick={handleSubmit}> 
                    Iniciar Sesión
                </button>
                {/* <a href="/">¿Olvidaste tu contraseña?</a> */}
            </form>

            {/* <button className="secondary-button signup-button">Registrate</button> */}
            </div>
        </div>
    );
}

export default Login;