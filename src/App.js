import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

import Gameboard from "./Gameboard";
import Scoreboard from "./Scoreboard";

import { calculateWinner, calculateNextPlayerTurn } from "./logic";

const emptyBoard = Array(9).fill(null);

// @Cleanup - duplicate
const X_TILE = "X";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 1.5vh;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  // @Cleanup - these two lines aren't intuitive
  const winner = calculateWinner(board);

  // setting the state multiple times is fine
  const handleClickTile = tileIndex => () => {
    // @Incomplete - shouldn't be able to click a tile twice
    if (winner != null) {
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
  );
};

export default App;
