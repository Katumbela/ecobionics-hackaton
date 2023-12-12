// Create a new component named ForgotPassword.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadWhite from '../components/c2';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async () => {
        setLoading(true);
        try {
            await auth.sendPasswordResetEmail(email);
            toast.success('Um e-mail de redefinição de senha foi enviado para o seu endereço de e-mail.');
        } catch (error) {
            console.error(error);
            toast.error('Erro ao enviar e-mail de redefinição de senha. Verifique o endereço de e-mail.');
        }
        setLoading(false);
    };

    return (
        <>
            <center className="text-white position-absolute pt-3" style={{ position: 'absolute', left: '0', right: '0' }}>
                <NavLink to={'/entrar'} className={'text-white'}>
                    Voltar
                </NavLink>
            </center>
            <center className="text-white position-absolute pt-3" style={{ position: 'absolute', left: '0', right: '0', bottom: '1rem' }}>
                <span className={'text-secondary f-12'}>&copy; Eco - Bionics</span>
            </center>
            <div className="cadastro-container">
                <div style={{ background: '#49494942' }} className="cadastro-login text-center me-md-5 position-relative px-4 pb-4 shadow-lg shadow-light border-1 border-white rounded-4">
                    <div>
                        <h2 className={'mt-1 text-e'}>Esqueceu a senha?</h2>
                        <div className="text-start">
                            <br />
                            <input
                                type="email"
                                name="email"
                                value={email}
                                className="w-100 form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Seu e-mail"
                                required
                            />
                        </div>
                        <button disabled={loading} type="button" onClick={handleResetPassword} className="btn-e btn" style={{ position: '', bottom: '1rem', right: '1rem' }}>
                            {loading ? (
                                <span className='d-flex gap-2'>
                                    <LoadWhite /> <span className='text-white'>Enviando...</span>
                                </span>
                            ) : (
                                <span>Enviar e-mail de redefinição</span>
                            )}
                        </button>
                        <br />
                        <NavLink to={'/entrar'} className={'text-white f-12'}>
                            Voltar para o login <i className="bi bi-arrow-right-short"></i>
                        </NavLink>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default ForgotPassword;
