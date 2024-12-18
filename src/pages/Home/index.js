import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Home-sections/Hero';
import Parcerias from '../../components/Home-sections/Parcerias';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Parcerias />
      <Footer />
    </div>
  );
}

export default Home;