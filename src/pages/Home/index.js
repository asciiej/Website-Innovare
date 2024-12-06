import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="Home">
      <Header />
        <div>
          <h2>Bem-vindo à Home</h2>
        </div>
      <Footer />
    </div>
  );
}

export default Home;