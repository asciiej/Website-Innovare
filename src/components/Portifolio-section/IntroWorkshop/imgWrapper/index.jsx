import styles from './index.module.css'

export default function ImgWrapper(props) {
    return (
        <div className={styles.imgContainer}>
            <div className={styles.imgWrapper}>
            <img src={props.src} alt={props.alt} />
            </div>
        </div>
    )
}