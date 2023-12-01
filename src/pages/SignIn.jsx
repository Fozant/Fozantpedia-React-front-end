import React, { useState } from "react";
import axios from 'axios';
import './SignIn.css';
import Alert from "../components/Alert";
import logofozant from "../assets/logofozant.png";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    // function handleSubmit() {
    //     axios.post('http://localhost:8081/login', { email, password })
    //         .then(res => {
    //             if (res.data.length !== 0) {
    //                 // Successful login, handle any necessary actions here
    //                 // (e.g., set state, show messages, etc.)
    //             } else {
    //                 setShow(true);
    //             }
    //         })
    //         .catch(err => console.log(err));
    // }

    return (
        <div className="container">
            <h1></h1>
            <div className="login-container">
                <div>
                    <img className="logoDiego" src={logofozant} alt="Logo" />
                </div>
                <h2></h2>
                {(show) ? <Alert pesan={"email atau password salah"} /> : <div></div>}
                <div className="input-group">
                    <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
                    <i className="fas fa-user"></i>
                </div>
                <div className="input-group">
                    <input className="login-password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                    <i className="fas fa-lock"></i>
                </div>
                <button className="loginButton" onClick={() => window.location.href = '/home'}>Masuk</button>

                <p className="login-toRegister">Belum memiliki akun? <a href="/register" id="signup-link">Daftar</a></p>
            </div>
        </div>
    );
}

export default Login;
