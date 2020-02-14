import React, { useReducer } from "react";
import styled from "styled-components";
import Grid from "./Grid.js";

let rows = Array(6).fill(null); // 6 st rader

rows = rows.map(() => Array(7).fill(null));

export default function Game() {
  const [state, dispatch] = useReducer(reducer, { rows, y: 0, x: 0 });

  return (
    <>
      <Grid
        onClickCircle={(y, x) => dispatch({ type: "fillCircle", y, x })}
        rows={state.rows}
      />
      <p>
        State: Y:{state.y} X:{state.x}
      </p>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "fillCircle":
      const { y, x } = action;
      console.log(state, action.y, action.x);

      const newRows = [...state.rows];
      const newColumn = [...newRows[y]];

      newColumn[x] = "red";
      newRows[y] = newColumn;
      return {
        rows: newRows,
        y: action.y,
        x: action.x
      };

    default:
      return state;
  }
}

/* 
- action.type loggar ditt case-namn(samma som type-namn)
- action loggar ett object som innehåller det som finns i dispatch 
*/
