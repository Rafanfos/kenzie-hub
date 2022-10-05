import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../../assets/Logo.png";
import { StyledTitle } from "../../../styles/components/typography";
// import { Link } from "react-router-dom";
import { Page } from "../../../styles/App";

const Register = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório*"),
    email: yup
      .string()
      .required("E-mail obrigatório*")
      .email("E-mail inválido*"),
    password: yup
      .string()
      .min(8, "Mín. 8 caracteres")
      .required("Senha obrigatória*"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas estão diferentes*"),
    bio: yup.string().required("Bio obrigatória*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const sendData = (data) => console.log(data);

  return (
    <Page>
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit(sendData)}>
        <StyledTitle tag="h1" className="title">
          Registro
        </StyledTitle>
        <div className="name">
          <StyledTitle tag="label" htmlFor="name">
            Nome
          </StyledTitle>
          <input type="text" id="name" {...register("name")} />
          <StyledTitle tag="p">{errors.name?.message}</StyledTitle>
        </div>
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
            id="passwordRegister"
            {...register("password")}
          />
          <StyledTitle tag="p">{errors.password?.message}</StyledTitle>
        </div>
        <div className="confirmPassword">
          <StyledTitle tag="label" htmlFor="confirmPassword">
            Confirmar senha
          </StyledTitle>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          <StyledTitle tag="p">{errors.confirmPassword?.message}</StyledTitle>
        </div>
        <div className="bio">
          <StyledTitle tag="label" htmlFor="bio">
            Bio
          </StyledTitle>
          <input type="text" id="bio" {...register("bio")} />
          <StyledTitle tag="p">{errors.bio?.message}</StyledTitle>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </Page>
  );
};

export default Register;
