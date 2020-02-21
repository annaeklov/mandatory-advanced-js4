import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import hogwartsBG from "./components/pics/hogwartsBG.jpg";
import Game from "./components/Game.js";

export default class App extends React.Component {
  render() {
    return (
      <AppDiv>
        <GlobalStyle />
        <h1>CONNECT 4 - Harry Potter vs Voldemort</h1>
        <Game />
      </AppDiv>
    );
  }
}

/*--- CSS ---*/

const GlobalStyle = createGlobalStyle`
  h1 {
    position:absolute;
    left: 20%;
    font-size: 30px;
    top: 5px;
    color: #740200;
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
`;
