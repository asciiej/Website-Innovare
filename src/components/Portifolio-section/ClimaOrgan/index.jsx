import { useEffect, useRef } from "react";
import styles from "./index.module.css";
import Benefits from "./Benefits";
import img1 from "./../../../assets/images/Portifolio/Screenshot_4 - Copia.png";
import img2 from "./../../../assets/images/Portifolio/Screenshot_5 - Copia.png";
import img3 from "./../../../assets/images/Portifolio/Screenshot_6.png";
import img4 from "./../../../assets/images/Portifolio/Screenshot_7.png";

export default function ClimaOrganizacional() {
    const benefitsWrapperRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (benefitsWrapperRef.current) {
            observer.observe(benefitsWrapperRef.current);
        }

        return () => {
            if (benefitsWrapperRef.current) {
                observer.unobserve(benefitsWrapperRef.current);
            }
        };
    }, []);

    return (
        <section className={styles.climaOrganizacionalsection}>
            <div className={styles.customshapedividertop1736208262}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill1}></path>
                </svg>
            </div>
            <div className={styles.climaOrganizacionalcontainer}>
                <div className={styles.climaTextContainer}>
                    <h1>Pesquisa de Clima Organizacional</h1>
                    <div className={styles.climaTextWrapper}>
                        <p>A Pesquisa de Clima Organizacional visa mensurar a percepção dos funcionários acerca de fatores motivacionais e da qualidade das relações dentro da empresa.</p>
                        <p>A partir da aplicação da pesquisa, detectam-se os melhores e piores fatores relacionais da empresa.</p>
                        <p>Recomendam-se, então, medidas a serem tomadas para melhorar os fatores mais baixos, e para manter os fatores mais altos.</p>
                    </div>
                </div>
                <div className={styles.climaBenefitsContainer}>
                    <div ref={benefitsWrapperRef} className={styles.climaBenefitsWrapper}>
                        <h2>Benefícios da Pesquisa</h2>
                        <Benefits src={img1} text="Ambiente Agradável" />
                        <Benefits src={img2} text="Melhor Produtividade" />
                        <Benefits src={img3} text="Maior Interesse" />
                        <Benefits src={img4} text="Satisfação pelo Trabalho" />
                    </div>
                </div>
            </div>
            <div className={styles.customshapedividerbottom1736208382}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill2}></path>
                </svg>
            </div>
        </section>
    );
}