import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Page } from "../../styles/App";
import logo from "../../assets/Logo.png";
import { StyledTitle } from "../../styles/components/typography";
import { Link } from "react-router-dom";
import { formSchemaLogin } from "../../validators";

const Login = () => {
  const { sendLoginData } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaLogin),
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
