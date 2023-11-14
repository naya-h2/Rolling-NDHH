import styled from "styled-components";
import { useRef, useState } from "react";
import { Reactions } from "@/constants/mockUp";
import { DeviceSize } from "@/styles/DeviceSize";
import Badge from "@/components/commons/Badge";
import arrowDown from "@/assets/arrow_down.svg";
import { Z_INDEX } from "@/styles/ZindexStyles";
import EmojiPickButton from "./EmojiPickButton";

function HeaderEmojis({ topReactions, id }) {
  const containerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(0);

  const endIndex = 7;
  if (topReactions.length > 8) topReactions = topReactions.slice(0, endIndex);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleBlur = (event) => {
    if (!containerRef.current.contains(event.relatedTarget)) {
      setIsVisible(false);
    }
  };

  return (
    <>
      <Container onBlur={handleBlur} ref={containerRef}>
        <TopEmojis topReactions={topReactions} />
        <button onClick={handleClick}>
          <ArrowDown src={arrowDown} alt="이모티콘 반응 더보기 버튼" />
        </button>
        {isVisible && <EmojiList results={topReactions} id={id} />}
      </Container>
      <EmojiPickButton id={id} setShouldRender={setShouldRender} />
    </>
  );
}

export default HeaderEmojis;

const TopEmojis = ({ topReactions }) => {
  return (
    <Emojis>
      {topReactions.map((reaction, index) => {
        return (
          <Badge num={reaction.count} key={index}>
            {reaction.emoji}
          </Badge>
        );
      })}
    </Emojis>
  );
};

const EmojiList = ({ results }) => {
  return (
    <EmojiDropDown results={results}>
      {results.map((result, index) => {
        return (
          <Badge num={result.count} key={index}>
            {result.emoji}
          </Badge>
        );
      })}
    </EmojiDropDown>
  );
};

const Container = styled.div`
  position: relative;
  z-index: ${Z_INDEX.header_button_popup};

  display: flex;
`;

const ArrowDown = styled.img`
  padding: 0 0.6rem;
  margin-right: 0.8rem;
`;

const Emojis = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const EmojiDropDown = styled.div`
  width: 33.25rem;
  padding: 2.4rem;

  position: absolute;
  top: 5.3rem;
  right: 2rem;

  display: grid;
  gap: 0.8rem 1rem;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(2, auto);

  border-radius: 0.8rem;
  border: 0.1rem solid #b6b6b6;
  background: var(--White);
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);

  @media (max-width: ${DeviceSize.mobile}) {
    width: auto;
    padding: 1.6rem;

    top: 3.7rem;
    right: -20rem;

    grid-template-columns: repeat(3, auto);
  }
`;