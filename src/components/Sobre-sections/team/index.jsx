import { useState, useRef, useEffect } from 'react';
import styles from "./index.module.css";
import Card from "./card";

export default function Team() {
    const animationSide = useRef(true);
    const [animationBig, setAB] = useState(1);
    const move = useRef(0);
    const containerRefs = useRef([]);
    const cardWidth = useRef(0);;

    useEffect(() => {
        if (containerRefs.current[0]) {
            cardWidth.current = containerRefs.current[0].offsetWidth + 50;
        }
    }, []);

    useEffect(() => {
        containerRefs.current.forEach((el) => {
            el.style.transform = `translateX(${move.current}px)`;
        });
    }, [animationBig]);

    return (
        <section className={styles.teamSection}>
            <h2 className={styles.teamTitle}>Nossa <span className={styles.h2__colorido}>áreas administrativas</span></h2>
            <div className={styles.teamContainer}>
                <div className={`${styles.arrow} ${styles.invert}`} onClick={() => { if (animationBig > 1) { animationSide.current = false; move.current += cardWidth.current; setAB(animationBig - 1); } }}>
                </div>
                <div className={styles.teamWrapper}>
                    <Card ref={el => containerRefs.current[0] = el} cargo="Presidência" text="A Presidência é o elo de ligação entre a empresa e a comunidade externa, sendo responsável por assinar documentos pertinentes à Innovare Jr., trazidos pela Diretoria de Administrativo Financeiro ou quando for necessário ir ao cartório; atender às demandas e participar de reuniões organizadas pela Federação (FEJEMG) e pelo Núcleo Triângulo; e montar documentos referentes ao fomento. Assim, é quem representa a empresa frente a outras entidades. Ademais, a presidência também é responsável por organizar as temáticas das Reuniões Gerais (RGs) e mediá-las. Por fim, é encargo da área encontrar pessoas capacitadas para darem treinamentos internos, que terão os temas escolhidos por demanda geral da empresa" />
                    <Card ref={el => containerRefs.current[1] = el} cargo="Vice-Presidência" text="A vice-presidência é uma área encarregada pela administração interna da Empresa Júnior, como a organização das reuniões de direx, a condução estratégica da empresa e principalmente certificação de que as outras áreas estejam alinhadas - cumprindo as metas e obtendo resultados esperados. A diretora fica somente responsável pela representatividade e a liderança. Nesse sentido, VP tem por objetivo realizar o Planejamento Estratégico (no começo de cada ano) de maneira alinhada à cultura organizacional (missão, visão e valores) e às metas do portal BJ. A partir disso, se estabelece a OKR geral da empresa, bem como as OKRs de cada área, definidas a cada ciclo (trimestre) - com acompanhamento (meio do ciclo) e comemoração (final do ciclo)" />
                    <Card ref={el => containerRefs.current[2] = el} cargo="Projetos" text="A Diretoria de Projetos é responsável, em resumo, pela gerência, desenvolvimento e atualização dos serviços da Innovare, além do fornecimento de treinamentos/capacitações para os membros da Empresa Júnior. O principal objetivo é que a área consiga garantir a qualidade dos serviços prestados pela Innovare. Enquanto gerência, a área é responsável por, em contato direto com o cliente, gerenciar os projetos a serem executados pela empresa, organizando a equipe que será responsável pelo projeto, delegando tarefas, configurando materiais necessários e garantindo a execução do serviço vendido de forma efetiva. Além disso, enquanto responsável pela inovação dos serviços, a área é responsável tanto pela atualização dos já existentes quanto pela estruturação de novos serviços. Por fim, a área como um todo, é responsável pela capacitação dos membros para os serviços vendidos pela Innovare, visando sempre a mais efetiva execução de todos eles para os nossos clientes" />
                    <Card ref={el => containerRefs.current[3] = el} cargo="Administrativo-Financeiro" text="A área de Administrativo Financeiro é responsável por todo o funcionamento burocrático da Empresa Júnior. Dessa forma, lidamos tanto com documentos relativos ao funcionamento interno quanto externo, com o objetivo de manter a organização, a legalidade e o bom funcionamento da Empresa como um todo. Para isso, somos responsáveis pelo controle das infrações, presenças nas reuniões,  cadastro dos membros, confecção das atas e certificados, transparência financeira, precificações e contabilidade. Além disso, também participamos das reuniões de fechamento com clientes, montamos os contratos, orçamentos e demais documentos que garantam nossa legalidade perante ao Portal da Brasil Júnior e a lei. A diretoria do Administrativo - Financeiro, mais especificadamente, fica responsável pelo controle bancário, controle de pagamentos e pela apresentação dos documentos ao Portal da Brasil Júnior" />
                    <Card ref={el => containerRefs.current[4] = el} cargo="Negócios" text="A Diretoria de Negócios é responsável por manter o fluxo das três subáreas: Conexão, Inteligência de Mercado e Comercial. O objetivo é que sejam feitas vendas estratégicas para benefício do cliente e da Innovare. Conexão é responsável pela aparência da Innovare nas redes sociais, site e etc., é responsável pelo marketing e é quem vai atrair o Lead aos demais. Já Inteligência de mercado estuda sobre conexão, o que está dando certo ou errado quanto a atração de leads e também pensa em estratégias para ir atrás de clientes com grande potencial de venda, assim, encontra o número ou email do lead, o qual comercial irá entrar em contato posteriormente. Comercial é o vendedor dos nossos serviços, atendendo tanto as demandas que vem de conexão, quanto de inteligência de mercado" />
                    <Card ref={el => containerRefs.current[5] = el} cargo="Gestão de Pessoas" text="A diretoria de Gestão de Pessoas é responsável por manter o bem-estar dos membros, de suas relações dentro da empresa e também pela manutenção do bom clima organizacional. Dessa forma, a Gestão de Pessoas acompanha os membros individualmente desde seu ingresso na equipe até o momento de seu desligamento. Além disso, também é responsável por fiscalizar o clima organizacional e otimizar o funcionamento interno da Innovare. Assim, sempre está em busca de como melhorar a motivação, engajamento e desenvolvimento das equipes, além de procurar formas de evitar estresse e sobrecarga. Por fim, a Gestão de Pessoas consiste na responsabilidade, ética e empatia por lidar com problemas reais dos membros da empresa, e da criatividade e estratégia para buscar melhores soluções de problemas internos" />
                </div>
                <div className={styles.arrow} onClick={() => { if (animationBig < containerRefs.current.length - 1) { animationSide.current = true; move.current -= cardWidth.current; setAB(animationBig + 1); } }}>
                </div>
            </div>
        </section>
    );
}
