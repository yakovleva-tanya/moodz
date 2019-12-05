import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../Assets/Animation.json";

class Loader extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Lottie
          className="m-36 cursor-default"
          options={defaultOptions}
          height={150}
          width={150}
        />
      </div>
    );
  }
}

export default Loader;
