import React, { useState } from 'react';
import Header from '../../componets/Header/Header';
import Footer from '../../componets/Footer/Footer';
import './Register.scss';
import CustomInput from '../../componets/CustomInput/CustomInput';
import CustomButton from '../../componets/CustomButton/CustomButton';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <Header />
      <main className='main-register'>
        <div className='main-register__div-container'>
          <h2>CADASTRE-SE</h2>
          <div className='main-register__div-container__inputs'>
            <CustomInput
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              borderRadius="8px"
              fontSize="14px"
              color="#333"
              border="1px solid #ddd"
              required
            />
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
              type="email"
              placeholder="Confirmar Email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              borderRadius="8px"
              fontSize="14px"
              color="#333"
              border="1px solid #ddd"
              required
            />
            <CustomInput
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              borderRadius="8px"
              fontSize="14px"
              color="#333"
              border="1px solid #ddd"
              required
            />
            <CustomInput
              type="password"
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              borderRadius="8px"
              fontSize="14px"
              color="#333"
              border="1px solid #ddd"
              required
            />
          </div>
          
          <div className='main-register__div-container__buttons'>
            <CustomButton
              label="CADASTRAR"
              fontSize="1.5rem"
              backColor='#10375C'
              color="#fff"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Register;
