import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebaseConfig";

const Login = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Sign In
                </h5>
                <form onSubmit={login}>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                      autoComplete="off"
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => setpass(e.target.value)}
                      autoComplete="off"
                      type="password"
                      className="form-control"
                      value={pass}
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberPasswordCheck"
                    />
                    <label
                      className="form-check-label"
                      for="rememberPasswordCheck"
                    >
                      Remember password
                    </label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                  <NavLink
                    className="d-block text-center mt-2 small"
                    to="/signup"
                  >
                    Don't have account? Register
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
