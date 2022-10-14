import * as yup from "yup";

export const formSchemaLogin = yup.object().shape({
  email: yup.string().required("E-mail obrigatório*").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória*"),
});

export const formSchemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatório*"),
  email: yup.string().required("E-mail obrigatório*").email("E-mail inválido*"),
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

export const formSchemaModals = yup.object().shape({
  title: yup.string().required("Insira uma tecnologia*"),
  status: yup.string().required("Selecione um nível de proeficiência*"),
});
