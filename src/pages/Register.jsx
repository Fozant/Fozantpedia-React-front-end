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
    const [namaLengkap, setNamaLengkap] = useState('');
    const [namaBisnis, setNamaBisnis] = useState('');
    const [email, setEmail] = useState('');
    const [noTelpon, setNoTelpon] = useState('');
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

            axios.post('http://localhost:8080/registration', { namaLengkap: namaLengkap, namaBisnis: namaBisnis, 
                                                             email: email, password: password, noTelpon: noTelpon })
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
                        <input type="text" placeholder="Nama Lengkap" name="namaLengkap" onChange={e => setNamaLengkap(e.target.value)} required />
                        <i className="icon fas fa-user"></i>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Nama Bisnis" name="namaBisnis" onChange={e => setNamaBisnis(e.target.value)} required />
                        <i className="icon fas fa-user"></i>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Nomor Telepon" name="noTelpon" onChange={e => setNoTelpon(e.target.value)} required />
                        <i className="icon fa-solid fa-phone"></i>
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