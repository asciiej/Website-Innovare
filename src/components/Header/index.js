import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.svg';

function Header(){
    return(
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt='Innovare Jr. Logo'></img>
            </div>
            <nav className='menu'>
                <ul>
                    <li><a href='#home' className='menu-button'>HOME</a></li>
                    <li><a href='#portfolio' className='menu-button'>PORTFÓLIO</a></li>
                    <li><a href='#about' className='menu-button'>QUEM SOMOS</a></li>
                    <li><a href='#contact' className='contact-button'>CONTATO</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;