import React from "react";
import Cool from "../components/Cool";
import Menu from "../components/Menu";
import * as S from "../Main.Styled";

const CoolMenu = () => {
  return (
    <div>
      <S.HeaderImage src="https://cdn.eyesmag.com/content/uploads/posts/2021/03/15/hollys-brand-renewal-01-39a756e8-a1dd-464d-8ad4-b5abd2236455.jpg" />
      <Menu menu={"Cool"} />
      <Cool />
    </div>
  );
};

export default CoolMenu;
