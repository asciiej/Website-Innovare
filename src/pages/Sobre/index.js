import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Sobre-sections/Banner';
import Mvv from '../../components/Sobre-sections/Mvv';
import	TimeLine from '../../components/Sobre-sections/TimeLine';
import Team from './../../components/Sobre-sections/team';
import Historia from '../../components/Sobre-sections/Historia';

function Sobre() {
  return (
    <div className="Sobre">
      <Header />
      <Banner />
      <Historia />
      <TimeLine />
      <Mvv />
      <Team />
      <Footer />
    </div>
  );
}

export default Sobre;