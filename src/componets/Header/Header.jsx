import React from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import './Header.scss';
import logoBlog from "../../img/logoBlog.svg";

const Header = () => {
  return (
    <>
    <header className='headerContainer'>
        <img className='headerContainer__logo' src={logoBlog} alt="" />
        <nav className='headerContainer__nav' >
            <Link to="/">
                <CustomButton
                    fontSize="1.5rem"
                    padding="5px  10px"
                    label="Home"
                    className="btn-nav btn-home"
                />
            </Link>
            <Link to="/sobre">
                <CustomButton
                    fontSize="1.5rem"
                    padding="5px  10px"
                    label="Sobre"
                    className="btn-nav btn-Sobre"
                />
            </Link>
            <Link to="/login">
                <CustomButton
                    fontSize="1.5rem"
                    padding="5px  10px"
                    label="ENTRAR"
                    backColor="#1c62a3"
                    className="btn-nav btn-entrar"
                />
            </Link>
            
        </nav>
    </header>
    </>
  )
}

export default Header