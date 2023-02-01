import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
// import {useHistory,useParams} from "react-router-dom";
import { app, db } from "../firebaseConfig";
// import {db} from "../firebaseConfig";
import { uid } from "uid";
import { set, ref } from "firebase/database";

const Add = () => {
  const [name, setname] = useState();
  const [phone, setphone] = useState();
  const [email, setemail] = useState();

  const submit = async () => {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      phone: Number(phone),
      email: email,
    });
    alert("employee added");
    setname("");
    setphone("");
    setemail("");
  };

  return (
    <>
      <h3 className="text-center w-10">Employee Info</h3>
      {/* <form action="" method="post"> */}
      <div className="container-fluid mb-5  w-18">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="exampleFormControlInput1"
                placeholder="Enter Your Name Here"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                name="phone"
                id="exampleFormControlTextarea1"
                placeholder="Enter Your Phone"
                value={phone}
                onChange={(e) => {
                  setphone(e.target.value);
                }}
                rows="3"
              ></input>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Email Id
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="email"
                placeholder="xyz@123"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              ></input>
            </div>

            <button
              type="submit"
              onClick={() => {
                submit();
              }}
              className="btn btn-outline-warning btn-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* </form> */}
    </>
  );
};

export default Add;
