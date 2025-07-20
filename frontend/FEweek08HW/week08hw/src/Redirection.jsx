import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Redirection = () => {
  // 아까 받은 Authorization Code를 Redirect URI에서 추출
  const [params] = useSearchParams(); // useSearchParams를 통해 현재 url의 쿼리 파라미터들을 params에 저장
  const authCode = params.get("code"); // params에 저장된 쿼리 파라미터들 중 key 값이 "code"인 value 값을 authCode에 저장

  const grant_type = "authorization_code"; // 카카오에 요청을 보낼 때 필요한 쿼리 파라미터 중 하나로 값은 authorization_code로 고정해야 함
  const navigate = useNavigate();

  useEffect(() => {
    // 사전에 설정한 REST API 키와 Redirect URI, Authorization Code 값 등을 쿼리 파라미터로 싣고 Access Token을 요청
    // +) 요청 시 4가지의 쿼리 파라미터가 필수적으로 필요함(grant_type, client_id, redirect_uri, code)
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${
        import.meta.env.VITE_REST_API_KEY
      }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&code=${authCode}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      const data = res.json(); // 받아온 응답을 json 객체로 만들어줌
      data.then((data) => {
        localStorage.setItem("accessToken", data.access_token); // 요청에 대한 응답으로 넘어온 액세스 토큰을 브라우저의 로컬 스토리지에 저장
        navigate("/greeting"); // greeting 페이지로 이동
      });
    });
  }, [authCode, grant_type, navigate]);
  return <div>Redirection Page: 카카오 로그인 중...</div>;
};

export default Redirection;
