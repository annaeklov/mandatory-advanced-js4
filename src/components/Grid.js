import React from "react";
import styled from "styled-components";
import Classnames from "classnames";

export default function Grid({ onClickCircle, rows }) {
  return (
    <Container>

      <GridWrapper>
        {rows.map((row, x) => {
          return (
            <div className="rows" key={x} onClick={() => onClickCircle(x)}>
              {row.map((circle, y) => {
                return (
                  <div className={Classnames("circle", [circle])} key={y}></div>
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
    border: 1px solid #740200;
  }

  .Harry {
    background-image: url("https://i1.wp.com/www.heyuguys.com/images/2011/05/Harry-Potter-and-the-Deathly-Hallows-Part-2-Poster.jpg?fit=486%2C718&ssl=1");
    background-repeat: no-repeat;
    background-size: cover;
        opacity: 0.8;

  }

  .Voldemort {
    background-image: url("https://vignette.wikia.nocookie.net/harrypotter/images/6/6e/VoldemortHeadshot_DHP1.png/revision/latest/top-crop/width/360/height/360?cb=20161203031453");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.8;
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
