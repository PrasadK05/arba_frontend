
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Home from "../pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";


export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes><Home/></PrivateRoutes>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  );
}