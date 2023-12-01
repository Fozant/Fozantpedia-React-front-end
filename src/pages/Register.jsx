import React, { useState } from "react";
import './Register.css';
import './SignIn.css';
import logofozant from "../assets/logofozant.png";
import bg from "../assets/bg.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

function Register() {
    const navigate = useNavigate();
    
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [alertPesan, setAlertPesan] = useState('');
    const [alertShow, setAlertShow] = useState(false);

    function handleSubmit(event) {
        event.preventDefault(); 

        console.log("Submit button clicked"); // Check if this log appears in the console
        performActions();
    }
    
    function performActions() {
        console.log("Performing actions..."); 
        if (password !== rePassword) {
            setAlertPesan('Password tidak sama');
            setAlertShow(true);
        } else {
            axios.post('http://localhost:8081/registration', {
                lastName: lastName,
                firstName: firstName,
                email: email,
                password: password
            })
            .then(res => {
                if (res.status === 200) {
                    console.log("Berhasil register di front end");
                    navigate('/');
                } else {
                    // Handle other cases if needed
                }
            })
            .catch(err => {
                console.error('Error during registration:', err);
            });
        }
    }
    

    return (
        <div className="register register-main-container">
            <div className="register-container-2">
                <div className="register-slogan">
                    <p>Segera Daftar dan Tumbuhlah Bersama Kami!</p>
                </div>
            </div>

            <div className="register-container">
                <div>
                    <img className="register-logo-diego" src={logofozant} alt="Logo" />
                </div>
                <div className="w-[20rem] items-center ml-[15.5rem]">
                    {alertShow && <Alert pesan={alertPesan} />}
                </div>
                <form id="register-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" placeholder="first_name" name="first_name" onChange={e => setFirstName(e.target.value)} required />
                        <i className="icon fas fa-user"></i>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="last_name" name="last_name" onChange={e => setLastName(e.target.value)} required />
                        <i className="icon fas fa-user"></i>
                    </div>
                   
                    <div className="input-group">
                        <input type="email" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} required />
                        <i className="icon fa-solid fa-envelope"></i>
                    </div>
                    <div className="input-group">
                        <input className="registerPassword" type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} required />
                        <i className="icon fas fa-lock"></i>
                    </div>
                    <div className="input-group">
                        <input className="registerPassword" type="password" placeholder="Konfirmasi Password" name="re-password" onChange={e => setRePassword(e.target.value)} required />
                        <i className="icon fas fa-lock"></i>
                    </div>
                    <div className="register-group">
                        <button className="registerButton" type="submit">Daftar</button>
                        <p className="register-tologin" >Sudah Mempunyai akun? <a href="/" id="login-link">Masuk</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
