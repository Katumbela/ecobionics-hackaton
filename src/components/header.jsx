import React, { useEffect, useState } from 'react';
import logo from '../img/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollPosition = window.scrollY;

      const progress = (scrollPosition / fullHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsNavFixed(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%`, zIndex: '99999' }}>
        <div className="scroll-progress-indicator"></div>
      </div>

      <nav className={`navbar navbar-expand-md text*-dartk navbar-light ${isNavFixed ? 'fixed-nav' : ''}`}>

        
          <div className="container">
            <NavLink to={'/'}>
            <img src={logo} className='logoo' alt="" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto my-auto mb-2 mb-lg-0">
                <li className="nav-item my-auto">
                  <NavLink className="nav-link my-auto active" aria-current="page" href="#">NGO's</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/srcs'} className="nav-link" href="#">For SRC</NavLink>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Maintenance</a>
                </li>
               
               
              </ul>
              <div className="d-flex gap-4" >
                <NavLink to="/login" className='my-auto login-b'>Login</NavLink>               
                <button className="btn bg-success text-white rounded-0 btn-outline-success" type="submit">Donate</button>
              </div>
            </div>
          </div>
        </nav>

      {/* Estilos CSS */}
      <style>
        {`
          .fixed-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #070707d5;
            z-index: 999;
          }
          .navbar-toggler {
            box-shadow: none!important;
            cursor: pointer;
            z-index: 99999999;
          }
        `}
      </style>

    </>
  );
};

export default Header;
