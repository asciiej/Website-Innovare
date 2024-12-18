import React from 'react';
import './Banner.css';

//Imagens
import banner from '../../../assets/images/sobre/banner/banner1.jpg';

function Banner(){
    return(
        <div className='banner'>
            <img src={banner} alt='Imagem dos membros da Innovare com o mascote'></img>
        </div>
    )
}

export default Banner;