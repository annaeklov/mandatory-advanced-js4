import React from "react";
import styled from "styled-components";

export default function Grid({ onClickCircle, rows }) {
  return (
    <Container>
      <h1 className="grid">HEJ GRID</h1>

      <GridWrapper>
        {rows.map((row, x) => {
          return (
            <div className="rows" key={x} onClick={() => onClickCircle(x)}>
              Rows. x: {x}
              {row.map((circle, y) => {
                return (
                  <div
                    className="circle"
                    key={y}
                    style={{
                      backgroundColor: circle ? circle : "white"
                    }}
                    /* onClick={() => onClickCircle(x, y)} */
                  >
                    Circle. y:{y}, x:{x}
                  </div>
                );
              })}
            </div>
          );
        })}
      </GridWrapper>
    </Container>
  );
}

/*--- CSS ---*/

const GridWrapper = styled.div`
  height: 80%;
  width: 70%;
  position: absolute;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;

  .rows {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .circle {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    justify-content: center;
    text-align: center;
    cursor: pointer;
  }
`;

const Container = styled.div`
  height: 600px;
  width: 800px;
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
