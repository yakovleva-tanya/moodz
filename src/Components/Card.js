import React from "react";

const Card = ({ link }) => {
  return (
    <img
      className="m-5 max-w-md h-64 rounded overflow-hidden shadow-md"
      alt="city"
      src={link}
      key={link}
    />
  );
};

export default Card;
