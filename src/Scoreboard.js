import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components/macro";

import { generateScoreboadMessage } from "./logic";

const Board = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 350px;
`;

const ScoreboardContainer = styled.div`
  width: 100%;
  height: ${props => props.containerWidth / 3.4}px;
  background-color: black;
  border-radius: 0.5vw;
  font-family: digital-clock-font;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 4%;
`;

// @Feature - transition digit
const ScoreTile = styled.div`
  color: #629460;
  font-size: ${props => props.containerWidth / 4}px;
  background-color: rgba(40, 40, 40, 0.4);
  border-radius: 1vw;
  text-align: center;
  width: 15%;
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
  font-size: ${props => props.containerWidth / 6.5}px;
  animation: ${props => props.winner != null && scoreboardMessageKeyFrames} 1s
    linear infinite;
`;

const PrimaryButton = styled.button`
  width: 45%;
  height: ${props => props.containerWidth / 12}px;
  position: relative;
  background: none;
  color: aqua;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.2em solid aqua;
  outline: none;
  font-family: digital-clock-font;
  font-size: ${props => props.containerWidth / 20}px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #222;
    height: 0.21em;
    right: 20%;
    top: -0.21em;
    transform: skewX(-45deg);
    -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #222;
    height: 0.21em;
    left: 20%;
    bottom: -0.25em;
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
        {/* @Feature - code for two digits */}
        <ScoreTile containerWidth={containerWidth}>{props.score[0]}</ScoreTile>
        {/* @Cleanup - use styled components */}
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "70%",
            height: "80%"
          }}
        >
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
        </div>
        <ScoreTile containerWidth={containerWidth}>{props.score[1]}</ScoreTile>
      </ScoreboardContainer>
    </Board>
  );
};

export default Scoreboard;
