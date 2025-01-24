import styles from "./index.module.css"

export default function TypeServiceNS(props){
    return(
        <>
        <div className={styles.Item}>
            <h1>{props.service}</h1>
            <img src={props.src} alt={props.alt} className={styles.ImgStyle}/>
        </div>
        </>
    )
}