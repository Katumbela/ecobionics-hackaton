import React, { useState } from 'react';
import '../components/cabeca.css'
import b from '../img/logo.png';
import banner from '../img/222.png';
import katumbela from '../img/katumbela.JPG';
import tavares from '../img/tavares.jpeg';
import b2 from '../img/22.png';
import Swal from 'sweetalert2';
import q1 from '../img/1.png';
import q2 from '../img/2.png';
import q3 from '../img/3.png';
import q4 from '../img/4.png';
import q5 from '../img/444.png';
import bann_eco from '../img/bann_eco.jpg';
import hands1 from '../img/hands.webp';
import hands2 from '../img/hands2.png';
import m4 from '../img/m4.jpeg';
import c1 from '../img/c1.jpeg';
import p2p from '../img/p2p.jpeg';
import s2 from '../img/s2.jpeg';
import cc2 from '../img/cc2.png';
import card from '../img/cardd.png';
import w from '../img/w.jpeg';
import s1 from '../img/s1.png';

import sendd from '../img/send.png';

import Slide from 'react-reveal/Slide';
import purp from '../img/purp.png';
import logoo from '../img/logoo.png';
import hero from '../img/222.png';
import Header from '../components/header';
import Footer from '../components/footer';
import db from './firebase';
import Hero from '../components/hero';
import ScrollableSection from '../components/scroll_items';
import { Fade, Roll } from 'react-reveal';
import { NavLink } from 'react-router-dom';


function Home() {

  return (

    <>
      <Header />

      <style>
        {`
          .hero {
           
            height: 550px;
            width: 100%;
            background: linear-gradient(90deg, #1010109e, #1010109e), url(${banner});
            background-size: cover;
            background-position: center center
          
           
          }

        `}
      </style>

      <div className="hero">
        <div className="row">
          <div className="col-lg- col-md-6">

          </div>
          <div className="col-lg- container col-md-6 centro ">
            <h1 className='my-auto'>ECOBIONICS</h1>
            <p>
              Inovações sustentáveis ​​e soluções biônicas. Produtos eco-amigáveis ​​que unem tecnologia e natureza para um futuro mais verde.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="s-b">
        <center>
          <Slide top cascade>
            <h1 style={{ fontWeight: 'bolder', color: '#80cc09' }}>About Binonic Prothesis </h1>

          </Slide>
          <div className="borda bg-success rounded-pill" style={{ height: '.5rem', width: '5rem' }}></div>
          <br />

          <p className='w-75 f-20'>
            Welcome to EcoBionics - Transforming Lives, Shaping the Future.
            Discover our passion for prosthetic innovation, offering quality solutions that empower and inspire.
          </p>

          <br />
          <div className="d-flex justify-content-center gap-4">
            <NavLink to={'/ngos'} className="btn rounded-0 btn-success">For NGO <i className="bi bi-arrow-right-short"></i></NavLink>
            <NavLink to={'srcs'} className="btn rounded-0 btn-outline-success">For SRC <i className="bi bi-arrow-right-short"></i></NavLink>
          </div>
        </center>
      </div>
      <br />
      <br />

      <div className="square text-center container-fluid">
        <div className="row">
          <Roll left >
            <div className="col-12 p-2 quad col-sm-6 center col-md-3">
              <img className="w-100 " src={q1} alt="" />
              <br />
              <p className="text-secondary span">Arms</p>
            </div>
            <div className="col-12 p-2 quad col-sm-6 center col-md-3">
              <img className="w-100 " src={q2} alt="" />
              <br />
              <p className="text-secondary span">Legs</p>
            </div>
            <div className="col-12 p-2 quad col-sm-6 center col-md-3">
              <img className="w-100 " src={q3} alt="" />
              <br />
              <p className="text-secondary span">Arms</p>
            </div>
            <div className="col-12 p-2 quad col-sm-6 center col-md-3">
              <img className="w-100 " src={q4} alt="" />
              <br />
              <p className="text-secondary span">Fingers</p>
            </div>
          </Roll>
        </div>
      </div>
      <center>

        <br />
        <Fade right cascade>
          <h1 style={{ fontWeight: 'bolder', color: '#80cc09' }}>The Product </h1>

        </Fade>
        <div className="borda bg-success rounded-pill" style={{ height: '.5rem', width: '5rem' }}></div>
        <br />
      </center>


      <div className="f-bann">
        <div className="row container">
          <div className="col-12 text-center col-md-6">
            <Slide left>
              <img src={b2} alt="" className='w-75' />

            </Slide>
          </div>
          <div className="col-12 py-5 col-md-6">
            <Fade left cascade>
              <p className="f-22 my-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta deserunt natus minus corporis praesentium? Cumque culpa quasi, quisquam maiores.

              </p>

              <br />
              <button className="btn btn-outline-success bg-success text-white rounded-0 "> Submit an Inquiry <i className="bi bi-arrow-right-short"></i></button>

            </Fade>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="f-bann">
        <div className="row flex-row-reverse  container">
          <div className="col-12 text-end col-md-5">
            <Slide right >
              <img src={q5} alt="" className='w-75' />

            </Slide>
          </div>
          <div className="col-12 text-end py-5 col-md-7">
            <Fade left cascade>
              <p className="f-22 my-4 ms-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta deserunt natus minus corporis praesentium? Cumque culpa quasi, quisquam maiores.

              </p>
            </Fade>

            <br />

          </div>
        </div>
      </div>

      <div className="banne position-relative">
        <div className="shade"></div>
        <img src={bann_eco} alt="" className='w-100' />
        <center>
          <button className="btn mx-auto btn-outline-success bg-success text-white rounded-0 "> Submit an Inquiry <i className="bi bi-arrow-right-short"></i></button>

        </center>
      </div>
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <Slide bottom>
            <img src={hands1} alt="" className='w-75' />
            </Slide>
          </div>
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-5">
           <Slide bottom>
           <img src={hands2} alt="" className='w-75' />
           </Slide>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>

  );
}

export default Home;
