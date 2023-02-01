import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { auth } from "../firebaseConfig";

import Login from "./Login";

const Signup = () => {
  // const [name,setname] = useState('');
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container w-50">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Register
                </h5>
                <form onSubmit={signup}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      id="floatingInputEmail"
                      placeholder="name@example.com"
                      onChange={(e) => setemail(e.target.value)}
                    />
                    <label for="floatingInputEmail">Email address</label>
                  </div>

                  <hr />

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      value={pass}
                      id="floatingPassword"
                      onChange={(e) => setpass(e.target.value)}
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>

                  <NavLink
                    className="d-block text-center mt-2 small"
                    to="/login"
                  >
                    Have an account? Sign In
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

export default Signup;
