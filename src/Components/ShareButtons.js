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
        <TelegramIcon size={30} round={true} />
      </TelegramShareButton>
      <FacebookShareButton className="p-1" url={"https://moodz.yakovleva.dev/"}>
        <FacebookIcon size={30} round={true} />
      </FacebookShareButton>
      <TwitterShareButton className="p-1" url={"https://moodz.yakovleva.dev/"}>
        <TwitterIcon size={30} round={true} />
      </TwitterShareButton>
      <RedditShareButton className="p-1" url={"https://moodz.yakovleva.dev/"}>
        <RedditIcon size={30} round={true} />
      </RedditShareButton>
      <p className="text-gray-500 pr-5 text-l self-end">Share: </p>
    </div>
  );
};

export default ShareButtons;
