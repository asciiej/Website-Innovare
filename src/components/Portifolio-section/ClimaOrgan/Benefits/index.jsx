import { useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function Benefits({ src, text }) {
    const benefitsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                    }
                });
            },
            { threshold: 1 } // 60% of the element is visible
        );

        if (benefitsRef.current) {
            observer.observe(benefitsRef.current);
        }

        return () => {
            if (benefitsRef.current) {
                observer.unobserve(benefitsRef.current);
            }
        };
    }, []);

    return (
        <div ref={benefitsRef} className={styles.benefitsContainer}>
            <img src={src} alt={text} />
            <p>{text}</p>
        </div>
    );
}