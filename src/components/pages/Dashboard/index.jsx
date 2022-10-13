import { useContext, useEffect } from "react";
import { api } from "../../../services/api";
import logo from "../../../assets/Logo.png";
import { StyledTitle } from "../../../styles/components/typography";
import LoadingPage from "../../LoadingPage";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/UserContext";
import { DashboardPage } from "../../../styles/App";

const Dashboard = () => {
  const { user, setUser, loading, setLoading, navigate, logout } =
    useContext(UserContext);

  const { name, course_module } = user;

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    if (userId) {
      api
        .get(`/users/${userId}`)
        .then((resp) => {
          setUser(resp.data);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const logout = () => {
  //   localStorage.clear();
  //   toast.success(`"Vida longa e prospera!"`, {
  //     icon: "🖖",
  //   });
  //   setUser("");
  //   navigate("/");
  // };

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
