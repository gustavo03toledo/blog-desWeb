
import React, { useState } from 'react';
import Header from '../../componets/header/Header'
import Footer from '../../componets/Footer/Footer'
import './Login.scss'
import CustomInput from '../../componets/CustomInput/CustomInput'
import CustomButton from '../../componets/CustomButton/CustomButton';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <>
    <Header />
    <main className='main-login'>

        <div className='main-login__div-container'>
            <h2>ENTRE</h2>
            <div className='main-login__div-container__inputs'>
            <CustomInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            borderRadius="8px"
            fontSize="14px"
            color="#333"
            border="1px solid #ddd"
            required
            />
            <CustomInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            borderRadius="8px"
            fontSize="14px"
            color="#333"
            border="1px solid #ddd"
            required
            />
            </div>
            <div className='main-login__div-container__buttons'>
                <CustomButton
                label="ENTRAR"
                fontSize="1.5rem"
                backColor='#10375C'
                
                />
                <Link to="/register">
                    <CustomButton
                    label="Cadastre-se"
                    fontSize='1.5rem'
                    color="#10375C"
                    />
                </Link>


            </div>

        </div>


    </main>

    <Footer/>
    
    </>
  )
}

export default Login