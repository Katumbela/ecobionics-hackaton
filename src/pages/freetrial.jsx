import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';

import { useNavigate, useParams } from 'react-router-dom';
import pacotesData from '../components/pacotesData';
import l from '../grafics/tasks.png'
import p from '../grafics/p.png'
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from './firebase';

const FreeTrial = () => {
    const { pacoteId } = useParams();
    const pacote = pacotesData.find((pacote) => pacote.id === Number(pacoteId));
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const history = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleToggleSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    };

    const [membrosEquipa, setMembrosEquipa] = useState('');
    const [palavras, setPalavras] = useState([]);

    const handleInputChange = (event) => {
        setMembrosEquipa(event.target.value);
    };


    const maxPalavras = 10; // Defina o limite máximo de palavras


    const handleKeyDown = (event) => {
        if (event.key === ' ') {
            event.preventDefault();
            const novaPalavra = membrosEquipa.trim();
            if (novaPalavra !== '') {
                const novasPalavras = [...palavras, novaPalavra];
                const palavrasLimitadas = novasPalavras.slice(-maxPalavras); // Manter apenas os últimos 10 elementos
                setPalavras(palavrasLimitadas);
                setFormData({ ...formData, membrosEquipa: palavrasLimitadas });
                setMembrosEquipa('');
            }
        }
    };


    const handleRemovePalavra = (index) => {
        const palavrasAtualizadas = [...palavras];
        palavrasAtualizadas.splice(index, 1);
        setPalavras(palavrasAtualizadas);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        senha: '',
        area: '',
        outraArea: '',
        numTeam: '',
        emailU: '',
        telefone: '',
        nomeEquipa: '',
        fotoPerfil:'',
        areaAtuacao: '',
        membrosEquipa: [],
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Enviar os dados para o Firestore
            const docRef = await addDoc(collection(db, 'users'), formData);
            console.log('Documento criado com ID:', docRef.id);

            // Exibir toast de sucesso
            toast.success('Cadastro realizado com sucesso!', {
                position: 'bottom-right',
                autoClose: 3000,
            });

            // Salvar o ID do usuário no localStorage
            localStorage.setItem('userId', docRef.id);

            // Redirecionar para o dashboard
            Navigate('/dashboard');

            setLoading(false);
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
            setLoading(false);
        }
    };

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    

    return (
        <>
         
            <center className='text-white position-absolute pt-3' style={{ position: 'absolute', left:'0', right:'0' }}>
                <NavLink to={'/'}  className={'text-white'}>Voltar</NavLink>
            </center>
            <div className="cadastro-container">

                <div className="cadastro-imagem">
                    <img src={l} className='w-100' alt="" />
                </div>
                <div className="cadastro-formulario me-md-5 position-relative rounded-4">
                    <center>
                        <img src={p} className='mt-4' style={{ height: '5em' }} alt="" />
                    </center>
                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <>
                                <h2 className={'mt-1'}>Teste Grátis: <span className="text-e">{pacote.nome}</span></h2>

                                <label htmlFor="" className='f-10 text-secondary'>Nome completo</label>
                                <input
                                    type="text"
                                    name="nomeCompleto"
                                    value={formData.nomeCompleto}
                                    className='w-100 form-control'
                                    onChange={handleChange}
                                    placeholder="Nome Completo"
                                    required
                                />
                                <label htmlFor="" className='f-10 mt-2 text-secondary'>Seu Email</label>
                                <input type='email'
                                    name="emailU" className='form-control'
                                    value={formData.emailU}
                                    onChange={handleChange}
                                    placeholder="Seu email de contacto"
                                />
                                <label className='f-10 text-secondary' htmlFor="senha">Senha</label>
                                <div className='d-flex'>
                                    <input placeholder='Crie uma senha'
                                        type={senhaVisivel ? 'text' : 'password'}
                                        id="senha" className='form-control ' name='senha'
                                        value={formData.senha}
                                        onChange={handleChange}
                                    />
                                    <div className='my-auto' style={{ height: '2.3em',cursor:'pointer', background: 'none', border: 'none' }} onClick={handleToggleSenha}>
                                        {senhaVisivel ? <div className='px-2 my-auto'> <i className="bi bi-eye-slash my-auto text-danger"></i> </div> : <div className='px-2 my-auto'><i className="bi my-auto bi-eye text-e"></i></div>}
                                    </div>
                                </div>
                                {/* Adicione campos adicionais para email e telefone */}
                                <button type="button" className='btn-e btn' style={{ position: 'absolute', bottom: '1rem', right: '1rem' }} onClick={nextStep}>Próximo</button>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <h2 className={'mt-1'}>Teste Grátis: <span className="text-e">{pacote.nome}</span></h2>
                                <label htmlFor="nomeEquipa" className="f-10 mt-1 text-secondary">Nome da sua equipa/Team/Empresa</label>
                                <input
                                    type="text"
                                    name="nomeEquipa" className='form-control'
                                    value={formData.nomeEquipa}
                                    onChange={handleChange}
                                    placeholder="Nome da Equipa/Empresa"
                                    required
                                />
                                <label htmlFor="numTeam" className="f-10 mt- text-secondary">Numero de membros da sua equipa/Empresa</label>
                                <select name="numTeam" id="" value={formData.numTeam} onChange={handleChange} className="form-control">
                                    <option value="">Selecione</option>
                                    <option value="0-5">0-5</option>
                                    <option value="6-10">6-10</option>
                                    <option value="11-40">11-40</option>
                                    <option value="+40">40+</option>
                                </select>
                                {formData.numTeam != '' && <span className="f-12 text-secondary">Seu team/empresa tem de {formData.numTeam} membros / funcionários</span>}
                                {/* Adicione campos adicionais para tamanho da equipa e área de atuação */}

                                <label htmlFor="numTeam" className="f-10 mt- text-secondary">Área de atuação da empresa</label>
                                <select name="area" id="" value={formData.area} onChange={handleChange} className="form-control">
                                    <option value="">Selecione</option>
                                    <option value="Finanças">Finanças</option>
                                    <option value="Tecnologia">Tecnologia</option>
                                    <option value="Informática">Informática</option>
                                    <option value="TI">TI</option>
                                    <option value="Mobilidade">Mobilidade</option>
                                    <option value="Imobiiaria">Imobiliaria</option>
                                    <option value="Outro">Outro</option>
                                </select>

                                {/* Adicione campos adicionais para tamanho da equipa e área de atuação */}
                                {formData.area == 'Outro' && <div>    <input
                                    type="text"
                                    name="outraArea" className='form-control'
                                    value={formData.outraArea}
                                    onChange={handleChange}
                                    placeholder="Indique a área da sua Equipa/Empresa"
                                    required
                                /></div>}

                                <div className="btns d-flex justify-content-between">

                                    <button type="button" className='btn btn-e' onClick={prevStep}>Anterior</button>
                                    <button type="button" className='btn btn-e' onClick={nextStep}>Próximo</button>
                                </div>
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <h2 className={'mt-1'}>Último passo (Opcional)</h2>
                                <label htmlFor="membrosEquipa" className='text-secondary f-10'>Membros da Equipe (Máx. 10)</label>
                                <textarea
                                    name="membrosEquipa"
                                    value={membrosEquipa}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    className='form-control mb-3'
                                    placeholder="Adicione membros da equipe por email (opcional)"
                                />
                                <div>
                                    <div className="d-flex gap-1 flex-wrap">
                                        {palavras.map((palavra, index) => (
                                            <span title={`clique para remover ${palavra}`} className='text-white border-1 border-dark rounded-pill px-2'
                                                key={index}
                                                style={{ cursor: 'pointer', backgroundColor: '#5271FF', marginRight: '5px', padding: '3px' }}
                                                onClick={() => handleRemovePalavra(index)}
                                            >
                                                {palavra}
                                            </span>
                                        ))}

                                    </div>
                                    <span className="text-danger f-12">
                                        {palavras.length >= maxPalavras && <p><br /> Atingiu o limite de emails em massa. clique nos emails para remover</p>}
                                    </span>
                                </div>
                                {/* Adicione campos adicionais para membros da equipe */}

                                <div className="btns d-flex justify-content-between">
                                    <button className='btn btn-e' type="button" onClick={prevStep}>Anterior</button>
                                    <button className='btn btn-e' type="submit">Terminar Cadastro</button>
                                </div>
                            </>
                        )}
                        <div className="progresso position-absolute" style={{ top: '0', left: '0', right: '0' }}>
                            <span className={`ponto ${step >= 1 ? 'ativo' : ''}`}>1</span>
                            <span className={`ponto ${step >= 2 ? 'ativo' : ''}`}>2</span>
                            <span className={`ponto ${step >= 3 ? 'ativo' : ''}`}>3</span>
                        </div>
                    </form>
                </div>
            </div>

      {loading && (
        <div className="backdrop">
          <div className="loader" />
        </div>
      )}

      <ToastContainer />
        </>
    );
};

export default FreeTrial;
