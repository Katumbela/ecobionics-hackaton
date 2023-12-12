import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import pacotesData from './pacotesData';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Pacotes = () => {

    useEffect(() => {
        AOS.init(); // Inicialize a biblioteca AOS
      }, []);
    
    return (
        <div>
            <div className="row container">
                {pacotesData.map((pacote) => (
                    <div key={pacote.id} className="col-12 col-sm-6 col-md-4 text-center my-3">
                      <div className="ppack text-start">
                      {pacote.id == 2 ? 
                        <div  data-aos="fade-up" style={{width:'10em', borderTopLeftRadius:'20px', borderTopRightRadius:'20px'}} className='text-center mx-auto py-2 bg-e text-warning'>
                            Recomendado
                        </div>
                        :
                        <div className='text-warning py-2'>
                            <br className='' />
                        </div>
                        }
                        <div className="bg-white position-relative rounded-4 pac px-2 w-100 py-3">
                           <center> <b><h3 className='text-dark'>{pacote.nome}</h3></b></center>
                           <hr />
                           {/* {
                            pacote.id == 2 && <div> <br /> </div>
                           } */}
                            <ul className='text-dark ' style={{marginLeft:'-1rem'}}>
                                {pacote.recursos.map((recurso) => (
                                    <li className='text-dark my-1 f-13' key={recurso}><i className="bi text-e bi-check-circle me-2"></i> {recurso}</li>
                                ))}
                            </ul>
                            <center style={{ position: 'absolute', bottom: '1rem', left: '0', right: '0' }}>
                                <h2 className="text-e">{pacote.preco}</h2>
                                <span className="text-secondary">{pacote.periodo}</span><br />
                                <NavLink className={'btn btn-e rounded-pill'} to={`/cadastro/${pacote.id}`}>Começar teste grátis   <i className="bi bi-arrow-right-short"></i></NavLink>

                            </center>

                        </div>
                      </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pacotes;
