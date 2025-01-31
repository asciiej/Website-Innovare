import React, { forwardRef } from 'react';
import styles from "./index.module.css";

const Card = forwardRef(({text, cargo, className }, ref) => (
    <div ref={ref} className={`${styles.cardContainer} ${className}`}>
        <h2>{cargo}</h2>
        <div className={styles.cardText}>
            {text.split('. ').map((sentence, index) => (
                <p key={index}>
                    {sentence}.
                    <br /> <br />
                </p>
            ))}
        </div>
    </div>
));

export default Card;