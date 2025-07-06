import { Link } from "react-router-dom";
import * as S from "../Main.Styled";

const FirstPage = () => {
  return (
    <div>
      <S.HeaderImage src="https://cdn.eyesmag.com/content/uploads/posts/2021/03/15/hollys-brand-renewal-01-39a756e8-a1dd-464d-8ad4-b5abd2236455.jpg" />
      <S.ButtonDiv>
        <Link to="/coffee">커피/논-커피 메뉴</Link>
        <Link to="/cool">여름 추천 메뉴</Link>
      </S.ButtonDiv>
    </div>
  );
};

export default FirstPage;
