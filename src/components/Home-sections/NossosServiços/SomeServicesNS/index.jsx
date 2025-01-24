import TypeService from "./../TypeServiceNS"
import styles from "./index.module.css"
import img from "./../../../../assets/images/home/liderarr.jpg"
import svg from "./../../../../assets/images/home/arrow.svg"
import { Link } from 'react-router-dom';

export default function SomeServicesNS(){
    return(<>
        <TypeService service="Workshops" src={img}/>
        <TypeService service="Treinamentos" src={img} />
        <TypeService service="Pesquisa de clima organizacional" src={img} />
        <TypeService service="Plano desenvolvimento individual" src={img} />
        <TypeService service="Recrutamento e seleção" src={img} />
        <div className={styles.PortifolioElement}>
            <h1>Confira todos:</h1>
            <Link to='/portfolio'>
                <a href="" className={styles.ref}>
                    <p>Portfólio</p>
                    <img src={svg}/>
                </a>
            </Link>
        </div>
    </>)
}