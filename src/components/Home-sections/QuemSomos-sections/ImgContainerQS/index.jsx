import styles from "./index.module.css"

export default function ImgContainerQS(props) {
    return(
        <div className={styles.QuemSomosImgContainer}>
           <img className={styles.QuemSomosImg} src={props.src} alt={props.alt}/>
        </div>
    )
}