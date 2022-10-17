/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import LoadingPage from "../../components/LoadingPage";
import { DashboardPage } from "./style";
import logo from "../../assets/Logo.png";
import { StyledTitle } from "../../styles/components/typography";
import AddModal from "../../components/AddModal";
import { TechContext } from "../../context/TechContext";
import EditModal from "../../components/EditModal";
import { api } from "../../services/api";

const Dashboard = () => {
  const { user, loading, logout } = useContext(UserContext);
  const { techs, setTechs, addTech, editTech, deleteTech, techId, setTechId } =
    useContext(TechContext);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  useEffect(() => {
    const getTechs = async () => {
      const token = localStorage.getItem("@TOKEN");
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        const { data } = await api.get(`/profile`);

        setTechs(data.techs);
      } catch (error) {}
    };
    getTechs();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <DashboardPage>
          <div className="header">
            <img src={logo} alt="logo" />
            <button className="black-button button" onClick={() => logout()}>
              Sair
            </button>
          </div>
          <div className="presentation">
            <StyledTitle tag="h3" className="title">
              Olá, {user?.name}
            </StyledTitle>
            <StyledTitle tag="span" className="module">
              {user?.course_module}
            </StyledTitle>
          </div>
          <div className="techs">
            <div className="techs-title">
              <h2 className="title">Tecnologias</h2>
              <button
                id="add"
                className="black-button button"
                onClick={() => {
                  setAddModal(true);
                }}
              >
                +
              </button>
            </div>
            {techs.length > 0 ? (
              <div className="tech-list">
                <ul>
                  {techs.map(({ title, status, id }) => {
                    return (
                      <>
                        <li
                          key={id}
                          onClick={() => {
                            setEditModal(true);
                            setTechId(id);
                          }}
                        >
                          <span id={id} tag="span" className="tech-name">
                            {title}
                          </span>
                          <StyledTitle tag="span">{status}</StyledTitle>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className="message">
                <StyledTitle tag="h3" className="title">
                  Que pena! Você ainda não tem nenhuma tecnologia, adcione pelo
                  botão acima.
                </StyledTitle>
              </div>
            )}
          </div>
          {addModal && <AddModal setAddModal={setAddModal} addTech={addTech} />}
          {editModal && (
            <EditModal
              setEditModal={setEditModal}
              editTech={editTech}
              deleteTech={deleteTech}
              techId={techId}
            />
          )}
        </DashboardPage>
      )}
    </>
  );
};

export default Dashboard;
