import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './SignIn.css';
import Alert from "../components/Alert";
import logofozant from "../assets/logofozant.png";

export let namaLengkap = "";
export let NamaBisnis = "";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginData, setLoginData] = useState([]);
    const [show, setShow] = useState(false);


    function handleSubmit() {

            axios.post('http://localhost:8081/login', { email, password })
                .then(res => {
                    console.log(res.data)
                    console.log(res.data.length);
                    setLoginData(res.data)
                    
                    console.log("INI PANJANG " + loginData.length);
                    console.log("ini isi " + loginData);
                    console.log(res.status);

                   

                    if (res.data.length != 0) {
                        namaLengkap = res.data[0].NamaLengkap;
                        NamaBisnis = res.data[0].NamaBisnis;
                        console.log(namaLengkap);
                        console.log(NamaBisnis);
                        navigate('/home');
                    } else {
                        
                        console.log("HALO INI SALAH");
                        setShow(true);
                    }
                   
                })
                .catch(err => console.log(err));

     


    }





    return (
        <div className="container">
            <h1></h1>
            <div className="login-container">
                <div>
                    <img className="logoDiego" src={logofozant} alt="Logo" />
                </div>
                <h2></h2>
                {/* <form id="login-form"> */}
                {(show) ? <Alert pesan={"email atau password salah"} /> : <div></div>
                }
                <div className="input-group">
                    <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
                    <i className="fas fa-user"></i>
                </div>
                <div className="input-group">
                    <input className="login-password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                    <i className="fas fa-lock"></i>
                </div>
                <button className="loginButton" onClick={() => {
                    handleSubmit()
                }}>Masuk</button>
                {/* </form> */}
                <p className="login-toRegister">Belum memiliki akun? <a href="/register" id="signup-link">Daftar</a></p>
            </div>
        </div>
    );
}

export default Login;