import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../../assets/Logo.png";
import { StyledTitle } from "../../../styles/components/typography";
import { Link, Navigate } from "react-router-dom";
import { Page } from "../../../styles/App";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

const Login = () => {
  const [loginUser, setLoginUser] = useState("");

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail obrigatório*")
      .email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const sendData = (data) => {
    api
      .post("/sessions", data)
      .then((resp) => {
        setLoginUser(resp.data.user);
        localStorage.setItem("@TOKEN", resp.data.token);
        localStorage.setItem("@USERID", resp.data.user.id);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    api
      .get(`/users/${userId}`)
      .then((resp) => {
        setTimeout(() => {
          setLoginUser(resp.data);
        }, 5000);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {loginUser && <Navigate to={"dashboard"} />}
      <Page>
        <img src={logo} alt="logo" />
        <form onSubmit={handleSubmit(sendData)}>
          <StyledTitle tag="h1" className="title">
            Login
          </StyledTitle>
          <div className="email">
            <StyledTitle tag="label" htmlFor="email">
              Email
            </StyledTitle>
            <input type="text" id="email" {...register("email")} />
            <StyledTitle tag="p">{errors.email?.message}</StyledTitle>
          </div>
          <div className="password">
            <StyledTitle tag="label" htmlFor="password">
              Senha
            </StyledTitle>
            <input
              type="password"
              id="passwordLogin"
              {...register("password")}
            />
            <StyledTitle tag="p">{errors.password?.message}</StyledTitle>
          </div>
          <button type="submit">Entrar</button>
          <StyledTitle tag="span">Ainda não é cadastrado?</StyledTitle>
          <Link className="grey-button" to={"register"}>
            Cadastre-se
          </Link>
        </form>
      </Page>
    </>
  );
};

export default Login;
