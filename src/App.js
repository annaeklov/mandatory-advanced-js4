import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import hogwartsBG from "./components/pics/hogwartsBG.jpg";
import Game from "./components/Game.js";


export default class App extends React.Component {
  render() {
    return (
      <AppDiv>
        <GlobalStyle />
        <h1 className="app">CONNECT 4</h1>
       <Game/>
      </AppDiv>
    );
  }
}

/*--- CSS ---*/

/* Gör stylingen global, OM de inte har egen mer specifik styling i sitt eget element eller parent-element */

const GlobalStyle = createGlobalStyle`
  h1 {
    position:absolute;
    left: 20%;
    font-size: 30px;
    top: 5px;

    &.app {
      color: #d2b7c8;
    }
    &.grid  {
      color: #e9b9cc;
    }
  };
`;

const AppDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${hogwartsBG});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  /*Alla h1 under AppDiv kommer få denna styling, denna vinner ALLTID*/
  /*   h1 {
  } */
`;

/* Vinner över global men INTE h1 i sin parent */
/* const AppTitle = styled.h1`
`; */
