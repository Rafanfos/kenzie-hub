import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Page } from "../../../styles/App";

const Dashboard = () => {
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    api.get(`/users/${userId}`).then((resp) => {
      setLoggedUser(resp.data);
    });
  }, []);

  return (
    <Page>
      <h1>Bem vindo {loggedUser.name}</h1>;
    </Page>
  );
};

export default Dashboard;
