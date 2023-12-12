import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { NavLink } from 'react-router-dom';
import Aside from '../components/aside_menu';
import Content from '../components/content';

const Dashboard = () => {
    document.title = "Dashboard Eco - Bionics"
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            const getUserData = async () => {
                try {
                    const docRef = doc(db, 'users', userId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setUserData(docSnap.data());
                    } else {
                        console.log('Documento não encontrado!');
                    }
                } catch (error) {
                    console.error('Erro ao obter os dados do usuário:', error);
                }
            };

            getUserData();
        }
    }, []);


    return (
        <>
            
            <div className="panel">
                <div className="row">
                    <div className="col-12 col-md-1">
                        <Aside/>
                    </div>
                    <div className="col-12 contentt col-md-11">
                        <Content />
                    </div>
                </div>
            </div>
            <div className="suport cursor-pointer " title='Contactar suporte'>
                <i className="bi bi-headset"></i>
            </div>
        </>
    );
};

export default Dashboard;
