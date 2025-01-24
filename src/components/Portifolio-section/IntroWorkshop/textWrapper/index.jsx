import styles from './index.module.css'

export default function TextWrapper() {
    return (
        <div className={styles.textWrapper}>
            <h1>Workshops</h1>
            <div className={styles.textDescription}>
                <h2>Presencial ou Online</h2>
                <span>
                    <p>O Workshop consiste em uma aula ou curso prático sobre um assunto específico. Pode ser considerado uma oficina ou seminário intensivo, de pouca duração, em que habilidades artísticas ou intelectuais são exercitadas. </p>
                    <p>Importante: O Workshop pode ser personalizado com um novo tema de acordo com a demanda do cliente.</p>
                </span>
                <ul>
                    <li>Práticas de Saúde Mental</li>
                    <li>Marketing Pessoal e Currículo</li>
                    <li>Oratória</li>
                    <li>Liderança</li>
                    <li>Mapeamento de Áreas</li>
                    <li>Soft Skills</li>
                    <li>Motivação e engajamento</li>
                    <li>Diversidade e Inclusão</li>
                </ul>
            </div>
        </div>
    )
}