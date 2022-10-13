import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("noUser");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate("");

  const sendLoginData = (data) => {
    api
      .post("/sessions", data)
      .then((resp) => {
        localStorage.setItem("@TOKEN", resp.data.token);
        localStorage.setItem("@USERID", resp.data.user.id);
        toast.success(`Login concluído!`);
        redirectDashboard();
      })
      .catch((error) => toast.error("Dados inválidos, tente novamente..."));
  };

  const sendRegisterData = (data) => {
    api
      .post("/users", data)
      .then((resp) => {
        toast.success(`Cadastro concluído`);
        redirectHome();
        console.log(resp.data);
      })
      .catch((error) => toast.error("Dados inválidos!!"));
  };

  const redirectDashboard = () => {
    navigate("/dashboard");
  };

  const redirectHome = () => {
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        sendLoginData,
        sendRegisterData,
        redirectDashboard,
        redirectHome,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
