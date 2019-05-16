// @Feature - let user change the tile symbol somehow
const X_TILE = "X";
const O_TILE = "O";

export const calculateNextPlayerTurn = currentPlayer =>
  currentPlayer === X_TILE ? O_TILE : X_TILE;

export const calculateWinner = board => {
  // check for winner
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  // check for draw
  // @Feature - check for draw if there are no winning moves left
  let isDraw = true;

  for (let i = 0; i < board.length; i++) {
    if (board[i] == null) {
      isDraw = false;
    }
  }

  return isDraw ? "draw" : null;
};

export const generateScoreboadMessage = (winner, currentPlayer) => {
  if (winner == null) {
    return currentPlayer + "'s Turn";
  } else {
    if (winner === "draw") {
      return "It's a draw!";
    }

    // @Feature - add flashing animation when someone wins
    return winner + "  Wins!";
  }
};
