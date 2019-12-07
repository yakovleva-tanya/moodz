import React, { useState } from "react";
import ReactPlayer from "react-player";
import cities from "../CitiesList";

const MusicPlayer = city => {
  const url = cities.find(({ key }) => key === city.city).music;

  const [play, setPlay] = useState(false);
  return (
    <div className="py-4 items-center w-full ">
      <ReactPlayer
        className="hidden"
        controls={false}
        url={url}
        playing={play}
      />{" "}
      <input
        checked={play}
        onChange={() => {
          setPlay(!play);
        }}
        class="mr-2 leading-tight"
        type="checkbox"
      />
      <span
        class="text-left text-l inline-block  align-middle  text-gray-500"
        onClick={() => setPlay(!play)}
      >
        Allow background music for enhanced experience
      </span>
      {"  "}
    </div>
  );
};

export default MusicPlayer;
