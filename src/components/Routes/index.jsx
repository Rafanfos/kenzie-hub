
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"register"} element={<Register />} />
      <Route path={"dashboard"} element={<Dashboard />}></Route>
    </Routes>
  );
};

export default RoutesMain;
