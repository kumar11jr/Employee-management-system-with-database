import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card" style={{ width: "11rem" }}>
        <img src={props.src} className="card-img-top" alt="img" />
        <div className="card-body">
          <NavLink exact to={props.lin} className="btn btn-primary">
            {props.btn}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
