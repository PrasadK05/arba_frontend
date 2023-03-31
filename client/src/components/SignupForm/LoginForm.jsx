import React, { useState } from "react";
import styles from "./SignupForm.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginProcess } from "../../redux/auth/auth.action";

let init = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const { loading } = useSelector((store) => store.auth);
  const [view, setView] = useState(false);
  const [log, setLog] = useState(init);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setLog({ ...log, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let reg =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if (!reg.test(log.email)) {
      alert("provide correct email");
      return;
    }

    dispatch(loginProcess(log))
      .then((res) => {
        if (res) {
          alert("login successful");
          navigate("/")
        } else {
          alert("login unsuccessful");
        }
        setLog(init);
      })
      .catch((err) => {
        alert("login unsuccessful");
        setLog(init);
      });
  };

  let { password, email } = log;
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
                type={view ? "text" : "password"}
                name="password"
                id="password"
                className={styles.input}
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
              {view ? (
                <AiFillEye onClick={() => setView(!view)} />
              ) : (
                <AiFillEyeInvisible onClick={() => setView(!view)} />
              )}
            </div>
            <input
              type="submit"
              placeholder="Submit"
              value={loading ? "...Loading" : "Submit"}
              className={styles.btn}
            />
          </form>
        </div>
        <div className={styles.text2}>
          <p>
            Already have an account?{" "}
            <Link to="/signup">
              <span className={styles.text2_color}>Signup</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
