import React, { useReducer } from "react";
import styled from "styled-components";
import Grid from "./Grid.js";
import { checkWinner } from "./CheckWinner.js";

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
    player: "red",
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
      {(!state.gameOver && !state.tie) && (
        <p>
          Player <b>{state.player}</b> turn
        </p>
      )}

      <div>
        {(state.gameOver || state.tie) && (
          <div>
            <p>
              {state.gameOver ? `THE WINNER IS: ${state.player}` : `IT'S A TIE`}
            </p>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
          </div>
        )}
      </div>
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

      /* if (checkWinner(newRows)) {
         return {
          ...state,
          rows: newRows,
          gameOver: true
        } ;
      } */
      console.log(state.countClick);

      return {
        ...state,
        rows: newRows,
        player: !checkWinner(newRows)
          ? state.player === "red"
            ? "blue"
            : "red"
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
        player: "red",
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
