/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, Dispatch, SetStateAction } from "react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export interface IDataLogin {
  email: string;
  password: string;
  token?: string;
}

export interface IDataRegister extends IDataLogin {
  name: string;
  confirmPassword: string;
  contact: string;
  bio: string;
  course_module: string;
}

interface IUserProviderData {
  user: { name: string; course_module: string } | null;
  setUser: Dispatch<
    SetStateAction<{
      name: string;
      course_module: string;
    } | null>
  >;
  loading: boolean | null;
  setLoading: Dispatch<SetStateAction<boolean>>;
  sendLoginData: (data: IDataLogin) => void;
  sendRegisterData: (data: IDataRegister) => void;
  redirectDashboard: () => void;
  redirectHome: () => void;
  logout: () => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<{
    name: string;
    course_module: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const sendLoginData = async (data: IDataLogin) => {
    try {
      api.defaults.headers.authorization = `Bearer ${data.token}`;

      const resp = await api.post("/sessions", data);

      localStorage.setItem("@TOKEN", resp.data.token);
      localStorage.setItem("@USERID", resp.data.user.id);

      setUser(resp.data.user);

      redirectDashboard();

      toast.success(`Login concluído!`);
    } catch (error) {
      toast.error(`Dados inválidos, tente novamente...`);
    }
  };

  const sendRegisterData = (data: IDataRegister) => {
    try {
      api.post("/users", data);

      redirectDashboard();

      toast.success(`Cadastro concluído`);
    } catch (error) {
      toast.error("Dados inválidos!!");
    }
  };

  const redirectDashboard = () => {
    navigate("/dashboard", { replace: true });
  };

  const redirectHome = () => {
    navigate("/", { replace: true });
  };

  const logout = () => {
    localStorage.clear();
    toast.success(`"Vida longa e prospera!"`, {
      icon: "🖖",
    });
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const getUser = async () => {
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get(`/profile`);

          setUser(data);

          redirectDashboard();
        } catch (error) {
          localStorage.clear();
          redirectHome();
        }
      } else {
        redirectHome();
      }

      setLoading(false);
    };
    getUser();
  }, []);

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
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
