import React, { useState } from "react";
// import styles from "./Game.module.scss";
import { calculateWinner } from "../../helpers";
import Board from "../Board/Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = () => {};

  const jumpTo = () => {};

  const renderMoves = () => {};

  return (
    <>
      <Board squares={board} onClick={handleClick} />
    </>
  );
};

export default Game;
