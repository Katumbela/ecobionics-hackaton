import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import l1 from '../img/logo.png'
import l2 from '../img/logo_p.png'

const Aside = () => {
 

  return (
    <>
      <aside className='bg-white'>
        <div className="mx-auto menu-left">
          <div className="item-img mt-2">
              <img src={l2} alt="" className='im2' />
          </div>
          <NavLink
           
            to={'#'}
            className={'item-menu'}
          >
            <i className="bi bi-speedometer"></i> <span className='span my-auto'>Painel</span>
          </NavLink>
          <NavLink
            to={'#'}
            
            className={'item-menu'}
           
          >
            <i className="bi bi-kanban"></i> <div className='span my-auto'>Projetos</div>
          </NavLink>
          <NavLink
            to={'#'}
            
            className={'item-menu'}
           
          >
            <i className="bi bi-app-indicator"></i> <div className='span my-auto'>Aplicações</div>
          </NavLink>
          <NavLink
            to={'#'}
           
            
            className={'item-menu'}
            
          >
            <i className="bi bi-people"></i><div className='span my-auto'>Equipa</div>
          </NavLink>
          <NavLink
            to={'#'}
            
            className={'item-menu'}
            
          >
            <i className="bi bi-gear"></i> <div className='span my-auto'>Configurações</div>
          </NavLink>
          <NavLink
            to={'#'}
            
            className={'item-menu profile'}
          >

            <i className="bi bi-person"></i> <div className='span my-auto'>Perfil</div>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Aside;
