import React, { useReducer } from "react";
import styled from "styled-components";
import Grid from "./Grid.js";

/* -- ARRAYEN -- */

let rows = Array(7).fill(null); // arrayen som skapar 7 st columner
rows = rows.map(() => Array(6).fill(null)); // mappar ut 6 st rader från första arrayen.

/* -- GAME FUNKTIONEN -- */

export default function Game() {
  const [state, dispatch] = useReducer(reducer, {
    rows,
    x: 0,
    y: 0,
    player: "red"
  });

  return (
    <>
      <Grid
        onClickCircle={(x, y) => {
          dispatch({ type: "fillCircle", x, y });
          //console.log(state);
        }}
        rows={state.rows}
      />
      <p>
        Player <b>{state.player}</b> turn
      </p>
    </>
  );
}

/* -- REDUCER FUNKTIONEN (switch-satsen) -- */

function reducer(state, action) {
  switch (action.type) {
    case "fillCircle":
      const { x, y } = action;
      const newRows = [...state.rows];
      const newColumn = [...newRows[x]];
      if (getLastIndex(newColumn, state.player) === null) {
        return state;
      }
      newRows[x] = newColumn;

      checkWinnerVerti(newRows);
      checkWinnerHori(newRows);
      checkWinnerDiagonalLeftToRight(newRows);
      checkWinnerDiagonalRightToLeft(newRows);

      return {
        rows: newRows,
        x: action.x,
        y: action.y,
        player: state.player === "red" ? "blue" : "red"
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

/* -- CHECK WINNERS FUNKTIONER -- */


function checkWinnerVerti(rows) {
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < 4; j++) {
      const y = rows[i][j];
      if (
        y &&
        y === rows[i][j + 1] &&
        y === rows[i][j + 2] &&
        y === rows[i][j + 3]
      ) {
        console.log("THE WINNER IS: ", y, ", vertikalt!");
      }
    }
  }
}

function checkWinnerHori(rows) {
  for (let i = 0; i < rows.length - 3; i++) {
    for (let j = 0; j < 7; j++) {
      const x = rows[i][j];
      if (
        x &&
        x === rows[i + 1][j] &&
        x === rows[i + 2][j] &&
        x === rows[i + 3][j]
      ) {
        console.log("THE WINNER IS: ", x, ", horizontal!");
      }
    }
  }
}

 function checkWinnerDiagonalLeftToRight(rows) {
  for (let i = 0; i < rows.length - 3; i++) {
    for (let j = 5; j >= 0; j--) {
      const x = rows[i][j];
      //console.log("rows[i] =", rows[i], "rows[i -1]= ", rows[i-1], "i=", i);
      if (
        x &&
        x === rows[i + 1][j - 1] &&
        x === rows[i + 2][j - 2] &&
        x === rows[i + 3][j - 3]
      ) {
        console.log("THE WINNER IS", x, ", diagonal left to right");
          console.log(rows);

        //  Ändra ngt här så den stoppas vid vinnare av fyra.
      }
    }
  }
}

function checkWinnerDiagonalRightToLeft(rows) {
  //console.log(rows);
 for (let i = 0; i < rows.length - 3; i++) {
    for (let j = 0; j < 5; j++) {
      const x = rows[i][j];
      //console.log("rows[i] =", rows[i], "rows[i -1]= ", rows[i-1], "i=", i);
      if (
        x &&
        x === rows[i + 1][j + 1] &&
        x === rows[i + 2][j + 2] &&
        x === rows[i + 3][j + 3]
      ) {
        console.log("THE WINNER IS", x, ", diagonal right to left");
        //  Ändra ngt här så den stoppas vid vinnare av fyra.
      }
    }
  }
}

/* -- KOMMENTARER -- */

/* 
- action.type loggar ditt case-namn(samma som type-namn)
- action loggar ett object som innehåller det som finns i dispatch 
 //console.log(state, action.y, action.x, action.type); 
      //state= rows, y&x = indexplatserna, action.type= "fillCircle"
*/
