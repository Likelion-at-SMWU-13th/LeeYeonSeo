import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import * as S from "../Main.Styled";
import Menu from "../components/Menu";
import Coffee from "../components/Coffee";
import NonCoffee from "../components/NonCoffee";
import Cool from "../components/Cool";

const Layout = () => {
  const { menu } = useParams();

  const coffeeRef = useRef(null);
  const nonCoffeeRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <S.HeaderImage src="https://cdn.eyesmag.com/content/uploads/posts/2021/03/15/hollys-brand-renewal-01-39a756e8-a1dd-464d-8ad4-b5abd2236455.jpg" />

      {menu === "coffee" && (
        <>
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
          <Link to="/cool">여름 추천 메뉴 보러가기</Link>
        </>
      )}
      {menu === "cool" && (
        <>
          <Menu menu={"Cool"} />
          <Cool />
          <Link to="/coffee">기본 메뉴 보러가기</Link>
        </>
      )}
    </div>
  );
};

export default Layout;
