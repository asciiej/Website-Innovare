import React from 'react';
import './Mvv.css';

function Mvv(){
    return(
        <div className='mvv'>
            <h2>Nossa <span class="h2-colorido">essência</span>, nossa cultura, nossos valores.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
            <div className='cards-container'>
                <div className='cards'>
                    <div className='card'>
                        <h3>Nossa Missão</h3>
                        <h4>Por que existimos?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.Aliquam in hendrerit.</p>
                    </div>
                    <div className='card'>
                        <h3>Nossa Visão</h3>
                        <h4>Onde vamos chegar?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.Aliquam in hendrerit.</p>
                    </div>
                    <div className='card'>
                        <h3>Nossos Valores</h3>
                        <h4>A maneira como agimos</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.Aliquam in hendrerit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mvv;