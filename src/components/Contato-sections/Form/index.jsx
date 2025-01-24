import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

//importação de icons
import whatsapp from '../../../assets/images/Contato/whatsapp.png';
import instagram from '../../../assets/images/Contato/insta.png';
import linkedin from '../../../assets/images/Contato/linkedin.png';

function Form(){
    const [formData, setFormData] = useState({
        nome: '',
        empresa: '',
        celular: '',
        email: '',
        assunto: '',
        mensagem: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            nome: formData.nome,
            empresa: formData.empresa,
            celular: formData.celular,
            email: formData.email,
            assunto: formData.assunto,
            mensagem: formData.mensagem,
        };

        emailjs
            .send(
                'service_xfdunn4', // Substitua pelo Service ID
                'template_w454bid', // Substitua pelo Template ID
                templateParams,
                'Ob00zP9OF3wUn-HiK' // Substitua pela chave publica
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSuccessMessage('Mensagem enviada com sucesso!');
                    setFormData({
                        nome: '',
                        empresa: '',
                        celular: '',
                        email: '',
                        assunto: '',
                        mensagem: '',
                    });
                },
                (error) => {
                    console.error('FAILED...', error);
                    setErrorMessage('Erro ao enviar mensagem. Tente novamente mais tarde.');
                }
            );
    };

    return(
        <>
        <div className='background-section'>
            <h1>ENTRE EM CONTATO</h1>
        </div>
        <div className='contact-section'>
            <div className='container-contact'>
                <div class="left-container">
                    <div className='division-form'></div>
                    <h3>Siga nas redes sociais</h3>
                    <ul class="social-media-form">
                        <li className='icon-social'>
                            <a href='https://api.whatsapp.com/send/?phone=5534998786615&text&type=phone_number&app_absent=0' target='_blank' rel='noopener noreferrer'>
                                <img src={whatsapp} alt='WhatsApp' />
                            </a>
                            <a href='https://www.instagram.com/innovarejr/' target='_blank' rel='noopener noreferrer'>
                                <img src={instagram} alt='Instagram' />
                            </a>
                            <a href='https://www.linkedin.com/company/innovarejr/?originalSubdomain=br' target='_blank' rel='noopener noreferrer'>
                                <img src={linkedin} alt='LinkedIn' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="form-container">
                    <h3>Mande uma Mensagem</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-input">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
                            </div>
                            <div className="form-input">
                                <label htmlFor="empresa">Empresa</label>
                                <input type="text" id="empresa" placeholder="Empresa" value={formData.empresa} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-input">
                                <label htmlFor="celular">Celular</label>
                                <input type="text" id="celular" placeholder="(XX) X XXXX-XXXX" value={formData.celular} onChange={handleChange} />
                            </div>
                            <div className="form-input">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="@email.com" value={formData.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-input">
                            <label htmlFor="assunto">Assunto</label>
                            <input type="text" id="assunto" placeholder="Assunto" value={formData.assunto} onChange={handleChange} />
                        </div>
                        <div className="form-input">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea id="mensagem" placeholder="Mensagem" value={formData.mensagem} onChange={handleChange}></textarea>
                        </div>
                        <button type='submit' className='send-button'>
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                        fill="currentColor"
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Enviar</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Form;