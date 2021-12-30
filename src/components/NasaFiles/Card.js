import React from "react";

const Card = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <div className="info">
        <h2>{props.title}</h2>
        <p>{props.explanation}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default Card;
