import React from "react";
import * as S from "../Main.Styled";

const Menu = React.forwardRef(({ menu }, ref) => {
  return <S.H2 ref={ref}>{menu} Menu</S.H2>;
});

export default Menu;
