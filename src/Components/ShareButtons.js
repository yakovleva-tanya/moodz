import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  TelegramIcon
} from "react-share";

const ShareButtons = () => {
  return (
    <div className="flex p-4 flex-row-reverse">
      <TelegramShareButton className="p-1" url={"https://moodz.yakovleva.dev/"}>
        <TelegramIcon
          iconBgStyle={{ fill: "#a0aec0" }}
          size={24}
          round={true}
        />
      </TelegramShareButton>
      <FacebookShareButton className="p-1" url={"https://moodz.yakovleva.dev/"}>
        <FacebookIcon
          iconBgStyle={{ fill: "#a0aec0" }}
          size={24}
          round={true}
        />
      </FacebookShareButton>
      <TwitterShareButton className="p-1" url={"https://moodz.yakovleva.dev/"}>
        <TwitterIcon iconBgStyle={{ fill: "#a0aec0" }} size={24} round={true} />
      </TwitterShareButton>
      <RedditShareButton className="p-1" url={"https://moodz.yakovleva.dev/"}>
        <RedditIcon iconBgStyle={{ fill: "#a0aec0" }} size={24} round={true} />
      </RedditShareButton>
      <p className="text-gray-500 pr-5 text-l self-end">Share: </p>
    </div>
  );
};

export default ShareButtons;
