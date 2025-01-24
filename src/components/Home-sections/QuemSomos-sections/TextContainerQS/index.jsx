import { useState, useEffect, useRef } from 'react';
import styles from './index.module.css';

export default function TextContainerQS() {
    // useState para cada número que vai subir começando de 10, 0 e 3
    let [num1, setNum1] = useState(10);
    let [num2, setNum2] = useState(0);
    let [num3, setNum3] = useState(3);
    // Criação de referência para o container do DOM
    const containerRef = useRef(null);
    // useState para verificar se o componente está sendo observado
    const [isObserved, setIsObserved] = useState(false);

    // Effect para observar se os números estão na tela a cada renderização do componente
    useEffect(() => {
        // função que observa se o container está visível na tela
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsObserved(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Adjusted threshold for better performance on smaller screens
        );

        // verificação se o container já foi renderizado
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        // limpa o observer
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isObserved) {
            // Logic to increment numbers
            const interval1 = setInterval(() => {
                setNum1(prev => (prev < 120 ? prev + 1 : prev));
            }, 40);
            const interval2 = setInterval(() => {
                setNum2(prev => (prev < 10 ? prev + 1 : prev));
            }, 70);
            const interval3 = setInterval(() => {
                setNum3(prev => (prev < 20 ? prev + 1 : prev));
            }, 50);

            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
            };
        }
    }, [isObserved]);

    return (
        <div ref={containerRef} className={styles.TextWrapper}>
            <div className={styles.InfoText}>
                <p>Innovare Jr., selecionando, treinando e desenvolvendo pessoas com excelência!</p>
                <p>A Innovare - Consultoria Júnior em Psicologia é uma empresa sem fins lucrativos fundada em 2014,
                     a qual conta com membros voluntários do curso de Psicologia da Universidade Federal do Triângulo 
                     Mineiro (UFTM). São realizados serviços de qualidade a custo acessível orientados e 
                     respaldados pela tutoria de professores qualificados da universidade que investem na área de 
                     Psicologia Organizacional e do Trabalho.</p>
            </div>
            <div className={styles.Indicators}>
                <div>
                    <p className={styles.num}>+{num1}</p>
                    <p className={styles.textNum} >soluções entregues</p>
                </div>
                <div>
                    <p className={styles.num}>+{num2}</p>
                    <p className={styles.textNum} >Anos no setor</p>
                </div>
                <div>
                    <p className={styles.num}>+{num3}</p>
                    <p className={styles.textNum} >Serviços disponíveis</p>
                </div>
            </div>
        </div>
    );
}