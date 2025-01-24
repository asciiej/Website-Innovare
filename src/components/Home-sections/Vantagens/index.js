import React from 'react';
import './Vantagens.css';

function Vantagens(){
    return (
        <div className='vantagens'>
             <h1>Vantagens de uma Empresa Júnior</h1>
             <div className='containers'>
                <div className='cards'>
                    <div className='cards-vantagens'>
                        <h3 className='subtitulos'>Investimento em Educação</h3>
                        <p>Ao contratar uma Empresa Júnior, o cliente contribui para o desenvolvimento profissional de futuros líderes e especialistas. 
                            O trabalho dos estudantes em projetos reais fortalece suas habilidades práticas.</p>
                    </div>
                    <div className='cards-vantagens'>
                        <h3 className='subtitulos'>Projetos Personalizados</h3>
                        <p>As Empresas Juniores se destacam por adaptar os projetos às necessidades específicas de cada cliente. 
                            Podendo personalizá-lo de acordo com os gostos e desejos da pessoa contratante.</p>
                    </div>
                    <div className='cards-vantagens'>
                        <h3 className='subtitulos'>Custo Benefício</h3>
                        <p>As Empresas Juniores oferecem serviços de qualidade a preços mais acessíveis do que as empresas tradicionais. 
                            Isso ocorre porque seu objetivo não é o lucro, mas sim a experiência prática dos estudantes.</p>
                    </div>
                    <div className='cards-vantagens'>
                        <h3 className='subtitulos'>Conhecimento Técnico</h3>
                        <p>Os Membros de Empresas Juniores são estudantes universitários em contato constante com as recentes teorias, tecnologias e outras práticas. 
                            Isso garante que os projetos sejam desenvolvidos com base em conhecimentos atualizados.</p>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Vantagens;
