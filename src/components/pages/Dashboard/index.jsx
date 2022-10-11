import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import logo from "../../../assets/Logo.png";
import { DashboardPage } from "./styles";
import { StyledTitle } from "../../../styles/components/typographyStyles";
import LoadingPage from "../../LoadingPage";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [loggedUser, setLoggedUser] = useState("noUser");
  const [loading, setLoading] = useState(true);
  const { name, course_module } = loggedUser;

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    if (userId) {
      api
        .get(`/users/${userId}`)
        .then((resp) => {
          setLoggedUser(resp.data);
          setLoading(false);
        })
        .catch((error) => {
          toast.warning("Favor fazer login!");
          navigate("/");
        });
    } else {
      toast.warning("Favor fazer login!");
      navigate("/");
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    toast.success(`"Vida longa e prospera!"`, {
      icon: "🖖",
    });
    setLoggedUser("");
    navigate("/");
  };

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
