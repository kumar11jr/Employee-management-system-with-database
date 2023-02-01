import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import options from "./CardApi";
import Card from "./Card";

const Home = () => {
  return (
    <>
      {/* <h1>Welcome {user.email}</h1> */}

      <h2 className="text-center my-5 ">Our Services</h2>
      <div className="container-fluid mb-5  ">
        <div className="row">
          <div className="col-4 mx-auto">
            <div className="row gy-4">
              {options.map((curr) => {
                return <Card btn={curr.btn} src={curr.src} lin={curr.link} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
