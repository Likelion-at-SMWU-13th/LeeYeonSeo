import React from "react";
import KakaoImg from "./assets/kakao_login.png";
import GoogleImg from "./assets/google_login.png";

const Login = () => {
  // 카카오 인증 서버로 이동하기 위해 호출하는 주소(이 주소로 들어가면 사용자에게 로그인+동의 화면을 보여주게 됨)
  // 호출해야 하는 주소: https://kauth.kakao.com/oauth/authorize

  // 카카오 로그인을 하기 위해 요청을 보낼 때(주소를 호출할 때) 세가지 쿼리 파라미터를 필수적으로 보내야 함
  // 카카오에서 요구하는 첫번째 쿼리 파라미터: response_type=code
  // -> 카카오에게 "Autorization Code 방식으로 로그인 할게요" 라고 알려주는 역할

  // 카카오에서 요구하는 두번째 쿼리 파라미터: client_id=${import.meta.env.VITE_REST_API_KEY}
  // -> 카카오에 등록된 우리 앱을 식별하는 값, ClientID
  // 카카오가 어떤 앱이 요청했는 지 알 수 있게 해주는 인증용 ID
  // .env에 숨겨두고 환경 변수로 불러옴

  // 카카오에서 요구하는 세번째 쿼리 파라미터: redirect_uri=${import.meta.env.VITE_REDIRECT_URI}
  // -> 사용자가 로그인과 동의를 마친 후, 카카오가 인가 코드를 리디렉션해줄 주소를 지정하는 부분
  // 사전에 등록이 되어있어야만 주소가 작동되기에(카카오에서 필수적으로 요구하기 때문) 실제 페이지가 없어도 미리 등록해둬야 함(맞나요?..)
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;

  // 현재 주소를 authServerLink가 가리키는 곳으로 이동하는 함수
  const handleKakao = () => {
    window.location.href = authServerLink;
  };
  return (
    <div className="login-box">
      <h2>로그인</h2>
      <div className="btns-container">
        {/* 카카오 로그인 이미지를 누르면 handleKakao 함수가 호출되어 카카오 로그인 페이지로 이동 */}
        <button onClick={handleKakao}>
          <img src={KakaoImg} alt="kakao_button" />
        </button>
        <button>
          <img src={GoogleImg} alt="google_button" />
        </button>
      </div>
    </div>
  );
};

export default Login;
