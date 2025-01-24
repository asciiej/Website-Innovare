import { useState, useRef, useEffect } from 'react';
import styles from "./index.module.css";
import Card from "./card";
import img from "./../../../assets/images/Contato/liderarr.jpg";

export default function Team() {
    const animationSide = useRef(true);
    const [animationBig, setAB] = useState(1);
    const move = useRef(0);
    const containerRefs = useRef([]);
    const cardWidth = useRef(0);

    useEffect(() => {
        if (containerRefs.current[0]) {
            cardWidth.current = containerRefs.current[0].offsetWidth + 40; // Card width + gap
        }
    }, []);

    useEffect(() => {
        containerRefs.current.forEach((el) => {
            el.style.transform = `translateX(${move.current}px)`;
        });
    },[animationBig]);

    return (
        <section className={styles.teamSection}>
            <div className={styles.teamContainer}>
                <div className={`${styles.arrow} ${styles.invert}`} onClick={() => { if (animationBig > 1) { animationSide.current = false; move.current += cardWidth.current; setAB(animationBig - 1); } }}>
                </div>
                <div className={styles.teamWrapper}>
                    <Card ref={el => containerRefs.current[0] = el} src={img} cargo="Presidente" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                    <Card ref={el => containerRefs.current[1] = el} src={img} cargo="Presidente" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                    <Card ref={el => containerRefs.current[2] = el} src={img} cargo="Presidente" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                    <Card ref={el => containerRefs.current[3] = el} src={img} cargo="Presidente" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                    <Card ref={el => containerRefs.current[4] = el} src={img} cargo="Presidente" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                    <Card ref={el => containerRefs.current[5] = el} src={img} cargo="Presidente" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                        
                </div>
                <div className={styles.arrow} onClick={() => { if (animationBig < containerRefs.current.length - 1) { animationSide.current = true; move.current -= cardWidth.current; setAB(animationBig + 1); } }}>
                </div>
            </div>
        </section>
    );
}