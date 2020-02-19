export function checkWinner(rows) {
  if (
    checkWinnerVerti(rows) ||
    checkWinnerHori(rows) ||
    checkWinnerDiagonalLeftToRight(rows) ||
    checkWinnerDiagonalRightToLeft(rows)
  ) {
    return true;
  }
  return false;
}

/* -- KOLLA VINNARE FUNKTIONER -- */

function checkWinnerVerti(rows) {
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < 4; j++) {
      const x = rows[i][j];
      if (
        x &&
        x === rows[i][j + 1] &&
        x === rows[i][j + 2] &&
        x === rows[i][j + 3]
      ) {
        console.log("THE WINNER IS: ", x, ", vertikalt!");
        return true;
      }
    }
  }
  return false;
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
        return true;
      }
    }
  }
  return false;
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
        return true;

        //  Ändra ngt här så den stoppas vid vinnare av fyra.
      }
    }
  }
  return false;
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
        return true;

        //  Ändra ngt här så den stoppas vid vinnare av fyra.
      }
    }
  }
  return false;
}
