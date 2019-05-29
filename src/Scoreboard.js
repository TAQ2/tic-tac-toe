import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components/macro";

import { generateScoreboadMessage } from "./logic";

const Board = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 425px;
`;

const ScoreboardContainer = styled.div`
  width: 100%;
  height: ${props => props.containerWidth / 3.4}px;
  background-color: ${props => props.theme.colours.scoreboardBackground};
  border-radius: 10px;
  font-family: digital-clock-font;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 4%;
`;

const ScoreTile = styled.div`
  color: ${props => props.theme.colours.scoreFont};
  font-size: ${props => props.containerWidth / 4}px;
  line-height: ${props => props.containerWidth / 4}px;
  border-radius: 1vw;
  text-align: center;
  width: 15%;
  justify-content: space-around;
`;

const scoreboardMessageKeyFrames = keyframes`
from,
  29.9% {
    opacity: 0;
  }
  30%,
  to {
    opacity: 1;
  }

`;

const ScoreboardMessage = styled.div`
  color: ${props => props.theme.colours.scoreboardMessageBackground};
  font-size: ${props => props.containerWidth / 8}px;
  line-height: ${props => props.containerWidth / 8}px;
  animation: ${props => props.winner != null && scoreboardMessageKeyFrames} 1s
    linear infinite;
  padding-bottom: ${props => props.containerWidth / 100}px;
`;

const PrimaryButton = styled.button`
  width: 45%;
  height: ${props => props.containerWidth / 15}px;
  position: relative;
  background: none;
  color: ${props => props.theme.colours.primaryButton};
  text-transform: uppercase;
  text-decoration: none;
  border: 0.1em solid ${props => props.theme.colours.primaryButton};
  outline: none;
  font-family: digital-clock-font;
  font-size: ${props => props.containerWidth / 20}px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: black;
    height: 0.11em;
    right: 20%;
    top: -0.1em;
    transform: skewX(-45deg);
    -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: black;
    height: 0.11em;
    left: 20%;
    bottom: -0.1em;
    transform: skewX(45deg);
    -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &:hover {
    &::before {
      right: 80%;
    }
    &::after {
      left: 80%;
    }
  }
`;

const ScoreboardCentre = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  flex: 1;
`;

const Scoreboard = props => {
  const [containerWidth, setContainerWidth] = useState();
  const containerRef = useRef(null);

  // @Question - maybe use this instead? https://reactjs.org/docs/forwarding-refs.html
  // @Cleanup - make reusable and use in the game board
  useEffect(() => {
    const handleResize = () =>
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Board ref={containerRef}>
      <ScoreboardContainer containerWidth={containerWidth}>
        <ScoreTile containerWidth={containerWidth}>{props.score[0]}</ScoreTile>
        {/* @Cleanup - use styled components */}
        <ScoreboardCentre>
          <ScoreboardMessage
            containerWidth={containerWidth}
            winner={props.winner}
          >
            {generateScoreboadMessage(props.winner, props.currentPlayer)}
          </ScoreboardMessage>
          <PrimaryButton
            onClick={props.handleResetGame}
            containerWidth={containerWidth}
          >
            {props.winner == null ? "Reset" : "Start"}
          </PrimaryButton>
        </ScoreboardCentre>
        <ScoreTile containerWidth={containerWidth}>{props.score[1]}</ScoreTile>
      </ScoreboardContainer>
    </Board>
  );
};

export default Scoreboard;
