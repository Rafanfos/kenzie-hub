import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"register"} element={<Register />} />
      <Route></Route>
    </Routes>
  );
};

export default RoutesMain;
