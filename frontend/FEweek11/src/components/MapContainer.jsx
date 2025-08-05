import React from "react";
import { useState } from "react";
import KakaoMap from "./KakaoMap.jsx";
import * as S from "./styled.js";

const MapContainer = ({ title }) => {
  const kakaoApiKey = import.meta.env.VITE_KAKAO_APP_KEY;
  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 });
  const [isMarker, setIsMarker] = useState(false);

  const handelFindMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      setCenter({ lat, lng });
      setIsMarker(true);
    });
  };

  const handleShareMyLocation = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoApiKey);
    }

    window.Kakao.Share.sendDefault(
      {
        objectType: "location",
        address: `${center.lat}, ${center.lng}`,
        addressTitle: "내 위치",
        content: {
          title: "숙명여대 멋사 13기 프론트 실습",
          description: "나의 작고 소중한 위치를 공유합니다",
          imageUrl:
            "https://i.pinimg.com/736x/3a/31/c1/3a31c1c60cc0473ef39dae3fc27a76a5.jpg",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: "https://developers.kakao.com",
              webUrl: "https://developers.kakao.com",
            },
          },
        ],
      },
      function (error) {
        console.log(error);
      }
    );
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
