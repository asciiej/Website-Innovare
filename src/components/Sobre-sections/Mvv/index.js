import React from 'react';
import './Mvv.css';

function Mvv(){
    return(
        <div className='mvv'>
            <h2>Nossa <span class="h2-colorido">essência</span>, nossa cultura, nossos valores.</h2>
            <p>Innovare - Consultoria Júnior em Psicologia</p>
            <div className='cards-container-mvv'>
                <div className='cards-mvv'>
                    <div className='card-mvv'>
                        <h3>Nossa Missão</h3>
                        <h4>Por que existimos?</h4>
                        <p>Capacitar profissionais empreendedores e qualificados, através da experiência prática, na área de Psicologia Organizacional e do Trabalho que possam impactar o meio empresarial no Brasil todo.</p>
                    </div>
                    <div className='card-mvv'>
                        <h3>Nossa Visão</h3>
                        <h4>Onde vamos chegar?</h4>
                        <p>Ser uma empresa júnior de referência no Brasil pelos serviços de excelência, com membros capacitados, engajados, direcionados para o crescimento, impactando clientes do mercado sênior e MEJ.</p>
                    </div>
                    <div className='card-mvv'>
                        <h3>Nossos Valores</h3>
                        <h4>A maneira como agimos</h4>
                        <p>Ética, Empatia, Motivação, Cooperatividade, Desenvolvimento de Pessoas, Diversidade, Responsabilidade e Comprometimento.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mvv;