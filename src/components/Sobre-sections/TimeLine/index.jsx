import { useState, useEffect, useRef } from 'react';
import styles from './index.module.css';

export default function TimeLine() {
    let [animationRight, setAR] = useState("");
    let [animationLeft, setAL] = useState("");

    const containerRefs = useRef([]);

    useEffect(() => {
        const observers = containerRefs.current.map((ref, index) => {
            return new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        ref.classList.add(styles.appear);
                        observers[index].disconnect();
                    }
                },
                { threshold: 0.5 }
            );
        });

        containerRefs.current.forEach((ref, index) => {
            if (ref) {
                observers[index].observe(ref);
            }
        });

        return () => {
            observers.forEach((observer, index) => {
                if (containerRefs.current[index]) {
                    observer.unobserve(containerRefs.current[index]);
                }
            });
        };
    }, []);

    useEffect(() => {
        if (containerRefs.current.some(ref => ref && ref.classList.contains(styles.appear))) {
            setAL(styles.animationRight);
            setAR(styles.animationLeft);
        }
    }, [containerRefs.current]);

    return (
        <div className={styles.timelineContainer}>
            <h1 className={styles.titleTL}>Nossa trajetória</h1>
            <div className={styles.timeline}>
                <div className={`${styles.container} ${styles.left} ${animationLeft}`}>
                    <div ref={el => containerRefs.current[0] = el} className={styles.content} style={{ backgroundColor: '#224a6d' }}>
                        <h1>2014</h1>
                        <p>Idealização e fundação da Innovare</p>
                    </div>
                </div>
                <div className={`${styles.container} ${styles.right} ${animationRight}`}>
                    <div ref={el => containerRefs.current[1] = el} className={styles.content} style={{ backgroundColor: '#7b1d3f' }}>
                        <h1>2015</h1>
                        <p>Documentação e apresentação da EJ para universidade</p>
                    </div>
                </div>
                <div className={`${styles.container} ${styles.left} ${animationLeft}`}>
                    <div ref={el => containerRefs.current[2] = el} className={styles.content} style={{ backgroundColor: '#224a6d' }}>
                        <h1>2016</h1>
                        <p>1° Prêmio Centri UFTM</p>
                    </div>
                </div>
                <div className={`${styles.container} ${styles.right} ${animationRight}`}>
                    <div ref={el => containerRefs.current[3] = el} className={styles.content} style={{ backgroundColor: '#7b1d3f' }}>
                        <h1>2018</h1>
                        <p>Federação da EJ ao FEJEMG</p>
                    </div>
                </div>
                <div className={`${styles.container} ${styles.left} ${animationLeft}`}>
                    <div ref={el => containerRefs.current[4] = el} className={styles.content} style={{ backgroundColor: '#224a6d' }}>
                        <h1>2019</h1>
                        <p>Prêmio de EJ conectada</p>
                    </div>
                </div>
                <div className={`${styles.container} ${styles.right} ${animationRight}`}>
                    <div ref={el => containerRefs.current[5] = el} className={styles.content} style={{ backgroundColor: '#7b1d3f' }}>
                        <h1>2020</h1>
                        <p>Adptação ao período remoto</p>
                    </div>
                </div>
                <div className={`${styles.container} ${styles.left} ${animationLeft}`}>
                    <div ref={el => containerRefs.current[6] = el} className={styles.content} style={{ backgroundColor: '#224a6d' }}>
                        <h1>2022</h1>
                        <p>Prêmio de EJ de Alto Crescimento</p>
                    </div>
                </div>
                <div className={`${styles.container} ${styles.right} ${animationRight}`}>
                    <div ref={el => containerRefs.current[7] = el} className={styles.content} style={{ backgroundColor: '#7b1d3f' }}>
                        <h1>2023</h1>
                        <p>Prêmio de EJ Inovadora</p>
                    </div>
                </div>
                <div className={`${styles.container} ${styles.left} ${animationLeft}`}>
                    <div ref={el => containerRefs.current[8] = el} className={styles.content} style={{ backgroundColor: '#224a6d' }}>
                        <h1>2024</h1>
                        <p>10 anos de Innovare</p>
                    </div>
                </div>
            </div>
        </div>
    );
}