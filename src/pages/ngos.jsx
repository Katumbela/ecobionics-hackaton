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

const Ngos = () => {
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
            <div className="hero-head">
                <h2 className='text-success'><b>FOR NGO's</b></h2>
            </div>

            <br />
            <center>
                <h1 className="text-success"><b>Disability Person Management</b></h1>
            </center>

            <br />
            <div className="container-fluid">

                <div className="row ">
                    <div className="col-12 col-md-3">
                        <button className="btn rounded-0 btn-outline-success">
                            Register a person  <i className="bi bi-arrow-right-short"></i>
                        </button>
                        <br /><br />
                        <button className="btn rounded-0 btn-outline-success">
                            View persons   <i className="bi bi-arrow-right-short"></i>
                        </button>
                    </div>

                    <div className="col-12 col-md-9">
                        <div className="add-tab">
                            <div className="form-ngo  w-100">
                                <div className="text-end mt-4">
                                    <button className="btn btn-sm add-mais btn-success rounded-circle" onClick={adicionarPessoa}>
                                        <i className="bi bi-plus"></i>
                                    </button>
                                </div>

                                {pessoas.map((pessoa, index) => (
                                    <div className="row mt-4" key={index}>
                                        <div className="col-1">
                                            <button
                                                className="btn-sm btn btn-outline-danger rounded-circle"
                                                onClick={() => removerPessoa(index)}
                                            >
                                                <i className="bi bi-x"></i>
                                            </button>
                                        </div>
                                        <div className="col-12 col-sm-3">
                                            <label htmlFor={`nome${index}`}>Full name</label>
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="form-control w-100 rounded-0"
                                                value={pessoa.nome}
                                                onChange={(e) => handleNomeChange(index, e.target.value)}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <label htmlFor={`nome${index}`}>Entire body picture</label>
                                            <input
                                                type="file"
                                                placeholder="Full Name"
                                                className="form-control w-100 rounded-0"

                                            />
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <label htmlFor={`parteDoCorpo${index}`}>Select the body part</label>
                                            <select
                                                id={`parteDoCorpo${index}`}
                                                className="form-control w-100 rounded-0"
                                                onChange={(e) => handleParteDoCorpoChange(index, e.target.value)}
                                                value={pessoa.parteDoCorpo}
                                            >
                                                <option value="" disabled>
                                                    Select
                                                </option>
                                                {partesDoCorpo.map((parte, partIndex) => (
                                                    <option key={partIndex} value={parte}>
                                                        {parte}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                ))}


                                <center>
                                    <br />
                                    <br />
                                    <br />
                                    <button className="btn btn-success rounded-0">Submit</button>
                                </center>
                            </div>
                        </div>

                        <div className="users-tab d-none">

                            <br />
                            <br />

                            <UserList usuarios={lista} />
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

export default Ngos;
