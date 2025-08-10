import CatCard from "./CatCard.jsx";
import * as S from "./styled.js";
const CatContainer = ({ title }) => {
  return (
    <S.Container>
      <S.H1>{title}</S.H1>
      <S.Wrapper>
        <CatCard />
      </S.Wrapper>
    </S.Container>
  );
};

export default CatContainer;
