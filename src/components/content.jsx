import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import log from "../img/logo.png";
import use from "../img/katumbela.JPG";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SketchPicker } from "react-color";
import { collection, query, where, getDocs } from "firebase/firestore";
import LoadWhite from "./c2";
import LoadE from "./c1";
import { db, auth } from "../pages/firebase";
import { ToastContainer, toast } from "react-toastify";
import format from "date-fns/format";
import { ptBR } from "date-fns/locale";

const Content = () => {
  const [projectName, setProjectName] = useState("");
  const [projectNote, setProjectNote] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [l1, setL1] = useState(false);
  const [foi, setFoi] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);

  const getUserData = async (email, senha) => {
    try {
      // Consulta no Firestore com os dados fornecidos
      const querySnapshot = await db
        .collection("users")
        .where("email", "==", email)
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
      console.error("Erro ao obter os dados do usuário:", error);
      return null;
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    const senha = localStorage.getItem("senha");
    if (email) {
      getUserData(email, senha)
        .then((userData) => {
          if (userData) {
            // Atualize o estado com os dados do usuário
            setUser(userData);
          } else {
            console.log("Usuário não encontrado");
          }
        })
        .catch((error) => {
          console.error("Erro ao obter os dados do usuário:", error);
        });
    } else {
      console.log("Dados do usuário não encontrados no localStorage");
    }
  }, []);

  //   termino da requisicao dos dados de usuarioo

  const handleCreateProject = async () => {
    setL1(true);
    console.log(selectedUser);
    // if (!projectName || !deadline) {

    //   console.log("Por favor, preencha todos os campos");
    //   toast.warning("Por favor , preencha todos os campos!");

    //   return;
    // }

    try {
      const formattedDeadline = format(deadline, "dd 'de' MMM, yyyy", {
        locale: ptBR,
      });

      const newProject = {
        name: projectName,
        createdBy: user.email,
        nota: projectNote,
        team: equipa,
        responsavel: selectedUser.email,
        deadline: deadline.toISOString(),
        formattedDeadline: formattedDeadline,
        tasks: [],
        membros: [],
      };

      // Salve o novo projeto no Firestore
      await db.collection("projectos").add(newProject);

      // Limpe os campos do formulário
      setProjectName("");
      setProjectNote("");
      setDeadline(null);

      // Feche o modal (você precisa implementar essa parte)
      // closeModal();

      setL1(false);
      setFoi(true);
      toast.success("Projeto criado com sucesso!");
      setTimeout(() => {
        setFoi(false);
      }, 6000);
    } catch (error) {
      setL1(false);
      toast.error(
        error,
        "Ocorreu um erro ao criar o projeto. Por favor, tente novamente."
      );
    }
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleSaveColor = () => {
    // Aqui você pode salvar a cor selecionada no banco de dados
    console.log("Cor selecionada:", selectedColor);
  };

  const getCurrentGreeting = () => {
    const currentHour = new Date().getHours();
    let greeting = "";

    if (currentHour >= 0 && currentHour < 12) {
      greeting = "Bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Boa tarde";
    } else {
      greeting = "Boa noite";
    }

    return greeting;
  };

  const firstName = user && user.nomeCompleto.split(" ")[0];
  const equipa = user && user?.nomeEquipa;

  document.title = `Dashboard ${equipa} | Eco - Bionics`;

  const [projectos, setProjectos] = useState([]);

  useEffect(() => {
    const fetchProjectos = async () => {
      try {
        // Consulta no Firestore para obter os projetos da equipe
        const q = query(
          collection(db, "projectos"),
          where("equipa", "==", equipa)
        );
        const querySnapshot = await getDocs(q);

        // Mapear os resultados da consulta para um array de projetos
        const projectosData = querySnapshot.docs.map((doc) => doc.data());

        // Definir os projetos no estado
        setProjectos(projectosData);
      } catch (error) {
        console.error("Erro ao obter os projetos:", error);
      }
    };

    fetchProjectos();
  }, []);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        // Consulta no Firestore para obter membros da equipe com o mesmo nomeEquipa
        const querySnapshot = await db
          .collection("users")
          .where("nomeEquipa", "==", equipa)
          .get();

        const membersData = querySnapshot.docs.map((doc) => doc.data());

        setTeamMembers(membersData);
      } catch (error) {
        console.error("Erro ao obter membros da equipe:", error);
      }
    };

    fetchTeamMembers();
  }, []); // Adicione user?.nomeEquipa como dependência para reexecutar o efeito quando ela mudar

  const fetchTeamMembers = async () => {
    try {
      // Consulta no Firestore para obter membros da equipe com o mesmo nomeEquipa
      const querySnapshot = await db
        .collection("users")
        .where("nomeEquipa", "==", equipa)
        .get();

      const membersData = querySnapshot.docs.map((doc) => doc.data());

      setTeamMembers(membersData);
    } catch (error) {
      console.error("Erro ao obter membros da equipe:", error);
    }
  };

  fetchTeamMembers();
  return (
    <>
      <div className="bg- py-2 content-dash my-auto">
        <header className="bg-soft rounded-3 border-soft p-3">
          <div className="d-flex justify-content-between w-100">
            <img src={log} style={{ height: "2em" }} alt="" />

            <div className="position-relative cursor-pointer">
              <img
                src={user?.fotoPerfil}
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  height: "2.5em",
                  width: "2.5em",
                  border: "3px solid #DDDDDD",
                }}
                className="rounded-circle dropdown-toggle"
                alt=""
              />
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">Dados do Perfil</span>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item text-e" href="#">
                    {user && user.nomeCompleto}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Perfil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Privacidade
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sair
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex mt-3 gap-3">
            <div className="grid-center py-1">
              <i className="bi f-20 bi-filter-square"></i>
            </div>
            <div className="w-100">
              <input type="search" className="input-soft w-100 form-control" />
            </div>
            <div>
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn rounded-2 text-dark btn-primary d-flex"
              >
                <i className="bi bi-plus"></i> Criar
              </button>
            </div>
          </div>
        </header>
        <br />
        <div className="text-center">
          <span className="text-white f-14">
            {getCurrentGreeting()} {firstName}!
          </span>
        </div>
        <br />
        <section className="projectos rounded-3 bg-soft p-3">
          <h2>Projectos{projectos}</h2>
          <hr />
          <br />
          <div className="row">
            {projectos.map((projectos) => (
              <div
                key={projectos.name}
                className="col-12 col-sm-6 col-md-4 col-ld-3 col-xxl-2"
              >
                <div className="project-card position-relative rounded-2 border-soft py-3 px-2">
                  <div className="d-flex justify-content-between">
                    <b>
                      <i className="bi bi-pin"></i> {projectos.name}
                    </b>
                    <div
                      className="cursor-pointer bg-soft border-soft rounded-pill position-relative"
                      title="Opções"
                    >
                      <i
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className="bi dropdown-toggle bi-three-dots-vertical"
                      ></i>
                      <ul className="dropdown-menu menu-opt bg-soft text-white border-soft rounded-0">
                        <li>
                          <a
                            title=""
                            className="dropdown-item text-white"
                            href="#"
                          >
                            <i className="bi bi-trash "></i> Eliminar
                          </a>
                        </li>
                        <li>
                          <a
                            title=""
                            className="dropdown-item text-white"
                            href="#"
                          >
                            <i className="bi bi-pencil"></i> Editar
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="projecto-body d-flex flex-column">
                    <span className="f-14">
                      <span className="text-secondary">Deadline:</span>{" "}
                      {projectos.deadline}
                    </span>
                    <span className="f-14">
                      <span className="text-secondary">Criado Por:</span>{" "}
                      {projectos.criadoPor}
                    </span>
                    <div className="mt-3">
                      <button className="btn btn-sm btn-primary">
                        Abrir Projeto{" "}
                        <i className="bi bi-arrow-right-short"></i>
                      </button>
                    </div>
                  </div>
                  <img
                    src={log}
                    style={{
                      position: "absolute",
                      bottom: ".3rem",
                      right: ".3rem",
                      height: "1em",
                    }}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal para adicionar projecto */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <center className="w-100">
                  <i
                    style={{ fontSize: "60px" }}
                    className="bi text-e bi-kanban"
                  ></i>
                  <h5 className="modal-title" id="exampleModalLabel">
                    Adicionar Projecto
                  </h5>
                </center>
                <br />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <p>
                      <label htmlFor="" className="text-secondary f-10">
                        Nome do projeto
                      </label>
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
                      <label htmlFor="" className="text-secondary f-10">
                        Deadline do projeto
                      </label>
                      <DatePicker
                        className="form-control w-100"
                        selected={deadline}
                        onChange={(date) => setDeadline(date)}
                        minDate={new Date()} // Define a data mínima como a data atual
                        dateFormat="dd/MM/yyyy" // Formato da data exibida
                      />
                    </p>
                  </div>
                  <div className="col-12 col-sm-12">
                    <p>
                      <label htmlFor="" className="text-secondary f-10">
                        Responsável do projeto
                      </label>
                      {/* Adicione este código ao seu componente JSX */}
                     
                    </p>
                  </div>

                  <div className="col-12 col-sm-12">
                    <p>
                      <label htmlFor="" className="text-secondary f-10">
                        Nota sobre o projeto ( Opcional )
                      </label>
                      <textarea
                        type="text"
                        rows={"3"}
                        className="form-control rounded-1"
                        value={projectNote}
                        maxLength={300}
                        onChange={(e) => setProjectNote(e.target.value)}
                      ></textarea>
                    </p>
                  </div>
                  <div className="col-12 col-sm-12">
                    <center>
                      <button
                        className="btn btn-e d-flex gap-2"
                        onClick={handleCreateProject}
                      >
                        {l1 == false ? (
                          <span>Criar Projeto</span>
                        ) : (
                          <LoadWhite />
                        )}
                      </button>
                      {foi == true && (
                        <div>
                          <br />

                          <div className="alert alert-success">
                            Projecto criado com sucess!
                          </div>
                        </div>
                      )}
                    </center>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-between d-flex">
                <img src={log} style={{ height: "1.5rem" }} alt="" />

                <button
                  type="button"
                  className="btn btn-danger rounded-1"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Content;
