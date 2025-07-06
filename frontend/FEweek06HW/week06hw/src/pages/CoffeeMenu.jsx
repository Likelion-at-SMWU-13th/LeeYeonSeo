import React, { useRef } from "react";
import Coffee from "../components/Coffee";
import NonCoffee from "../components/NonCoffee";
import Menu from "../components/Menu";
import * as S from "../Main.Styled";

const CoffeeMenu = () => {
  const coffeeRef = useRef(null);
  const nonCoffeeRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <S.HeaderImage src="https://cdn.eyesmag.com/content/uploads/posts/2021/03/15/hollys-brand-renewal-01-39a756e8-a1dd-464d-8ad4-b5abd2236455.jpg" />
      <S.ButtonDiv>
        <S.ScrollBtn onClick={() => handleScroll(coffeeRef)}>
          Coffee
        </S.ScrollBtn>
        <S.ScrollBtn onClick={() => handleScroll(nonCoffeeRef)}>
          Non-Coffee
        </S.ScrollBtn>
      </S.ButtonDiv>

      <div>
        <Menu ref={coffeeRef} menu={"Coffee"} />
        <Coffee></Coffee>
        <Menu ref={nonCoffeeRef} menu={"Non-Coffee"} />
        <NonCoffee></NonCoffee>
      </div>
    </div>
  );
};

export default CoffeeMenu;
