import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Home-sections/Hero';
import QuemSomos from './../../components/Home-sections/QuemSomos-sections'
import Servicos from '../../components/Home-sections/NossosServiços';
import Feedback from '../../components/Home-sections/FeedBack';
import Vantagens from '../../components/Home-sections/Vantagens';
import Parcerias from '../../components/Home-sections/Parcerias';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <QuemSomos />
      <Servicos />
      <Feedback />
      <Vantagens />
      <Parcerias />
      <Footer />
    </div>
  );
}

export default Home;