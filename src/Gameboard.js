import React from "react";
import styled, { keyframes } from "styled-components/macro";

const Board = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: 450px;
`;

const BoardContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

const TileRow = styled.div`
  display: flex;
  width: 100%;
  height: 33.33%;
  top: ${props => props.i * 33.33}%;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
`;

const Tile = styled.div`
  padding: 5%;
  width: 33.33%;
  margin: 3%;
  background-color: ${props => props.theme.colours.tileBackground};
  color: ${props => props.theme.colours.tileFont};
  border-radius: 10px;
`;

const OSVGKeyframes = keyframes`
to {
  stroke-dashoffset: 0;
}`;

const OSVG = styled.svg`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${OSVGKeyframes} 0.7s ease-in forwards;
  stroke: ${props => props.theme.colours.OTileFont};
`;

const O = () => (
  <OSVG viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" strokeWidth="10" fill="none" />
  </OSVG>
);

const XSVGKeyframes = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const XLine1 = styled.line`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${XSVGKeyframes} 0.4s ease-in forwards;
  stroke: ${props => props.theme.colours.XTileFont};
`;

const XLine2 = styled.line`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${XSVGKeyframes} 0.4s ease-in forwards;
  stroke: ${props => props.theme.colours.XTileFont};
  animation-delay: 0.2s;
`;

const X = () => (
  <svg viewBox="0 0 100 100">
    <XLine1 x1="5" y1="5" x2="95" y2="95" strokeWidth="10" />
    <XLine2 x1="95" y1="5" x2="5" y2="95" strokeWidth="10" />
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
