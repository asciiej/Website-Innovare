import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// Importação das imagens
import logo from '../../assets/images/footer/logo.svg';
import whatsapp from '../../assets/images/footer/whatsapp.svg';
import instagram from '../../assets/images/footer/instagram.svg';
import linkedin from '../../assets/images/footer/linkedin.svg';
import facebook from '../../assets/images/footer/facebook.svg';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-principal'>
                <Link to='/'>
                    <img src={logo} alt='Logo em branco' className='footer-logo' />
                </Link>
                <ul className='redes-sociais'>
                    <li>
                        <a href='https://api.whatsapp.com/send/?phone=5534998786615&text&type=phone_number&app_absent=0' target='_blank' rel='noopener noreferrer'>
                            <img src={whatsapp} alt='WhatsApp' />
                        </a>
                        <a href='https://www.instagram.com/innovarejr/' target='_blank' rel='noopener noreferrer'>
                            <img src={instagram} alt='Instagram' />
                        </a>
                        <a href='https://www.linkedin.com/company/innovarejr/?originalSubdomain=br' target='_blank' rel='noopener noreferrer'>
                            <img src={linkedin} alt='LinkedIn' />
                        </a>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                            <img src={facebook} alt='Facebook' />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='footer-divisoria'></div>
            <div className='copyright'>
                <p>© 2024 Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;