import React from "react";
import Card from "./Card"
const NasaItem = (props) => {
  return (
    <Card
      title = {props.title}
      explanation = {props.explanation}
      image = {props.image}
      date = {props.date}
    />
  );
};

export default NasaItem;
