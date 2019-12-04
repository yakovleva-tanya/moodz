import React from "react";

const calcDims = () => Math.floor(Math.random() * 300 + 300);

const Card = ({ city }) => {
  const x = calcDims();
  const link = `https://source.unsplash.com/${x}x300/?${city}`;

  return (
    <div className="">
      <img
        className=" m-5 max-w-md h-64 rounded overflow-hidden shadow-md"
        alt="london"
        src={link}
        key={link}
      />
    </div>
  );
};

export default Card;
