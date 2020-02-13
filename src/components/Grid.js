import React from "react";
import styled from "styled-components";

export default function Grid() {
  const rows = Array(7)
    .fill(null)
    .map((circle, idx) => idx); //idx gör att de vår index-platser
  console.log("rows", rows); // en array 0-6, tot 7 st

  for (let row of rows) {
    console.log("row", row); // 0-6 var för sig

    const columns = Array(6)
      .fill(null)
      .map((circle, idx) => console.log("idx", idx));
    rows[row] = [...columns];
  }
  console.log("rows", rows);

  return (
    <Container>
      <h1 className="grid">HEJ GRID</h1>
      <GridWrapper>
        {rows.map((circle, idx) => (
          <div className="rows" key={idx}></div>
        ))}
      </GridWrapper>
    </Container>
  );
}

/*--- CSS ---*/

const Container = styled.div`
  height: 80%;
  width: 70%;
  position: absolute;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    opacity: 0.5;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  /* Denna vinner INTE pga har color: orange i AppDiv, AppDiv vinner pga den gör ALLA h1 under sig orangea.*/
  /*   h1 {
    color: pink;
  } */
`;

/* Denna vinner INTE pga har color: orange i AppDiv, AppDiv vinner pga den gör ALLA h1 under sig orangea.*/
/* const GridTitle = styled.h1`
  color: blue;
`; */

const GridWrapper = styled.div`
  height: 80%;
  width: 70%;
  position: absolute;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;

  .rows {
    border: 1px solid red;
    width: 20px;
    height: 20px;
  }

`;
