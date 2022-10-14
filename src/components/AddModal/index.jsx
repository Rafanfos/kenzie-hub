import { StyledTitle } from "../../styles/components/typography";
import { ModalWrapper } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaModals } from "../../validators";

const AddModal = ({ setAddModal, addTech }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaModals),
  });

  const add = (event) => {
    addTech(event);
    setAddModal(false);
  };

  return (
    <ModalWrapper>
      <div className="modal">
        <div className="header">
          <StyledTitle tag="span" className="modal-text">
            Cadastrar Tecnologia
          </StyledTitle>
          <span
            className="close"
            onClick={() => {
              setAddModal(false);
            }}
          >
            X
          </span>
        </div>
        <form onSubmit={handleSubmit(add)}>
          <StyledTitle tag="label" htmlFor="title">
            Nome
          </StyledTitle>
          <input
            id="title"
            placeholder="Digite o nome da tecnologia"
            {...register("title")}
          />
          <StyledTitle tag="p">{errors.name?.message}</StyledTitle>
          <StyledTitle tag="label" htmlFor="status">
            Selecionar status
          </StyledTitle>
          <select id="status" {...register("status")}>
            <option></option>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <StyledTitle tag="p">{errors.type?.message}</StyledTitle>
          <button type="submit" className="button">
            Cadastrar tecnologia
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default AddModal;
