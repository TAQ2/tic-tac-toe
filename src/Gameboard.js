import React from "react";
import styled from "styled-components/macro";

const Board = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: 450px;
`;

const BoardContainer = styled.div`
  width: 100%;
  ${"" /* margin-bottom: 4%; */}
  padding-top: 100%;
  position: relative;
  background-color: rgba(255, 255, 0, 0.05);
`;

const TileRow = styled.div`
  display: flex;
  width: 100%;
  height: 33.33%;
  top: ${props => props.i * 33.33 + "%"};
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
`;

const Tile = styled.div`
  padding: 5%;
  width: 33.33%;
  margin: 3%;
  background-color: rgba(240, 255, 0, 1);
  border-radius: 10px;
`;

const X = () => (
  <svg height="100%" width="100%" viewBox="0 0 100 100">
    <line x1="5" y1="5" x2="95" y2="95" stroke="#000" strokeWidth="10" />
    <line x1="95" y1="5" x2="5" y2="95" stroke="#000" strokeWidth="10" />
  </svg>
);

const O = () => (
  <svg height="100%" width="100%" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" stroke="#000" strokeWidth="10" />
    <circle cx="50" cy="50" r="40" fill="rgba(240, 255, 0, 1)" />
  </svg>
);

const renderTileText = tile => {
  switch (tile) {
    case "X":
      return <X />;
    case "O":
      return <O />;
    default:
      return "";
  }
};

const GameBoard = ({ board, onClick }) => {
  return (
    <Board>
      <BoardContainer>
        <TileRow i={0}>
          <Tile onClick={onClick(0)}>{renderTileText(board[0])}</Tile>
          <Tile onClick={onClick(1)}>{renderTileText(board[1])}</Tile>
          <Tile onClick={onClick(2)}>{renderTileText(board[2])}</Tile>
        </TileRow>
        <TileRow i={1}>
          <Tile onClick={onClick(3)}>{renderTileText(board[3])}</Tile>
          <Tile onClick={onClick(4)}>{renderTileText(board[4])}</Tile>
          <Tile onClick={onClick(5)}>{renderTileText(board[5])}</Tile>
        </TileRow>
        <TileRow i={2}>
          <Tile onClick={onClick(6)}>{renderTileText(board[6])}</Tile>
          <Tile onClick={onClick(7)}>{renderTileText(board[7])}</Tile>
          <Tile onClick={onClick(8)}>{renderTileText(board[8])}</Tile>
        </TileRow>
      </BoardContainer>
    </Board>
  );
};

export default GameBoard;
