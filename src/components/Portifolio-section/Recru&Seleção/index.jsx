import styles from "./index.module.css"
import img1 from "./../../../assets/images/Portifolio/Screenshot_4.png"
import img2 from "./../../../assets/images/Portifolio/Screenshot_5.png"
import Card from "./Card"

export default function RecruSelecao() {
    return (
        <section className={styles.RecruSelecaoSection}>
            <div className={styles.customshapedividerbottom1734053474}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill}></path>
                </svg>
            </div>
            <div className={styles.RecruSelecaoContainer}>
                <h1>Recrutamento e Seleção</h1>
                <div className={styles.RecruSelecaoWrapper}>
                    <Card src={img1} title="Recrutamento" text={`O Recrutamento diz respeito aos procedimentos que se utilizam para atrair candidatos potencialmente qualificados para ocupar cargos dentro de uma organização. Envolve três etapas principais: Definição da vaga; Divulgação da vaga e Triagem dos candidatos/currículos. Na realidade da Innovare, a maioria das EJs contratantes realizam sua própria divulgação.`}/>
                    <Card src={img2} title="Seleção" text="A Seleção de pessoas escolhe entre os candidatos recrutados aquele mais adequado ao cargo ou vaga existente na organização a partir de algumas etapas envolvendo dinâmicas e entrevistas." />
                </div>
            </div>
            <div class="star"></div>
            <div className={styles.customshapedividertop1734203090}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill2} ></path>
                </svg>
            </div>
        </section>
    )
}