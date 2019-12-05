import React from "react";

const Card = ({ link }) => {
  return (
    <img
      className="m-5 sm:max-w-full max-w-screen rounded overflow-hidden shadow-md"
      alt="city"
      src={link}
      key={link}
    />
  );
};

export default Card;
