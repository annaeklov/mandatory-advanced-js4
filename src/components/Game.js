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
    gameOver: false
  });

  /*   let button = true;
   */
  return (
    <>
      <Grid
        onClickCircle={(x, y) => {
          dispatch({ type: "fillCircle", x, y });
          //console.log(state);
        }}
        rows={state.rows}
      />
      {!state.gameOver && (
        <p>
          Player <b>{state.player}</b> turn
        </p>
      )}

      <div>
        {state.gameOver && (
          <div>
            <p>THE WINNER IS: {state.player}</p>
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
      if (state.gameOver) return state;
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

      return {
        ...state,
        rows: newRows,
        player: !checkWinner(newRows)
          ? state.player === "red"
            ? "blue"
            : "red"
          : state.player,
        gameOver: checkWinner(newRows)
      };

    case "reset":
      console.log("click reset");
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

/* -- KOMMENTARER -- */

/* 
- action.type loggar ditt case-namn(samma som type-namn)
- action loggar ett object som innehåller det som finns i dispatch 
 //console.log(state, action.y, action.x, action.type); 
      //state= rows, y&x = indexplatserna, action.type= "fillCircle"
*/
