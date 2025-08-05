import React from "react";
import KakaoMap from "./KakaoMap.jsx";
import * as S from "./styled.js";

const MapContainer = ({ title }) => {
  return (
    <S.Wrapper>
      <S.H1>{title}</S.H1>
      <KakaoMap />
    </S.Wrapper>
  );
};

export default MapContainer;
