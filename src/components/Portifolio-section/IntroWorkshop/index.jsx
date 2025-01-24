import styles from './index.module.css';
import img from '../../../assets/images/home/Em-evento.jpeg';
import TextWrapper from './textWrapper';
import ImgWrapper from './imgWrapper';

export default function IntroWorkshop() {
    return (
        <div className={styles.introWorkshopContainer}>
            <TextWrapper />
            <ImgWrapper src={img} alt={"Foto sobre um Workshop"}/>
        </div>
    );
}