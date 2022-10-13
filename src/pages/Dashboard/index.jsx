import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import LoadingPage from "../../components/LoadingPage";
import { DashboardPage } from "./styles";
import logo from "../../assets/logo.png";
import { StyledTitle } from "../../styles/components/typography";

const Dashboard = () => {
  const { user, loading, logout } = useContext(UserContext);
 
  const { name, course_module } = user;

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
