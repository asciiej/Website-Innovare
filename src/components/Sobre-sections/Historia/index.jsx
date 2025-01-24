import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function Historia() {
    return (
        <div className={styles.histcontainer}>
            <div className={styles.historia}>
                <h2>Nossa História</h2>
                <p className={styles.textinho}>Innovare Jr., 10 anos selecionando, treinando e desenvolvendo pessoas com excelência!</p>
                <p className={styles.texto}><span className={styles.destaque}>A Innovare - Consultoria Júnior em Psicologia -</span> é uma empresa sem fins lucrativos fundada em 2014, a qual conta com membros voluntários do curso de Psicologia da Universidade Federal do Triângulo Mineiro (UFTM).</p>
                <p className={styles.texto}>Nosso propósito é melhorar o desempenho das empresas, a partir das Relações Humanas e Gestão de Pessoas. Nesse sentido, buscamos também alcançar o bem estar da organização, visto que, como diferencial a empresa conta com a elaboração de ações de acordo com as <span className={styles.destaque}>particularidades de cada cliente.</span></p>
                <p className={styles.texto}>Aguardamos seu contato para agendar uma reunião de negociação!</p>
                <Link to={'/contato'} className={styles.contatolink}>
                    <button className={styles.contatobutton}>
                        <span>
                            Entre em Contato
                        </span>
                    </button>
                </Link>
            </div>
            <div class={styles.customshapedividertop}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class={styles.shapefill}></path>
                </svg>
            </div>
        </div>
    )
}

export default Historia;