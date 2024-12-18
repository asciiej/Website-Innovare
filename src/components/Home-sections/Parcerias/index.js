import React from 'react';
import './Parcerias.css';

//Imagens
import logoUFTM from '../../../assets/images/parcerias/logo_uftm.png'; 
import logoNucleo from '../../../assets/images/parcerias/logo-nucleo.png'; 
import logoPsi from '../../../assets/images/parcerias/logo-psi.svg';

function Parcerias(){
    return(
        <div className='parceiros-container'>
            <h2>Nossos Parceiros</h2>
            <div className='logos'>
                <div className='parceiro'>
                    <img src={logoUFTM} alt='Logotipo da UFTM'></img>
                </div>
                <div className='parceiro' id='nucleo'>
                    <img src={logoNucleo} alt='Logotipo do Núcleo Triângulo'></img>
                </div>
                <div className='parceiro'>
                <img src={logoPsi} alt='Logotipo do programa de pós-graduação em psicologia da UFTM'></img>
                </div>
            </div>
        </div>
    );
}

export default Parcerias;