import React from "react";
import logo from "../assets/WATCHA_PEDIA_Logo_Black 1.svg";
import styled from "styled-components";

const Info = styled.div`
  color: #a0a0a0;
  padding-left: 4.06rem;
  margin-bottom: 0px;
  font-size: 13px;
`;

const Dropdown = styled.select`
  background-color: #000;
  color: white;
  border: 1px solid #555;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 14px;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3' height='3' viewBox='0 0 3 3' fill='none'%3E%3Cpath d='M1.25428 2.83925C1.36559 3.05358 1.63433 3.05358 1.74564 2.83925L2.95871 0.501698C3.07331 0.280911 2.93579 7.04874e-08 2.71303 7.04874e-08H0.28689C0.0642736 7.04874e-08 -0.0732497 0.280911 0.0412098 0.501698L1.25428 2.83925Z' fill='%23777777'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 0.5rem;
  cursor: pointer;
  width: 130px;
  height: 40px;

  &:focus {
    outline: none;
    border-color: #888;
  }
  &:hover {
    background-color: #333;
  }
`;

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <p
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: "0px",
          paddingTop: "70px",
          fontSize: "20px",
        }}
      >
        지금까지{" "}
        <span style={{ color: "#FF0558" }}>★ 777,777,777개의 평가가</span>{" "}
        쌓였어요.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "4.06rem",
        }}
      >
        <Info>
          <p>
            서비스 이용약관 | <b>개인정보 처리방침</b> | 회사 안내
          </p>
          <p>
            고객센터 | cs@watchapedia.co.kr / 최신 광고 소개서
            <br />
            광고 문의 | ad-sales@watchapedia.co.kr, 02-515-9985
            <br />
            제휴 및 대외 협력 | http://watcha.team/contact
            <br />
          </p>
          <p style={{ color: "#7E7E7E" }}>
            주식회사 왓챠 | 대표 박태훈 | 서울 특별시 서초구 강남대로 343
            신덕빌딩 3층
            <br />
            사업자 등록 번호 211-88-66013
          </p>
          <p style={{ marginBottom: "0px", paddingBottom: "60px" }}>
            <img
              src={logo}
              style={{
                width: "80px",
                verticalAlign: "middle",
                marginRight: "4.5px",
              }}
            />{" "}
            <span style={{ verticalAlign: "middle", color: "#7E7E7E" }}>
              © 2025 by WATCHA, Inc. All rights reserved.
            </span>
          </p>
        </Info>
        <Dropdown>
          <option>한국어</option>
          <option>English</option>
          <option>日本語</option>
        </Dropdown>
      </div>
    </div>
  );
};

export default Footer;
