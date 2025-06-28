import React from "react";
import Menu from "./components/Menu";
import Coffee from "./components/Coffee";
import NonCoffee from "./components/NonCoffee";
import "./App.css";
import * as S from "./Main.Styled";

function App() {
  return (
    <>
      <S.HeaderImage src="https://cdn.eyesmag.com/content/uploads/posts/2021/03/15/hollys-brand-renewal-01-39a756e8-a1dd-464d-8ad4-b5abd2236455.jpg" />
      <Menu menu={"Coffee"} />
      <Coffee />
      <Menu menu={"Non-Coffee"} />
      <NonCoffee />
    </>
  );
}

export default App;
