import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import robot from '../grafics/robot.png'
import { db } from './firebase';
import { NavLink } from 'react-router-dom';
import Aside from '../components/aside_menu';
import Content from '../components/content';

const Error404 = () => {
    document.title = "Erro 4040 | Eco - Bionics"
   
    return (
       
            <div className="404 section">
                    <h1>Erro 404 </h1>
            </div>
            
      
    );
};

export default Error404;
