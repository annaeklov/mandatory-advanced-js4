import React, { useReducer, useState } from "react";
import styled from "styled-components";
import Grid from "./Grid.js";

let rows = Array(7).fill(null); // arrayen som skapar 7 st columner

rows = rows.map(() => Array(6).fill(null)); // mappar ut 6 st rader från första arrayen.

export default function Game() {
  const [player, changePlayer] = useState(true);

  const [state, dispatch] = useReducer(reducer, { rows, x: 0, player: player });

  return (
    <>
      <Grid
        onClickCircle={x => {
          dispatch({ type: "fillCircle", x, player });
          changePlayer(!player);
          console.log(state);
        }}
        rows={state.rows}
      />
      <p>Player: {player ? "red" : "blue"}</p>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "fillCircle":
      const { x, player } = action;
      console.log(action);

      const newRows = [...state.rows];
      //console.log("newRows", newRows); // loggar hela arrayen

      const newColumn = [...newRows[x]];
      //console.log("newColumn", newColumn);

      console.log(newColumn);

      getLastIndex(newColumn, player);

      newRows[x] = newColumn;
      //console.log(newColumn, newRows);

      return {
        rows: newRows,
        x: action.x,
        y: action.y,
        player: action.player
      };

    default:
      return state;
  }
}

function getLastIndex(newColumn, player) {
  for (let i = newColumn.length - 1; i >= 0; i--) {
    if (newColumn[i] === null) {
      newColumn[i] = player ? "red" : "blue";
      return newColumn;
    }
  }
  return null;
}

/* 
- action.type loggar ditt case-namn(samma som type-namn)
- action loggar ett object som innehåller det som finns i dispatch 
 //console.log(state, action.y, action.x, action.type); 
      //state= rows, y&x = indexplatserna, action.type= "fillCircle"
*/
