import React from 'react';
import Header from '../../components/Header';
import Banner from './../../components/Portifolio-section/Banner' 
import IntroWorkshop from './../../components/Portifolio-section/IntroWorkshop'
import RecruSelecao from '../../components/Portifolio-section/Recru&Seleção';
import ClimaOrganizacional from '../../components/Portifolio-section/ClimaOrgan';
import OrientacaoProfissional from '../../components/Portifolio-section/OrientaçãoProfissional';
import Training from '../../components/Portifolio-section/Training';
import Footer from '../../components/Footer';

function Portfolio() {
  return (
    <div className="Portfolio">
      <Header />
      <Banner />
      <IntroWorkshop />
      <RecruSelecao />
      <Training />
      <ClimaOrganizacional />
      <OrientacaoProfissional />
      <Footer />
    </div>
  );
}

export default Portfolio;