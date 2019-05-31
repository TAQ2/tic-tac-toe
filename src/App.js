import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

import BackgroundAnimation from "./randomCircles";
import Gameboard from "./Gameboard";
import Scoreboard from "./Scoreboard";

import { calculateWinner, calculateNextPlayerTurn } from "./logic";

const emptyBoard = Array(9).fill(null);

// @Cleanup - duplicate
const X_TILE = "X";

const AppContainer = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  padding-bottom: 2.5%;
  justify-content: center;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colours.appBackground};
  ${props => props.hasAppRendered && "visibility: hidden;"}
`;

const App = () => {
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState(X_TILE);
  const [score, setScore] = useState([0, 0]);
  const [hasAppRendered, setHasAppRendered] = useState(true);

  useEffect(() => {
    // let the component full mount before displaying UI so that dims can be calculated
    setHasAppRendered(false);
  }, []);

  const winner = calculateWinner(board);

  // setting the state multiple times is fine
  const handleClickTile = tileIndex => () => {
    if (winner != null || board[tileIndex] != null) {
      return;
    }

    // set new board
    const newBoard = board.slice(0);
    newBoard[tileIndex] = currentPlayer;
    setBoard(newBoard);

    // set player turn
    const nextPlayer = calculateNextPlayerTurn(currentPlayer);
    setCurrentPlayer(nextPlayer);

    // set scoreboard if needed
    const newWinner = calculateWinner(newBoard);
    if (newWinner != null && newWinner !== "draw") {
      const newScore =
        newWinner === X_TILE
          ? [score[0] + 1, score[1]]
          : [score[0], score[1] + 1];
      setScore(newScore);
    }
  };

  const handleResetGame = () => {
    setBoard(emptyBoard);
  };

  return (
    <div>
      <BackgroundAnimation />
      <AppContainer hasAppRendered={hasAppRendered}>
        <Gameboard board={board} onClick={handleClickTile} />
        <br />
        <Scoreboard
          score={score}
          winner={winner}
          currentPlayer={currentPlayer}
          handleResetGame={handleResetGame}
        />
      </AppContainer>
    </div>
  );
};

export default App;
