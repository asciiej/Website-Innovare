import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/header/logo.svg';

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>
                    <img src={logo} alt='Innovare Jr. Logo' />
                </Link>
            </div>
            <nav className='menu'>
                <ul>
                    <li><Link to='/' className='menu-button'>Home</Link></li>
                    <li><Link to='/portfolio' className='menu-button'>Portfolio</Link></li>
                    <li><Link to='/quem-somos' className='menu-button'>Quem somos</Link></li>
                    <li><Link to='/contato' className='contact-button'>Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;