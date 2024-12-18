import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Sobre-sections/Banner';
import Mvv from '../../components/Sobre-sections/Mvv';

function Sobre() {
  return (
    <div className="Sobre">
      <Header />
      <Banner />
      <Mvv />
      <Footer />
    </div>
  );
}

export default Sobre;