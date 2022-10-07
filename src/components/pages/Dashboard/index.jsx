import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from "../../../services/api";
import logo from "../../../assets/Logo.png";
import { DashboardPage } from "./style";
import { StyledTitle } from "../../../styles/components/typography";
import LoadingPage from "../../LoadingPage";

const Dashboard = () => {
  const [loggedUser, setLoggedUser] = useState("noUser");
  const [loading, setLoading] = useState(true);
  const { name, course_module } = loggedUser;

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    api
      .get(`/users/${userId}`)
      .then((resp) => {
        setTimeout(() => {
          setLoggedUser(resp.data);
          setLoading(false);
        }, 5000);
      })
      .catch((error) => console.log(error));
  }, []);

  const logout = () => {
    localStorage.clear();
    setLoggedUser("");
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <DashboardPage>
          <div className="header">
            <img src={logo} alt="logo" />
            {!loggedUser && <Navigate to="/" />}
            <button className="black-button" onClick={() => logout()}>
              Sair
            </button>
          </div>
          <div className="presentation">
            <StyledTitle tag="h3" className="title">
              Olá, {name}
            </StyledTitle>
            <StyledTitle tag="span" className="module">
              {course_module}
            </StyledTitle>
          </div>
          <div className="message">
            <StyledTitle tag="h3" className="title">
              Que pena! Estamos em desenvolvimento :(
            </StyledTitle>
            <StyledTitle tag="span" className="title">
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </StyledTitle>
          </div>
        </DashboardPage>
      )}
    </>
  );
};

export default Dashboard;
