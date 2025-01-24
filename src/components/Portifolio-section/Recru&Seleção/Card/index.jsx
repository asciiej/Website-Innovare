import styles from "./index.module.css"

export default function Card({ src, title, text }) {
    return (
        <div className={styles.CardWrapper}>
            <h2>{title}</h2>
            <div>
                <img src={src} />
                <p>{text}</p>
            </div>
        </div>
    )
}