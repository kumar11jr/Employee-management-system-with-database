import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { NavLink, useParams } from "react-router-dom";
import { async } from "@firebase/util";

const Editinfo = () => {
  const { id } = useParams();
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");

  const [kname, setkname] = useState("");
  const [kphone, setkphone] = useState("");
  const [kemail, setkemail] = useState("");

  const decRef = doc(db, "users", id);
  const getd = async () => {
    const userSnapshot = await getDoc(decRef);
    setkname(userSnapshot.data().name);
    setkphone(userSnapshot.data().phone);
    setkemail(userSnapshot.data().email);
  };
  getd();

  const update = async () => {
    await updateDoc(decRef, {
      name: name,
      phone: Number(phone),
      email: email,
    });
    alert("Updated successfully");
    // setTimeout(() => {
    //     to
    // }, timeout);
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
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                placeholder={kname}
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
                value={phone}
                onChange={(e) => {
                  setphone(e.target.value);
                }}
                rows="3"
                placeholder={kphone}
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
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                placeholder={kemail}
              ></input>
            </div>

            <button
              type="submit"
              onClick={() => {
                update();
              }}
              className="btn btn-outline-warning btn-md"
            >
              Update
            </button>
          </div>
        </div>
      </div>

      {/* </form> */}
    </>
  );
};

export default Editinfo;
