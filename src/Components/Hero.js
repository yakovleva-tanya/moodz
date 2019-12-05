import React from "react";
import World from "../Assets/world2.svg";
import cities from "../CitiesList";
import MusicPlayer from "./MusicPlayer";
import ShareButtons from "./ShareButtons";
const Hero = ({ handleChange, city }) => {
  return (
    <div className="bg-purple-100  sm:p-10 md:p-16 p-4 flex-row flex justify-around">
      <div className="flex flex-col content-around justify-center md:pr-10">
        <h1 className="text-left sm:text-5xl text-3xl font-medium inline-block align-middle  text-gray-800">
          MOODZ
          <a
            href="https://yakovleva.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-left text-sm text-purple-600">
              {"    "}
              <span className="text-gray-600">by</span>
              {"  "}yakovleva.dev
            </span>
          </a>
        </h1>
        <h3 className="py-3 text-left text-xl inline-block  align-middle  text-gray-600 max-w-3xl">
          Planning your next holiday and not sure where to go? Select one of the
          popular tourist destinations and get lost in the the infinite scroll
        </h3>
        <br />
        <p
          className="py-2 mt-6
         text-left text-l inline-block  align-middle  text-gray-600"
        >
          Choose Your Destination:
        </p>
        <div className="inline-block align-middle relative w-64">
          <select
            value={city}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight"
          >
            {cities.map((city, key) => {
              return (
                <option key={key} value={city.key}>
                  {city.name}
                </option>
              );
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <MusicPlayer city={city} />
      </div>
      <div className="hidden md:flex flex-col justify-between content-between">
        <img
          className="hidden md:inline-block flex"
          src={World}
          alt="world"
          height="400"
          width="400"
        />
        <ShareButtons />
      </div>
    </div>
  );
};

export default Hero;
