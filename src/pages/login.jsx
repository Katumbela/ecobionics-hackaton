import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import pacotesData from '../components/pacotesData';
import l from '../grafics/tasks.png';
import p from '../img/logo.png';
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db, auth } from './firebase';
import LoadWhite from '../components/c2';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const Entrar = () => {
    const { pacoteId } = useParams();
    const pacote = pacotesData.find((pacote) => pacote.id === Number(pacoteId));
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const history = useNavigate();

    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState('');
    const [l2, setL2] = useState(false);
    const [l3, setL3] = useState(false);

    const handleToggleSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    };

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const maxPalavras = 10; // Defina o limite máximo de palavras
    const handleLogin = async () => {
        setL2(true);
        try {
            // Realize a autenticação usando o Firebase
            // Por exemplo, usando o método signInWithEmailAndPassword
            const userCredentials = await auth.signInWithEmailAndPassword(email, senha);
            const user = userCredentials.user;
    
            // Verifique se o login foi bem-sucedido
            if (user) {
                setIsLoggedIn(true); // Defina como true se o login for bem-sucedido
                setUserId(user.uid); // Defina o ID do usuário se o login for bem-sucedido
                toast.success('Login bem-sucedido!');
    
                setL2(false);
                // Armazene o email e a senha no localStorage
                localStorage.setItem('email', email);
                localStorage.setItem('senha', senha);
    
                // Redirecionar para a página desejada após o login
                window.location.href = '/panel/dashboard';
            } else {
                setL2(false);
                toast.error('Erro ao fazer login. Por favor, verifique suas credenciais.');
            }
        } catch (error) {
            setL2(false);
            toast.error('Erro ao fazer login. Por favor, verifique suas credenciais.');
        }
    };
      
      const checkEmailExists = async (email, senha) => {
        try {
          const querySnapshot = await db.collection('users').where('email', '==', email).get();
          return !querySnapshot.empty;
        } catch (error) {
          console.error('Erro ao verificar se o email existe:', error);
          return false;
        }
      };
      
      const signInWithGoogle = async () => {

        setL3(true);

        const provider = new firebase.auth.GoogleAuthProvider();
        try {
          await firebase.auth().signInWithPopup(provider);
          // You can handle the user login logic here
        } catch (error) {
          console.error(error);
        }
      };
      

    return (
        <>
            <center className="text-white position-absolute pt-3" style={{ position: 'absolute', left: '0', right: '0' }}>
                <NavLink to={'/'} className={'text-white'}>
Back                </NavLink>
            </center>
            <center className="text-white position-absolute pt-3" style={{ position: 'absolute', left: '0', right: '0', bottom: '1rem' }}>
                <span className={'text-white f-12'}>&copy; Eco - Bionics</span>
            </center>
            <div className="cadastro-container">
                <div className="cadastro-imagem">
                    <img src={l} className="w-100" alt="" />
                </div>
                <div style={{ background: '#49494942' }} className="cadastro-login text-center me-md-5 position-relative px-4 pb-4 shadow-lg shadow-light border-1 border-white rounded-4">
                    <center>
                        <img src={p} className="mt-4" style={{ height: '5em' }} alt="" />
                    </center>
                    <div>
                        <h2 className={'mt-1 mx-4 px-4 text-e'}>Welcome back</h2>
                        <div className="text-start">
                            <br />
                            <input
                                type="email"
                                name="nomeCompleto"
                                value={email}
                                className="w-100 form-control rounded-0"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Company email"
                                required
                            />
                        </div>
                        <br />
                        <div className="text-start">
                            <div className="d-flex">
                                <input
                                    placeholder="Password"
                                    type={senhaVisivel ? 'text' : 'password'}
                                    id="senha"
                                    className="form-control rounded-0 "
                                    name="senha"
                                    value={senha}
                                    onChange={(e) => {
                                        setSenha(e.target.value);
                                    }}
                                />
                                <div
                                    className=""
                                    style={{ height: '2.3em', cursor: 'pointer', background: 'none', border: 'none' }}
                                    onClick={handleToggleSenha}
                                >
                                    {senhaVisivel ? (
                                        <div className="px-2 py-2 my-auto">
                                            {' '}
                                            <i className="bi bi-eye-slash my-auto text-danger"></i>{' '}
                                        </div>
                                    ) : (
                                        <div className="px-2 my-auto py-2">
                                            <i className="bi my-auto bi-eye text-white"></i>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Adicione campos adicionais para email e telefone */}
                        <button disabled={l2} type="button" onClick={handleLogin} className="btn-success my-4 rounded-0 btn" style={{ position: '', bottom: '1rem', right: '1rem' }}>
                            {
                                l2 == false ?
                                    <span>login</span>
                                    :
                                    <span className='d-flex gap-2'>
                                        <LoadWhite /> <span className='text-white'>Loging in...</span>
                                    </span>
                            }
                        </button>
                        <br />
                        {/* Adicione botao de login com google */}
                       
                        <a className={'text-white f-12'}>
                            Create account<i className="bi bi-arrow-right-short"></i>{' '}
                        </a>
                    </div>
                </div>
            </div>

            <ToastContainer />

        </>
    );
};

export default Entrar;
