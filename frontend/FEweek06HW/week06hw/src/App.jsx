import React from "react";
import CoffeeMenu from "./pages/CoffeeMenu";
import CoolMenu from "./pages/CoolMenu";
import "./App.css";
import * as S from "./Main.Styled";

function App() {
  return (
    <>
      <CoffeeMenu />
      <CoolMenu />
    </>
  );
}

export default App;
