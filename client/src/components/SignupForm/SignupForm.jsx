import React, { useState } from "react";
import styles from "./SignupForm.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { signupProcess } from "../../redux/auth/auth.action";

let init = {
  userName: "",
  email: "",
  fullName: "",
  password: "",
};

export default function SignupForm() {
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [cp, setCP] = useState("");
  const [state, setState] = useState(init);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleChange2 = (e) => {
    setCP(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    let reg =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if (!reg.test(state.email)) {
      alert("provide correct email");
      return;
    }
    if (state.password !== cp) {
      alert("password not matched");
      return;
    }

    signupProcess(state)
      .then((res) => {
        if (res) {
          alert("signup successful");
          navigate("/login");
        } else {
          alert("signup unsuccessful");
        }
        setState(init);
        setCP("");
        setLoad(true);
      })
      .catch((err) => {
        alert("signup unsuccessful");
        setState(init);
        setCP("");
        setLoad(true);
      });
  };

  let { userName, password, email, fullName } = state;
  return (
    <div className={styles.box}>
      <div className={styles.child}>
        <div className={styles.sqr}></div>
        <h1>App Name</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className={styles.form_div}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input_div}>
              <input
                type="text"
                name="userName"
                id="userName"
                className={styles.input}
                placeholder="User Name"
                value={userName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_div}>
              {" "}
              <input
                type="text"
                name="fullName"
                id="fullName"
                className={styles.input}
                placeholder="Full Name"
                value={fullName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_div}>
              {" "}
              <input
                type="email"
                name="email"
                id="email"
                className={styles.input}
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_div}>
              <input
                type={view1 ? "text" : "password"}
                name="password"
                id="password"
                className={styles.input}
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
              {view1 ? (
                <AiFillEye onClick={() => setView1(!view1)} />
              ) : (
                <AiFillEyeInvisible onClick={() => setView1(!view1)} />
              )}
            </div>
            <div className={styles.input_div}>
              <input
                type={view2 ? "text" : "password"}
                name="cPassword"
                id="cPassword"
                className={styles.input}
                placeholder="Confirm Password"
                onChange={handleChange2}
              />
              {view2 ? (
                <AiFillEye onClick={() => setView2(!view2)} />
              ) : (
                <AiFillEyeInvisible onClick={() => setView2(!view2)} />
              )}
            </div>
            <input
              type="submit"
              placeholder="Submit"
              value={load ? "...loading" : "Submit"}
              className={styles.btn}
            />
          </form>
        </div>
        <div className={styles.text2}>
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <span className={styles.text2_color}>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
