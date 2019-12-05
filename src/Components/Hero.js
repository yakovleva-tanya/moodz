import React from "react";
import World from "../Assets/world2.svg";
import cities from "../CitiesList";
import MusicPlayer from "./MusicPlayer";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  TelegramIcon,
  FacebookShareCount
} from "react-share";

const Hero = ({ handleChange, city }) => {
  return (
    <div className="bg-purple-100  m-0 p-16 flex-row flex justify-around">
      <div className="flex flex-col content-around justify-center">
        <h1 className="text-left text-5xl font-medium inline-block  align-middle  text-gray-800">
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
        <p className="py-2 mt-2 text-left text-xl inline-block  align-middle  text-gray-700">
          Choose Your Destination
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
      <div className="hidden md:inline-block">
        <img
          className="hidden md:inline-block"
          src={World}
          alt="world"
          height="400"
          width="400"
        />
        <div className="flex p-4 flex-row-reverse ">
          <TelegramShareButton
            className="p-1"
            url={"https://moodz.yakovleva.dev/"}
          >
            <TelegramIcon size={30} round={true} />
          </TelegramShareButton>
          <FacebookShareButton
            className="p-1"
            url={"https://moodz.yakovleva.dev/"}
          >
            <FacebookIcon size={30} round={true} />
          </FacebookShareButton>

          <TwitterShareButton
            className="p-1"
            url={"https://moodz.yakovleva.dev/"}
          >
            <TwitterIcon size={30} round={true} />
          </TwitterShareButton>
          <RedditShareButton
            className="p-1"
            url={"https://moodz.yakovleva.dev/"}
          >
            <RedditIcon size={30} round={true} />
          </RedditShareButton>
          <p className="text-gray-500 pr-5 text-xl self-end">Share: </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
