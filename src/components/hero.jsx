import React from 'react';
import logo from '../img/logo.png';
import bannerImage from '../grafics/foguete.svg';
import seta from '../grafics/baixo.svg';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 py-md-5">
                        <h1 className="hero-title t-c">Gestor de Projetos</h1>
                        <p className="hero-subtitle t-c">Gerencie seus projetos de forma eficiente. Teste gratuitamente por 30 dias</p>
                       <div className="t-c py-2">
                       <a href="#packages" className="btn t-c btn-outline-primary rounded-pill btn-lg">Faça teste grátis   <i className="bi bi-arrow-right-short"></i></a>
                       </div>
                    </div>
                    <div className="col-md-6">
                        <img src={bannerImage} className="img-fluid " alt="Imagem do banner" />
                    </div>
                </div>
            </div>

            {/* Estilos CSS */}
            <style>
                {`
          .hero-container {
            color: white;
            padding: 80px 0;
          }

          .hero-title {
            font-size: 3.5rem;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 30px;
          }

          @media (max-width: 767px) {
            .hero-title {
              font-size: 2.5rem;
            }

            .hero-subtitle {
              font-size: 1.25rem;
            }
          }
        `}
            </style>
            <center>
                <div style={{bottom:'3rem'}} className="seta w-100 seta1">
                    <img src={seta} alt="" />
                </div>
            </center>
        </div>
    );
};

export default Hero;
