import Title from "./TitleNS"
import SomeServices from "./SomeServicesNS"
import styles from "./index.module.css"

export default function Servicos(){
    return(
        <>
        <div className={styles.NossosServicosContainer}>
           <Title/>
           <div className={styles.ServicesWrapper}>
              <SomeServices/>
           </div>
        </div>
        </>
    )
}