import React, { useState } from "react";
import "./Training.css";

import menuImage1 from '../../../assets/images/Portifolio/Training/default.png';
import detailImage1 from '../../../assets/images/Portifolio/Training/default2.png';

const Training = () => {
  // Dados dos treinamentos
  const treinamentos = [
    {
      id: 1,
      title: "Gestão de Tempo",
      description:
      "O Treinamento de Gestão de Tempo tem como objetivo principal a apresentação de temas importantes para o manejo de uma rotina que visa aumentar a produtividade, oferecer momentos de descanso e diminuir a sensação de sobrecarga e de pressão.",
      menuImage: menuImage1,
      image: detailImage1,
    },
    {
      id: 2,
      title: "Inteligência Emocional",
      description:
      "O Treinamento de Inteligência Emocional busca, inicialmente, através de uma contextualização sobre o que é essa inteligência, os primeiros usos da expressão, seu significado e as influências de fatores internos e externos, estimular e melhorar tal capacidade de processamento das informações que é tão importante não somente no meio organizacional, mas em todos os aspectos da vida cotidiana.",
      menuImage: menuImage1,
      image: detailImage1,
    },
    {
      id: 3,
      title: "Mercado de Trabalho",
      description:
      "O Treinamento de Mercado de Trabalho objetiva a preparação do cliente não só para ingresso como também para o destaque no mercado de trabalho. Ao longo do treinamento, aborda-se estratégias essenciais para obter sucesso profissional, como marketing pessoal, comunicação, criatividade, inovação, proatividade, relacionamento interpessoal, dentre outros. Ademais, são aprofundadas no treinamento aspectos fundamentais para esse preparo, a exemplo, a construção do currículo (erros que não se deve cometer e o que os recrutadores buscam na análise curricular), o uso profissional do LinkedIn e de outras redes sociais, a postura profissional adequada, a importância de se conhecer a empresa, a cultura organizacional e o cargo ao qual está se candidatando. Apresentamos ainda quais são as ferramentas comumente utilizadas em processos seletivos e como se preparar para as diferentes etapas, abordando técnicas e hacks da gestão emocional para lidar com a ansiedade e nervosismo durante o processo.",
      menuImage: menuImage1,
      image: detailImage1,
    },
    {
      id: 4,
      title: "Gestão de Pessoas",
      description:
      "O Treinamento de Gestão de Pessoas parte de noções básicas acerca da diferença entre as ações nas áreas de Recursos Humanos e Gestão de Pessoas para desenvolver a aprofundar aspectos relacionados aos objetivos da GP em uma organização. Assim, o treinamento perpassa questões como a importância de elementos como empatia, harmonia e comunicação, a cultura de feedback e a confidencialidade das informações que chegam à GP. Além disso, são aprofundadas diversas estratégias eficazes ao bom funcionamento da Gestão de Pessoas, tais como o recrutamento e seleção interno da empresa, o uso de formulários como aliado na comunicação interna, estratégias de gamification, o reconhecimento dos membros, os dias de imersão e confraternização, o uso da pesquisa de clima organizacional e do plano de desenvolvimento individual, os processos de recebimento e desligamento de membros, dentre outras ferramentas de acompanhamento dos membros durante a permanência na empresa. ",
      menuImage: menuImage1,
      image: detailImage1,
    },
    {
      id: 5,
      title: "Comunicação e Oratória",
      description:
      "O Treinamento de Comunicação e Oratória visa abordar aspectos pertinentes à essa temática e ainda estimular e ensinar técnicas de melhoria de tais habilidades. Começa com uma introdução sobre o que é a comunicação e a história da oratória, passa pelas habilidades interpessoais necessárias para que a comunicação se estabeleça e afirma a importância de uma comunicação assertiva, principalmente no contexto organizacional. O treinamento também aborda aspectos da comunicação não violenta, etapas para que ela seja empregada, além de versar sobre um antigo conhecido das organizações: o feedback e as melhores maneiras de implementá-lo. O Treinamento de Comunicação e Oratória também conta com duas dinâmicas que têm como objetivos exemplificar e reforçar os aspectos abordados durante a explicação teórica.",
      menuImage: menuImage1,
      image: detailImage1,
    },
    {
      id: 6,
      title: "Saúde Mental",
      description:
      "O Treinamento de Saúde Mental cobre diversos aspectos, começando com concepções gerais e determinantes sociais do adoecimento psíquico. Discute fatores de risco e proteção, a importância da saúde mental nas organizações (tanto seniores quanto juniores), e o impacto da pandemia. Também explora práticas de saúde mental nas empresas, como reconhecimento dos membros, feedback, acompanhamento periódico e planos de desenvolvimento pessoal, trazendo dicas e maneiras de colocar em prática. Também são abordadas práticas individuais de saúde mental, oferecendo dicas e técnicas para autocuidado, autogestão e organização da vida diária. Além disso, introduz a psicoterapia individual, detalhando seu funcionamento, importância e como procurar ajuda, com recursos para situações de emergência.",
      menuImage: menuImage1,
      image: detailImage1,
    },
  ];

  // Estado para controlar o treinamento selecionado
  const [treinamentoAtivo, setTreinamentoAtivo] = useState(treinamentos[0]);

  // Função para atualizar o estado quando o usuário clica no menu
  const handleMenuClick = (treinamento) => {
    setTreinamentoAtivo(treinamento);
  };

  return (
    <div className="training-box">
      <h2 className="title-training">Nossos Treinamentos</h2>
      <div className="training-container">
        <div className="training-menu">
            {treinamentos.map((treinamento) => (
            <div
                key={treinamento.id}
                className={`training-menu-item ${
                treinamento.id === treinamentoAtivo.id ? "active" : ""
                }`}
                onClick={() => handleMenuClick(treinamento)}
            >
                <img
                src={treinamento.menuImage}
                alt={treinamento.title}
                className="training-menu-image"
                />
                <p>{treinamento.title}</p>
            </div>
            ))}
        </div>

        <div className="training-details">
            <img
            src={treinamentoAtivo.image}
            alt={treinamentoAtivo.title}
            className="training-detail-image"
            />
            <div className="training-description">
            <h2 className="training-title">{treinamentoAtivo.title}</h2>
            <p className="training-text">{treinamentoAtivo.description}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Training;