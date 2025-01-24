import styles from './index.module.css';
import img1 from '../../../assets/images/Portifolio/Screenshot_8.png';
import img2 from '../../../assets/images/Portifolio/Screenshot_9.png';
import img3 from '../../../assets/images/Portifolio/Screenshot_10.png';
import img4 from '../../../assets/images/Portifolio/Screenshot_11.png';
import img5 from '../../../assets/images/Portifolio/Screenshot_12.png';
import img6 from '../../../assets/images/Portifolio/Screenshot_13.png';

export default function OrientacaoProfissional() {
  return (
    <section className={styles.orientacaoProfissionalSection}>
        <div className={styles.orientacaoProfissionalContainer}>
            <div className={styles.OrientaçãoBanner}>
                <h2>Orientação Profissional</h2>
                <div className={styles.OrientaçãoImgs}>
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img3} />
                    <img src={img4} />
                    <img src={img5} />
                    <img src={img6} />
                </div>
            </div>
            <div className={styles.OrientaçãoDescription}>
                <h2>Por que orientação profissional ?</h2>
                <p>A Orientação Profissional proporciona ao indivíduo o conhecimento do seu processo de escolha profissional e a compreensão do mercado de trabalho. Assim, o intuito é proporcionar possibilidades para a construção de seus projetos vocacionais, estimulando-o no planejamento de sua carreira, informações sobre a inserção no ambiente trabalhista. Ao final, recomendam-se ocupações em que o indivíduo apresentaria bom desempenho e satisfação.</p>
            </div>
        </div>
    </section>
    );
}