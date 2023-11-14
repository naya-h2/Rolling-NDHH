import { COLOR } from "@/styles/ColorStyles";
import { TEAM } from "./config";

export const makeRecipient = ({ name, backgroundColor, URL, password }) => {
  return {
    team: TEAM,
    name,
    backgroundColor: backgroundColor ?? COLOR.O,
    backgroundImageURL: URL,
    password,
  };
};

export const makeMessage = ({ recipientId, sender, URL, relationship, content, font }) => {
  return {
    team: TEAM,
    recipientId,
    sender,
    profileImageURL: URL,
    relationship,
    content,
    font,
  };
};

export const makeEmoji = (emoji) => {
  return {
    postData: {
      emoji: emoji,
      type: "increase",
    },
  };
};
