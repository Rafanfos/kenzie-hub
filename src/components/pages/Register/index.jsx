import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../../assets/Logo.png";
import { StyledTitle } from "../../../styles/components/typography";
import { Page } from "../../../styles/App";
import { api } from "../../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate("");

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório*"),
    email: yup
      .string()
      .required("E-mail obrigatório*")
      .email("E-mail inválido*"),
    password: yup
      .string()
      .required("Senha obrigatória*")
      .min(8, "Mín. 8 caracteres*")
      .matches(/[A-Z]/, "Falta letra maiúscula*")
      .matches(/[a-z]/, "Falta letra minúscula*")
      .matches(/[A-Z]/, "Falta letra maiúscula*")
      .matches(/[\d]/, "Falta número*")
      .matches(/[\W_]/, "Falta caractere especial*")
      .trim(),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas estão diferentes*")
      .trim(),
    bio: yup.string().required("Bio obrigatória*"),
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
      .post("/users", data)
      .then((resp) => {
        toast.success(`Cadastro concluído`);
        navigate("/");
      })
      .catch((error) => toast.error("Dados inválidos!!"));
  };

  return (
    <Page>
      <div className="title-div">
        <img src={logo} alt="logo" />
        <Link className="black-button" to="/">
          Voltar
        </Link>
      </div>
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
        <div className="contact">
          <StyledTitle tag="label" htmlFor="contact">
            Contato
          </StyledTitle>
          <input type="text" id="contact" {...register("contact")} />
          <StyledTitle tag="p">{errors.bio?.message}</StyledTitle>
        </div>
        <div className="course_module">
          <StyledTitle tag="label" htmlFor="course_module">
            Módulo
          </StyledTitle>
          <select type="text" id="course_module" {...register("course_module")}>
            <option>Primeiro módulo (Introdução ao Frontend)</option>
            <option>Segundo módulo (Frontend Avançado)</option>
            <option>Terceiro módulo (Bibliotecas Frontend)</option>
            <option>Quarto módulo (Introdução ao Backend)</option>
            <option>Quinto módulo (Backend Avançado)</option>
            <option>Sexto módulo (Empregabilidade)</option>
          </select>
        </div>
        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>
    </Page>
  );
};

export default Register;
