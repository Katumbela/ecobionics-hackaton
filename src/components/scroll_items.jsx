import React, { useEffect } from 'react';
import { Link, animateScroll, scrollSpy } from 'react-scroll';
import Hero from './hero';
import lista from '../grafics/lista.png'
import tasks from '../grafics/tasks.png'
import int from '../grafics/int.svg'
import kali from '../img/kali.png';
import cris from '../img/cristovao.jpeg';
import marcos from '../img/marcos.jpeg';
import katu from '../img/katumbela.JPG';
import seta from '../grafics/baixo.svg'
import Pacotes from './pacotes';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const ScrollableSection = () => {
   
    useEffect(() => {
        AOS.init(); // Inicialize a biblioteca AOS
      }, []);
    

    return (
        <div id="">
            <div className="section position-relative text-white section1">
                <Hero />



            </div>
            <div id='packages' className="py-4 py-md-0 prices position-relative text-white ">
                <div className="">

                    <center> <h2 className="text-e tit">Pacotes & Preços</h2> <br /></center>

                    <Pacotes />
                </div>
            </div>
            <div id='features' className="section position-relative text-white section0">
                <div className="hero-container">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6 py-md-5">
                                <h1 data-aos="fade-up" className="hero-title t-c">Integração & Comunicação </h1>
                                <p  data-aos="fade-up" className="hero-subtitle">Integre WhatsApp, Gmail e Google Meet para uma comunicação fluida, produtiva e conectada. Otimize suas interações e aumente sua eficiência.</p>
                            </div>
                            <div className="col-md-6">
                                <img  data-aos="fade-zoom-in" src={int} className="img-fluid bg- rounded-5" alt="Imagem do banner" />
                            </div>
                        </div>
                    </div>

                    {/* Estilos CSS */}
                    <center>
                        <div className="seta w-100 seta1">
                            <img src={seta} alt="" />
                        </div>
                    </center>
                </div>

            </div>
            <div className="section position-relativetext-white section2">
                <div className="hero-container">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-md-6 py-md-5">
                                <h1 data-aos="fade-up" className="hero-title t-c">Organize tarefas </h1>
                                <p data-aos="fade-left" className="hero-subtitle">Simplifique sua vida e aumente sua produtividade! Organize tarefas de forma eficiente em nossa plataforma intuitiva. Gerencie projetos, defina prazos e atribua responsáveis. Nunca mais perca uma tarefa importante. Experimente agora e descubra como ser produtivo pode ser fácil</p>
                            </div>
                            <div className="col-md-6">
                                <img src={lista} data-aos="fade-zoom" className="img-fluid bg-white rounded-5" alt="Imagem do banner" />
                            </div>
                        </div>
                    </div>
                    <center>
                        <div className="seta w-100 seta2">
                            <img src={seta} alt="" />
                        </div>
                    </center>
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
                </div>
            </div>
            <div id='' className="section position-relative text-white section3">
                <div className="hero-container">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6 py-md-5">
                                <h1 data-aos="fade-up" className="hero-title t-c"> Multiplos projectos </h1>
                                <p data-aos="fade-right" className="hero-subtitle">Gerencie projetos eficientemente e alcance resultados extraordinários! Com nosso gestor, acompanhe tarefas, colabore em equipe e garanta o sucesso. Simplifique sua gestão e conquiste objetivos com facilidade.</p>
                            </div>
                            <div className="col-md-6">
                                <img data-aos="fade-left" src={tasks} className="img-fluid bg- rounded-5" alt="Imagem do banner" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id='sobre' className="section position-relative text-white section4">
                <div className="hero-container">
                    <div className="container">
                        <div className="row align-items-start ">
                            <div className="col-md-3 col-12 py-md-5">
                                <h1 className="hero-title t-c"> Sobre </h1>
                                <p className="hero-subtitle f-14"></p>
                            </div>
                            <div className="col-md-9 col-12">
                                <div className="carr">
                                    <h3 data-aos="fade-up">Nossa equipe ajuda os negócios a terem sucesso</h3>
                                    <p data-aos="fade-up" className="f-13 w-75">Conte com a nossa equipe para impulsionar o sucesso do seu negócio. Somos especialistas comprometidos em fornecer soluções personalizadas que elevam a sua empresa a novos patamares. Com experiência e conhecimento abrangentes, trabalhamos em conjunto com você, entendendo suas necessidades e desafios, para criar estratégias eficazes que geram resultados positivos. </p>
                                    {/* <div
                                        className="owl-theme owl-carousel"

                                    >
                                       
                                    </div> */}
                                    <br />
                                    <OwlCarousel data-aos='fade-left' navText={true} responsiveClass={true}
                                        className="owl-theme owl-carousel mt-3"
                                        loop={false}
                                        nav={true}
                                        margin={8} >
                                        <div className='item'>
                                            <img src={cris} className="w-100" alt="" />
                                            <div className="body">
                                                <b>Cristovão Cacombe</b>
                                                </div>
                                        </div>
                                        <div className='item'>
                                            <img src={katu} className="w-100" alt="" />
                                            <div className="body">
                                                <b>João A. Katombela</b>
                                                </div>
                                        </div>
                                        <div className='item'>
                                            <img src={kali} className="w-100" alt="" />

                                            <div className="body">
                                                <b>Jonilson Correia</b>
                                                </div>
                                        </div>
                                        <div className='item'>
                                            <img src={marcos} className="w-100" alt="" />
                                            <div className="body">
                                                <b>Marco Zeca</b>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ScrollableSection;
