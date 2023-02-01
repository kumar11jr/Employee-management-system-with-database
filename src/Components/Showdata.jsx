import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";
const Showdata = () => {
  const [users, setusers] = useState([]);
  async function getCities(db) {
    const citiesCol = collection(db, "users");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setusers(cityList);
  }
  useEffect(() => {
    getCities(db);
  });

  const del = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };
  return (
    <>
      {" "}
      <div className="container-fluid nav_bg s">
        <div className="row">
          <div className="col-10 mx-auto">
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    <th scope="col">Section</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => {
                    return (
                      <tr>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.phone}</td>
                        <td>{u.email}</td>
                        <td>
                          <button
                            className="btn btn-outline-warning"
                            style={{ textDecoration: "none" }}
                          >
                            <Link to={`/edit/${u.id}`}>Edit</Link>
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => del(u.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button className="btn btn-outline-success">
                <Link to="/add">Add Employee</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showdata;
