import React from 'react';
import styles from './FeedBack.module.css';

import linkedin from '../../../assets/images/footer/linkedin.svg';
import facebook from '../../../assets/images/footer/facebook.svg';
import seta from '../../../assets/images/feedback/seta.svg';
import { Link } from 'react-router-dom';

function FeedBack() {
    return (
        <div className={styles.feedbackcontainer}>
            <div className={styles.customshapedividertop}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill1}></path>
                </svg>
            </div>
            <div className={styles.feedback}>
                <h1>O que os nossos clientes têm a dizer?</h1>
                <div className={styles.cardscontainer}>
                    <div className={styles.cards}>
                        <div className={styles.feedcard}>
                            <img
                                src={facebook} alt='Facebook'
                                className={styles.cardimage}
                            />
                            <blockquote>
                                <p>“A palavra que melhor define o serviço prestado, que no nosso caso foi o Processo Seletivo é Eficiência, todos da equipe estavam prontos para nos ajudar,
                                    todas as etapas foram entregues de forma super rápida e extremamente bem feita.”
                                </p>
                            </blockquote>
                            <blockquote>
                                <p>“O serviço é de altíssima qualidade, muito eficiente e todos colaboradores muito gentis".
                                </p>
                            </blockquote>
                            <cite className={styles.autor}>- Atlética de Engenharia de Produção da UFTM</cite>
                        </div>
                        <div className={styles.feedcard}>
                            <img
                                src={linkedin} alt='Linkedin'
                                className={styles.cardimage}
                            />
                            <blockquote>
                                <p>“Foi muito importante para a alocação dos novos membros, estão se inteirando da EJ a cada dia. É um processo,
                                    mas com certeza o processo seletivo trouxe membros qualificados para nós.”</p>
                            </blockquote>
                            <blockquote>
                                <p>“Sendo sincero, não mudaria nada, foi muito bem elaborado. O Acompanhamento com a gente foi super positivo e esperamos novamente a renovação do serviço quando o PS estiver aberto novamente”</p>
                            </blockquote>
                            <cite className={styles.autor}>- ECAP</cite>
                        </div>
                    </div>
                </div>
                <Link to={'/portfolio'} className={styles.feedlink}>
                    <button className={styles.feedbackbutton}>
                        <span className={styles.texto}>
                            Abrir nosso Portfólio
                        </span>
                        <span>
                            <img
                                src={seta} alt='Seta'
                                className={styles.seta}
                            />
                        </span>
                    </button>
                </Link>
            </div>
            <div className={styles.customshapedividertop1735569732}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill2}></path>
                </svg>
            </div>
        </div>
    )
}

export default FeedBack;