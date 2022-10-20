import { Page } from "../../styles/App";
import { BiLoader } from "react-icons/bi";

const LoadingPage = () => {
  return (
    <Page>
      <BiLoader id="loader" />
      <span className="loading">Carregando...</span>
    </Page>
  );
};

export default LoadingPage;
