import React, { forwardRef } from 'react';
import styles from "./index.module.css";

const Card = forwardRef(({ src, text, cargo, className }, ref) => (
    <div ref={ref} className={`${styles.cardContainer} ${className}`}>
        <div className={styles.cardImage}>
            <img src={src} alt={cargo} />
        </div>
        <h2>{cargo}</h2>
        <div className={styles.cardText}>
            <p>{text}</p>
        </div>
    </div>
));

export default Card;