import React from "react";
import { Global } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesMain from "./Routes";
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
      <RoutesMain />
    </AppRoot>
  );
}

export default App;
