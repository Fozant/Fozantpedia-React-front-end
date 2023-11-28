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
    
    const [last_name, setLast_name ]= useState('');
    const [first_name, setFirst_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [alertPesan, setAlertPesan] = useState('');
    const [registerData, setRegisterData] = useState([]);
    const [alertShow, setAlertShow] = useState(false);

    function handleSubmit(event) {

        if (password !== rePassword) {
            setAlertPesan('password tidak sama')
            setAlertShow(true);
            event.preventDefault();
        } else {

            axios.post('http://localhost:8081/registration', { last_name: last_name, first_name: first_name, 
                                                             email: email, password: password})
                .then(res => {


                    if (res.status == 200) {
                        console.log("Berhasil register di front end");
                        navigate('/login');
                    } else {
                      
                    }
                  
                })
                .catch(err => console.log(err));
        }

    }

    return (
        <div className="register register-main-container">

            <div className="register-container-2">
                <div className="register-slogan">
                    <p>
                        Segera Daftar dan Tumbuhlah Bersama Kami!
                    </p>
                </div>
            </div>

            <div className="register-container">
              
                <div>
                    <img className="register-logo-diego" src={logofozant} alt="Logo" />
                </div>
                <div className="w-[20rem] items-center ml-[15.5rem]">
                    {(alertShow) ? <Alert pesan={alertPesan} /> : <></>}
                </div>
                <form id="register-form">

                    <div className="input-group">
                        <input type="text" placeholder="Nama Lengkap" name="last_name" onChange={e => setLast_name(e.target.value)} required />
                        <i className="icon fas fa-user"></i>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Nama Bisnis" name="first_name" onChange={e => setFirst_name(e.target.value)} required />
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
                        <button className="registerButton" onClick={() => {
                            handleSubmit()
                        }} type="submit">Daftar</button>
                        <p className="register-tologin" >Sudah Mempunyai akun? <a href="/login" id="login-link">Masuk</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;