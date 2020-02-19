import React, { useReducer } from "react";
import styled from "styled-components";
import Grid from "./Grid.js";
import { checkWinner } from "./CheckWinner.js";
import harry_vs_volde from "./pics/harry_vs_volde.jpg";

/* -- ARRAYEN -- */

function board() {
  let rows = Array(7).fill(null); // arrayen som skapar 7 st columner
  return rows.map(() => Array(6).fill(null)); // mappar ut 6 st rader från första arrayen
}

/* -- GAME FUNKTIONEN -- */

export default function Game() {
  const [state, dispatch] = useReducer(reducer, {
    rows: board(),
    x: 0,
    y: 0,
    player: "Harry",
    gameOver: false,
    countClick: 1,
    tie: false
  });

  return (
    <>
      <Grid
        onClickCircle={(x, y) => {
          dispatch({ type: "fillCircle", x, y });
        }}
        rows={state.rows}
      />
      {!state.gameOver && !state.tie && (
        <PlayerP>
          <b>{state.player}'s</b> turn
        </PlayerP>
      )}

      {(state.gameOver || state.tie) && (
        <Popup>
          <p>
            {state.gameOver ? `THE WINNER IS: ${state.player}` : `IT'S A TIE`}
          </p>
          <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </Popup>
      )}
    </>
  );
}

/* -- REDUCER FUNKTIONEN (switch-satsen) -- */

function reducer(state, action) {
  switch (action.type) {
    case "fillCircle":
      if (state.gameOver || state.tie) return state;
      const { x, y } = action;
      const newRows = [...state.rows];
      const newColumn = [...newRows[x]];
      if (getLastIndex(newColumn, state.player) === null) {
        return state;
      }
      newRows[x] = newColumn;

      return {
        ...state,
        rows: newRows,
        player: !checkWinner(newRows)
          ? state.player === "Harry"
            ? "Voldemort"
            : "Harry"
          : state.player,
        gameOver: checkWinner(newRows),
        countClick: state.countClick + 1,
        tie: state.countClick === 41 ? true : false
      };

    case "reset":
      return {
        rows: board(),
        x: 0,
        y: 0,
        player: "Harry",
        gameOver: false
      };

    default:
      return state;
  }
}

/* -- FYLLA-COLUMNEN FUNKTIONEN -- */

function getLastIndex(newColumn, player) {
  for (let i = newColumn.length - 1; i >= 0; i--) {
    if (newColumn[i] === null) {
      newColumn[i] = player;
      return newColumn;
    }
  }
  return null;
}

/* -- CSS -- */

const PlayerP = styled.p`
  position: absolute;
  margin: 0;
  left: 50%;
  transform: translate(-50%);
  top: 100px;
  font-size: 30px;
  color: #d3a625;
`;

const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 300px;
  height: 400px;
  border-radius: 2px;
  border: 3px solid black;
  background-image: url(${harry_vs_volde});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  p {
    color: #d3a625;
    font-size: 30px;
    background-color: black;
    font-weight: bold;
    text-align: center;
  }

  button{
    width: 60px;
    height: 30px;
    border-radius: 5px;
    background-color: #d3a625;
    color: black;
    border: none;
    position: absolute;
    right: 0;
    bottom: 0;

  }
`;
