import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);
  const [techId, setTechId] = useState("");

  const addTech = async (data) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const resp = await api.post("/users/techs", data);

      setTechs((oldTechs) => [...oldTechs, resp.data]);

      toast.success(`${data.title} adcionado com sucesso!`);
    } catch (error) {
      toast.error(`Falha ao adcionar, tente novamente!`);
    }
  };

  const editTech = async (data, techId) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.put(`/users/techs/${techId}`, data);

      setTechs(
        techs.map((item) => {
          if (item.id === techId) {
            return { ...item, title: data.title, status: data.status };
          } else {
            return item;
          }
        })
      );

      toast.success("Tecnologia atualizada");
    } catch (error) {
      toast.error(`Falha ao atualizar, tente novamente!`);
    }
  };

  const deleteTech = async (techId) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.delete(`/users/techs/${techId}`);

      setTechs((oldTechs) => oldTechs.filter(({ id }) => id !== techId));
      toast.success(`Tecnologia removida!`);
    } catch (error) {
      toast.error(`Falha ao remover, tente novamente!`);
    }
  };

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
    <TechContext.Provider
      value={{ addTech, editTech, deleteTech, techs, techId, setTechId }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
