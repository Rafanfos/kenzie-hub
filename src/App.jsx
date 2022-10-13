import Routes from "./components/Routes";
import { Global } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRoot } from "./styles/App";

function App() {
  return (
    <AppRoot>
      <Global />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={1}
      />
      <Routes />
    </AppRoot>
  );
}

export default App;
