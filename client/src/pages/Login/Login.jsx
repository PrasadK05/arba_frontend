import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import LoginForm from "../../components/SignupForm/LoginForm";
import Cookies from "js-cookie";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { authLoginSucc } from "../../redux/auth/auth.action";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let token = Cookies.get("token");
  let refreshToken = Cookies.get("refreshtoken");

  useEffect(() => {
    if (token && refreshToken) {
      dispatch(authLoginSucc({ token, refreshToken }));
      navigate("/");
    }
  },[]);
  return (
    <div className={styles.main}>
      <Sidebar />
      <LoginForm />
    </div>
  );
}
