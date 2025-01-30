import React from 'react';
import './Workshops.css';
import oratoria from '../../../assets/images/Portifolio/Workshop/oratoria.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Workshops() {
    return (
        <div className="workshops-container">
            <h2>Conheça os nossos Workshops:</h2>
            <div className="workshops-cards">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-prev',
                        prevEl: '.swiper-button-next',
                    }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="cards">
                            <img
                                src={oratoria}
                                alt="Oratória"
                                className="workshop-image"
                            />
                            <h3 className="workshops-titulos">Workshop de Práticas de Saúde Mental</h3>
                            <p className="workshops-textos">
                                O Workshop de Práticas de Saúde Mental é uma versão reduzida do conteúdo apresentado no treinamento com esse mesmo tema.<br /><br />
                                Nesse sentido, ele engloba uma breve contextualização acerca das diferentes concepções de saúde mental, bem como dos fatores de risco e proteção que podem influenciar na qualidade de vida psíquica do indivíduo.<br /><br />
                                Já na parte prática do treinamento, com base em pesquisas em artigos científicos e fundamentadas principalmente pela Análise do Comportamento, importante vertente teórica da psicologia, são fornecidas inúmeras práticas de saúde mental escolhidas de forma personalizada às demandas apresentadas pelo contratante, podendo ser iniciativas mais voltadas ao ambiente organizacional ou individual.<br /><br />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img
                                src={oratoria}
                                alt="Oratória"
                                className="workshop-image"
                            />
                            <h3 className="workshops-titulos">Workshop de Marketing Pessoal e Currículo</h3>
                            <p className="workshops-textos">
                                O Workshop de Marketing Pessoal e Currículo engloba conceituações teóricas acerca do Marketing Pessoal, levando em consideração aspectos como o autoconhecimento, a capacidade de comunicação, a postura profissional adequada, criatividade, inovação, proatividade e os relacionamentos interpessoais.<br /><br />
                                Já em sua parte prática, serão apresentadas dicas e estratégias para a montagem de um currículo assertivo e condizente com as demandas do mercado de trabalho, independente da área em que o indivíduo busca se inserir. Os participantes têm ainda a oportunidade de analisar alguns currículos a fim de verificar erros que não podem ser cometidos neste momento tão importante da vida profissional.<br /><br />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img
                                src={oratoria}
                                alt="Oratória"
                                className="workshop-image"
                            />
                            <h3 className="workshops-titulos">Workshop de Oratória</h3>
                            <p className="workshops-textos">
                                O Workshop de Oratória inicia-se com uma breve contextualização da história da oratória, sua conceituação teórica e aborda os elementos presentes na comunicação.<br /><br />
                                A partir disso, aprofunda-se sobre a comunicação verbal e não verbal, a comunicação assertiva, os elementos paralinguísticos, e os cuidados que se deve ter na hora de se comunicar.<br /><br />
                                Ademais, o workshop traz dicas práticas e úteis para nosso cotidiano que buscam auxiliar na fala em público, bem como técnicas para potencializar a dicção.<br /><br />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img
                                src={oratoria}
                                alt="Oratória"
                                className="workshop-image"
                            />
                            <h3 className="workshops-titulos">Workshop de Liderança</h3>
                            <p className="workshops-textos">
                                O Workshop de Liderança visa estimular tal capacidade utilizando, inicialmente, de contextualizações e comparações com outros conceitos com os quais a expressão costuma ser confundida, como por exemplo, a gestão.<br /><br />
                                Através de tal comparação, diferenças vão sendo apontadas, esclarecendo o real significado da expressão e abrindo caminho para explicações relacionadas ao papel de um líder, suas habilidades e características necessárias e formas corretas de agir nas mais diversas situações, por exemplo.<br /><br />
                                Ademais, neste workshop são estabelecidos critérios essenciais para a boa comunicação de um líder e as semelhanças e diferenças com outras formas de resolver situações e fornecer feedbacks, enfatizando sempre a importância de tais explicações.<br /><br />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img
                                src={oratoria}
                                alt="Oratória"
                                className="workshop-image"
                            />
                            <h3 className="workshops-titulos">Workshop de Mapeamento de Áreas</h3>
                            <p className="workshops-textos">
                                O Workshop de Mapeamento de Áreas irá introduzir o ambiente organizacional e os motivos que o tornam peça fundamental para atingir os propósitos e os resultados esperados.<br /><br />
                                Em vista disso, será apresentada a técnica mais comum que é utilizada pelos setores de Recursos Humanos e que visa especificar tarefas e atribuições que compõem um cargo: a Descrição e Análise de Cargos.<br /><br />
                                Adiante, o WS irá aprofundar o conhecimento sobre o termo “Cultura Organizacional” e como ela pode ser definida dentro de uma organização, impactando diretamente nos resultados e servindo como uma aliada aos processos de seleção.<br /><br />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img
                                src={oratoria}
                                alt="Oratória"
                                className="workshop-image"
                            />
                            <h3 className="workshops-titulos">Workshop de Soft Skills</h3>
                            <p className="workshops-textos">
                                O Workshop de Soft Skills tem como conteúdo a definição do que são soft skills, as diferenças entre estas e hard skills e a importância do desenvolvimento dessas habilidades em um mercado cada vez mais competitivo e marcado pela intensa presença de tecnologias de informação e automação de processos.<br /><br />
                                Além disso, o Workshop também contextualiza as soft skills com o mundo organizacional, enfatizando o atual padrão de busca das empresas por competências comportamentais em detrimento das técnicas.<br /><br />
                                Também são enfatizadas as principais soft skills valorizadas pelo mercado de trabalho como a liderança, proatividade e trabalho em equipe e ainda, formas de desenvolvê-las.<br /><br />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img
                                src={oratoria}
                                alt="Oratória"
                                className="workshop-image"
                            />
                            <h3 className="workshops-titulos">Workshop de Motivação e Engajamento</h3>
                            <p className="workshops-textos">
                                O Workshop de Motivação e Engajamento tem como objetivo realizar uma contextualização sobre o tema, mostrando as diferenças entre os dois tópicos para que, por meio de teorias psicológicas, o assunto possa ser melhor absorvido, compreendendo-se tipos e conceitos envolvidos, bem como a relação da motivação com a produtividade.<br /><br />
                                O serviço contempla também temáticas como Clima e Cultura Organizacional, trazendo propostas que podem ser aplicadas no cotidiano das empresas.<br /><br />
                                Além disso, o Workshop aborda de forma técnica aspectos relacionados à motivação e engajamento, dentre eles a liderança, o desenvolvimento de carreiras e o sistema de benefícios e recompensas.<br /><br />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cards">
                            <img
                                src={oratoria}
                                alt="Oratória"
                                className="workshop-image"
                            />
                            <h3 className="workshops-titulos">Workshop de Diversidade e Inclusão</h3>
                            <p className="workshops-textos">
                                O Workshop de Diversidade e Inclusão irá abordar temas como a diferença entre a própria diversidade e inclusão, os tipos de diversidade, e como incluir e não só diversificar.<br /><br />
                                Através das teorias psicológicas exploramos fatores que atravessam a forma de olhar uns aos outros a partir de certos vieses e buscamos na prática como refletir sobre o tema e implementar formas para expandir tanto a diversidade como a inclusão, além de se aprofundar em revelar porque a diversidade é um tema crucial na nossa empresa e na sociedade.<br /><br />
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    );
}

export default Workshops;