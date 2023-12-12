


import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import log from '../img/logo.png'
import use from '../img/katumbela.JPG'
import cristovao from '../img/cristovao.jpeg'
import kali from '../img/kali.png'
import marco from '../img/marcos.jpeg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SketchPicker } from 'react-color';
import { collection, query, where, getDocs } from 'firebase/firestore';
import LoadWhite from './c2';
import LoadE from './c1';
import { db, auth } from '../pages/firebase';
import { ToastContainer, toast } from 'react-toastify';

const ContentTask = () => {
    const [projectName, setProjectName] = useState('');
    const [deadline, setDeadline] = useState(null);
    const [l1, setL1] = useState(false);
    const [foi, setFoi] = useState(false);
    const [user, setUser] = useState(null);
  
  
    const getUserData = async (email) => {
        try {
            // Consulta no Firestore com o e-mail fornecido
            const querySnapshot = await db
                .collection('users')
                .where('email', '==', email)
                .get();
    
            // Verifique se algum documento corresponde à consulta
            if (!querySnapshot.empty) {
                // Obtenha o primeiro documento retornado
                const userDoc = querySnapshot.docs[0];
                const userData = userDoc.data();
    
                // Retorne os dados do usuário
                return userData;
            } else {
                // Usuário não encontrado
                return null;
            }
        } catch (error) {
            console.error('Erro ao obter os dados do usuário:', error);
            return null;
        }
    };

    
    useEffect(() => {
        const email = localStorage.getItem('email');
    
        const fetchData = async () => {
            try {
                if (email) {
                    const userData = await getUserData(email);
                    if (userData) {
                        alert(userData.email);
                        setUser(userData);
                    } else {
                        console.log('Usuário não encontrado');
                    }
                } else {
                    console.log('E-mail do usuário não encontrado no localStorage');
                }
            } catch (error) {
                console.error('Erro ao obter os dados do usuário:', error);
            }
        };
    
        fetchData();
    }, []);
    
    //   termino da requisicao dos dados de usuarioo


    const handleCreateProject = async () => {

        setL1(true)

        if (!projectName || !deadline) {
            alert('Por favor, preencha todos os campos');
            setL1(false);
            return;
        }

        try {
            const newProject = {
                name: projectName,
                deadline: deadline.toISOString(), // Converta a data para o formato de string ISO
                tasks: []
            };

            // Salve o novo projeto no Firestore
            await db.collection('projectos').add(newProject);


            // Limpe os campos do formulário


            setProjectName('');
            setDeadline(null);

            // Feche o modal (você precisa implementar essa parte)
            // closeModal();


            setL1(false)
            setFoi(true)
            toast.success("Projecto Criado com sucesso!")
            setTimeout(() => {
                setFoi(false)
            }, 6000);

        } catch (error) {

            setL1(false);
            toast.error('Ocorreu um erro ao criar o projeto. Por favor, tente novamente.');
        }
    };

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [selectedColor, setSelectedColor] = useState('#000000');

    const handleColorChange = (color) => {
        setSelectedColor(color.hex);
    };

    const handleSaveColor = () => {
        // Aqui você pode salvar a cor selecionada no banco de dados
        console.log('Cor selecionada:', selectedColor);
    };

    const getCurrentGreeting = () => {
        const currentHour = new Date().getHours();
        let greeting = '';
      
        if (currentHour >= 0 && currentHour < 12) {
          greeting = 'Bom dia';
        } else if (currentHour >= 12 && currentHour < 18) {
          greeting = 'Boa tarde';
        } else {
          greeting = 'Boa noite';
        }
      
        return greeting;
      };

      const firstName = user && user.nomeCompleto.split(' ')[0];
      const equipa = user && user.nomeEquipa;


      document.title = `Dashboard ${equipa} | Eco - Bionics`



      const [projectos, setProjectos] = useState([]);

  useEffect(() => {
    const fetchProjectos = async () => {
      try {
        // Consulta no Firestore para obter os projetos da equipe
        const q = query(collection(db, 'projectos'), where('equip', '==', equipa));
        const querySnapshot = await getDocs(q);

        // Mapear os resultados da consulta para um array de projetos
        const projectosData = querySnapshot.docs.map((doc) => doc.data());

        // Definir os projetos no estado
        setProjectos(projectosData);
      } catch (error) {
        console.error('Erro ao obter os projetos:', error);
      }
    };

    fetchProjectos();
  }, [equipa]);


    return (
        <>
            <div className='bg- py-2 content-dash my-auto'>
                <header className='bg-soft rounded-3 border-soft px-3 pt-3'>
                    <div className="d-flex my-auto justify-content-between w-100">
                    <div className='d-flex' style={{height:'3em', alignItems: ''}}>
                        <i className="bi mt-1 me-2 bi-search"></i>
                        <input  type="text" placeholder='Pesquise o que procura' className="i-search input-soft w-100 form-control" />

                    </div>

                            <div className="d-flex gap-4">
                                <div className="cursor-pointer position-relative ">
                                    <bi className="bi-bell  f-24">
                                    <span className="position-absolute my-auto top-1 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                        <span className="visually-hidden">Notificacoes</span>
                                    </span>
                                    </bi>
                                    
                                </div>

                                <div className="position-relative cursor-pointer">
                                    <img src={use} data-bs-toggle="dropdown" aria-expanded="false" style={{ height: '2.2em', width: '2.2em', border: '3px solid #DDDDDD' }} className='rounded-circle dropdown-toggle' alt="" />
                                    
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item text-e" href="#">{user && user.nomeCompleto}</a></li>
                                        <li><a className="dropdown-item" href="#">Perfil</a></li>
                                        <li><a className="dropdown-item" href="#">Privacidade</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Sair</a></li>
                                    </ul>
                                </div>
                            </div>


                    </div>

                </header>
                <br />

                    <div className="d-flex mt-3 gap-3">
                        <div>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn rounded-2 text-dark btn-primary gap-2 d-flex"><i className="bi bi-plus-square"></i> Criar tarefa</button>
                        </div>
                    </div>

                {/* Apresentacao da saudacao */}
                {/* <div className='text-center'>
                    <span className="text-white f-14">{getCurrentGreeting()} {firstName}!</span>
                </div> */}
                {/* Apresentacao da saudacao */}
               
                
                <br />
                
                <div className="corpo-tasks">
                    <div className="row">
                        <div className="col-12 col-md-8 col-xxl-9">
                        <div className="taskss">
                                    <b className="fw-light text-white">
                                        Tarefas
                                    </b>
<br />
<br />
                                    <div className="list-tasks">
                                        <div className="d-flex">
                                            <div className="tit-task pe-1 pe-lg-2 border-soft-right gap-2 d-flex">
                                                <div className="ponto-e my-auto p-1 rounded-circle"></div> 
                                                <b className="fw-light tit-1 ">Fazer o UI do Website da Arotec e implementar</b>
                                            </div>
                                            <div className="tables-tasks d-flex ox-auto">

                                            <div className="table-1 px-3 text-center status d-flex">
                                                <div className="div-status my-auto rounded-pill bg-pending">
                                                    <span className="fw-light">Pendente</span>
                                                </div>
                                            </div>
                                            <div className="table-2 px-3 priority my-auto gap-2 d-flex">
                                                    <div className="priority-normal"></div>
                                                    <span className="tit-1 f-14 f">Normal</span>
                                            </div>
                                            <div className="table-3 px-3 owners position-relative my-auto d-flex">
                                                   <img src={kali} title='Jonilson Correia' className='user-task ' alt="" />
                                                   <img src={cristovao} title='Cristovao Cacombe' className='user-task ' alt="" />
                                                   <img src={marco} title='Marco Zeca' className='user-task ' alt="" />
                                                   <img src={use} title='Joao Afonso Katumbela' className='user-task ' alt="" />
                                                   <div className="mais-x">
                                                            3
                                                   </div>

                                                    <div className="add-u">
                                                    <i className="bi bi-plus"></i>
                                                   </div>
                                            </div>

                                            <div className="table-4 text-end ps-3 options position-relative my-auto d-flex">
                                                    <div  data-bs-toggle="dropdown" aria-expanded="false"   title='Opções da tarefa' className="opt  dropdown-toggle">
                                                        <i className="bi bi-three-dots"></i>
                                                    </div>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Eliminar tarefa </a></li>
                                        <li><a className="dropdown-item" href="#">Mensagem</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        {/* <li><a className="dropdown-item" href="#">Sair</a></li> */}
                                    </ul>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        {/*  Parte de apresentacao de todas as tarefas */}
                        <div className="col-12 oy-auto col-md-4 col-xxl-3">
                         
                            <div className="card-task-message">
                                <div className="d-flex gap-1">
                                    <div className="img pt-2 pt-xxl-1">
                                        <img src={cristovao} style={{height: '2.6em', width:'2.6em'}} alt="" className='border-e rounded-circle' />
                                    </div>
                                    <div className="mess">
                                        <b className="tit-1 f-14">Cristovão Cacombe - <span className="tit-3 fw-light f-12">Just now</span></b>
                                        <p className="f-13 tit-2">
                                            Planos para esta semana, o que vamos fazer no decorrer desta semana
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div> 
                        {/* Menu de apresentacao da terfa na lateral direita */}
                    </div>
                </div>


                
                {/* Modal para adicionar projecto */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <center className="w-100">
                                    <i style={{ fontSize: '60px' }} className="bi text-e bi-kanban"></i>
                                    <h5 className="modal-title" id="exampleModalLabel">Adicionar Projecto</h5>
                                </center><br />

                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <p>
                                            <label htmlFor="" className="text-secondary f-10">Nome do projeto</label>
                                            <input
                                                type="text"
                                                className="form-control rounded-1"
                                                value={projectName}
                                                onChange={(e) => setProjectName(e.target.value)}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <p>
                                            <label htmlFor="" className="text-secondary f-10">Deadline do projeto</label>
                                            <DatePicker
                                                className='form-control'
                                                selected={deadline}
                                                onChange={(date) => setDeadline(date)}
                                                minDate={new Date()} // Define a data mínima como a data atual
                                                dateFormat="dd/MM/yyyy" // Formato da data exibida
                                            />
                                        </p>
                                    </div>
                                    <div className="col-12 col-sm-12">
                                        <center>
                                            <button className="btn btn-e d-flex gap-2" onClick={handleCreateProject}>
                                                {l1 == false ? <span>Criar Projeto</span> : <LoadWhite />}

                                            </button>
                                            {foi == true && <div>
                                                <br />

                                                <div className="alert alert-success">Projecto criado com sucess!</div>

                                            </div>}
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-between d-flex">
                                <img src={log} style={{ height: '1.5rem', }} alt="" />

                                <button type="button" className="btn btn-danger rounded-1" data-bs-dismiss="modal">Cancelar</button>

                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default ContentTask;
