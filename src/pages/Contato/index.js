import React from 'react';
import './contato.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from '../../components/Contato-sections/Form';

function Contato() {
  return (
    <div className="Contato">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default Contato;