import React, { useEffect, useRef, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import robot from '../grafics/robot.png'
import { db } from './firebase';
import { NavLink } from 'react-router-dom';
import Aside from '../components/aside_menu';
import Content from '../components/content';
import Header from '../components/header';
import im1 from '../img/user.png';
import Footer from '../components/footer';
import UserListItem from '../components/card';
import UserList from '../components/card';
import UserListm from '../components/card2';

const Srcs = () => {
    document.title = "For NGO's Donate Prothesis | Eco - Bionics"

    const lista = [
        { nome: 'João Silva', foto: im1, disability: 'Amputation of limbs' },
        { nome: 'Maria Oliveira', foto: im1, disability: 'Visual impairment' },
        { nome: 'Carlos Pereira', foto: im1, disability: 'Deafness' },
        { nome: 'Ana Souza', foto: im1, disability: 'Cerebral palsy' },
        { nome: 'Pedro Santos', foto: im1, disability: 'Blindness' },
        { nome: 'Camila Lima', foto: im1, disability: 'Amputation of leg' },
        { nome: 'Rafaela Costa', foto: im1, disability: 'Hearing impairment' },
        { nome: 'Lucas Almeida', foto: im1, disability: 'Reduced mobility' },
        { nome: 'Fernanda Martins', foto: im1, disability: 'Down syndrome' },
        { nome: 'Gustavo Oliveira', foto: im1, disability: 'Autism' },
        { nome: 'Isabela Rocha', foto: im1, disability: 'Intellectual disability' },
        { nome: 'Matheus Pereira', foto: im1, disability: 'Wheelchair user' },
      ];
      
    const selectRef = useRef(null);
    const [parteDoCorpoSelecionada, setParteDoCorpoSelecionada] = useState("");

    const partesDoCorpo = [
        "Hand",
        "Arm",
        "Little finger",
        "Leg",
        "Foot",
        "Thigh",
        "Knee",
        "Hip",
        "Shoulder",
        "Elbow",
        "Forearm",
        "Thumb",
        "Ankle",
        "Shin",
        "Head",
        "Neck",
        "Back",
        "Waist",
        "Index finger",
        // Adicione mais partes do corpo conforme necessário
    ];

    const handleSelecaoParteDoCorpo = (e) => {
        setParteDoCorpoSelecionada(e.target.value);
    };


    // Opções para o select



    const [pessoas, setPessoas] = useState([{ nome: '', parteDoCorpo: '' }]);

    const adicionarPessoa = () => {
        setPessoas([...pessoas, { nome: '', parteDoCorpo: '' }]);
    };

    const handleNomeChange = (index, value) => {
        const novasPessoas = [...pessoas];
        novasPessoas[index].nome = value;
        setPessoas(novasPessoas);
    };

    const handleParteDoCorpoChange = (index, value) => {
        const novasPessoas = [...pessoas];
        novasPessoas[index].parteDoCorpo = value;
        setPessoas(novasPessoas);
    };


    const removerPessoa = (index) => {
        const novasPessoas = [...pessoas];
        novasPessoas.splice(index, 1);
        setPessoas(novasPessoas);
    };


    return (

        <>
            <Header />
            <div className="hero-head2">
                <h2 className='text-success'><b>FOR SRC's</b></h2>
            </div>

            <br />
            <center>
                <h1 className="text-success"><b>Support a Needy</b></h1>
                <div className="borda bg-success rounded-pill" style={{ height: '.5rem', width: '5rem' }}></div>
          
            </center>

            <div className="container-fluid">

                <div className="row ">
                  

                    <div className="col-12">
                       

                        <div className="container text-center">

                            <br />
                            <br />

                            <UserListm usuarios={lista} />
                        </div>

                    </div>

                </div>

            </div>
            <br />
            <br />
            <br />

            <Footer />
        </>



    );
};

export default Srcs;
