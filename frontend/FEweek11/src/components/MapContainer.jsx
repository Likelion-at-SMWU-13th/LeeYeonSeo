import React from "react";
import { useState } from "react";
import KakaoMap from "./KakaoMap.jsx";
import useKakaoShare from "../hooks/useKakaoShare.js";
import * as S from "./styled.js";

const MapContainer = ({ title }) => {
  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 });
  const [isMarker, setIsMarker] = useState(false);
  const { shareKakaoLocation } = useKakaoShare();

  const handelFindMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      setCenter({ lat, lng });
      setIsMarker(true);
    });
  };

  const handleShareMyLocation = () => {
    shareKakaoLocation(center);
  };

  return (
    <S.Wrapper>
      <S.H1>{title}</S.H1>
      <S.BtnContainer>
        <S.FindBtn onClick={handelFindMyLocation}>현재 내 위치 찾기</S.FindBtn>
        <S.ShareBtn onClick={handleShareMyLocation}>
          현재 내 위치 공유하기
        </S.ShareBtn>
      </S.BtnContainer>
      <KakaoMap center={center} isMarker={isMarker} />
    </S.Wrapper>
  );
};

export default MapContainer;
