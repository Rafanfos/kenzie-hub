import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Page } from "../../styles/App";
import logo from "../../assets/logo.png";
import { StyledTitle } from "../../styles/components/typography";
import { Link } from "react-router-dom";

const Login = () => {
  const { sendLoginData } = useContext(UserContext);

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

  return (
    <>
      <Page>
        <img src={logo} alt="logo" />
        <form onSubmit={handleSubmit(sendLoginData)}>
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
          <button className="button" type="submit">
            Entrar
          </button>
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
