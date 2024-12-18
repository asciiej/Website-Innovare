import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

//Imagens
import hero from '../../../assets/images/home/hero2.jpg';

function Hero () {
    return (
        <div className='hero-container'>
            <div className='hero-text'>
                <p>A Melhor Consultoria para sua Empresa</p>
                <h2>Construindo resultados<br />através de pessoas.</h2>
                <Link to='/portfolio' className='hero-link'>
                    <button className='hero-button'>
                        <span>
                            Saiba Mais
                        </span>
                    </button>
                </Link>
                </div>
            <div className='hero-image'>
                <img src={hero} alt='Equipe de consultoria da Innovare Jr.'></img>
            </div>
        </div>
    );
}

export default Hero;