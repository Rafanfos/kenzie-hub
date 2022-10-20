import {
  createContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  ReactNode,
} from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const TechContext = createContext<ITechProviderData>(
  {} as ITechProviderData
);

export interface ITechProvider {
  children: ReactNode;
}

export interface IDataAddEditTech {
  title: string;
  status: string;
}

interface ITechProviderData {
  techs: { title: string; status: string; id: number | string }[];
  setTechs: Dispatch<
    SetStateAction<{ title: string; status: string; id: number | string }[]>
  >;
  techId: string | number | null;
  setTechId: Dispatch<SetStateAction<string | number | null>>;
  addTech: (data: IDataAddEditTech) => Promise<void>;
  editTech: (
    data: IDataAddEditTech,
    techId: string | number | null
  ) => Promise<void>;
  deleteTech: (techId: string | number | null) => Promise<void>;
}

const TechProvider = ({ children }: ITechProvider) => {
  const [techs, setTechs] = useState<
    { title: string; status: string; id: number | string }[]
  >([]);
  const [techId, setTechId] = useState<string | number | null>(null);

  const addTech = async (data: IDataAddEditTech) => {
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

  const editTech = async (
    data: IDataAddEditTech,
    techId: string | number | null
  ) => {
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

  const deleteTech = async (techId: string | number | null) => {
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
      value={{
        addTech,
        editTech,
        deleteTech,
        techs,
        techId,
        setTechId,
        setTechs,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
