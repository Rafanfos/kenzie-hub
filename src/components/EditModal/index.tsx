import { StyledTitle } from "../../styles/components/typography";
import { ModalWrapper } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaModals } from "../../validators";
import { IEditTechProviders } from "../../pages/Dashboard";
import { IDataAddEditTech } from "../../context/TechContext";

const EditModal = ({
  deleteTech,
  editTech,
  techId,
  setEditModal,
}: IEditTechProviders) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataAddEditTech>({
    resolver: yupResolver(formSchemaModals),
  });

  const edit = (event: IDataAddEditTech) => {
    editTech(event, techId);
    setEditModal(false);
  };

  return (
    <ModalWrapper>
      <div className="modal">
        <div className="header">
          <StyledTitle tag="span" className="modal-text">
            Tecnologia Detalhes
          </StyledTitle>
          <span
            className="close"
            onClick={() => {
              setEditModal(false);
            }}
          >
            X
          </span>
        </div>
        <form onSubmit={handleSubmit(edit)}>
          <StyledTitle tag="label" htmlFor="title">
            Número do projeto
          </StyledTitle>
          <input
            id="title"
            placeholder="Digite o nome da tecnologia"
            {...register("title")}
          />
          <StyledTitle tag="p">{errors.title?.message}</StyledTitle>
          <StyledTitle tag="label" htmlFor="status">
            Selecionar status
          </StyledTitle>
          <select id="status" {...register("status")}>
            <option></option>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <StyledTitle tag="p">{errors.status?.message}</StyledTitle>
          <div className="buttons">
            <button type="submit" className="button">
              Salvar alterações
            </button>
            <button
              type="button"
              className="grey-button button"
              onClick={() => {
                deleteTech(techId);
                setEditModal(false);
              }}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default EditModal;
