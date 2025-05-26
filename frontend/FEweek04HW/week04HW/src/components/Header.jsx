import React from "react";
import logo1 from "../assets/WATCHAPEDIA_Logo1.svg";
import glass from "../assets/MagGlasses.svg";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  height: 3.5rem;
  align-items: center;
  justify-content: space-between;
  padding-right: 4.06rem;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  padding: 5px 0px;
  background-color: #fff;
`;
const Img1 = styled.img`
  width: 135px;
  height: 29px;
  flex-shrink: 0;
  aspect-ratio: 135/29;
  margin-right: 29px;
`;

const P1 = styled.p`
  color: #727272;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  &:hover {
    color: #000;
  }
  &:first-child {
    color: #000;
  }
`;

const Menu = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 29px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  width: 17rem;
  height: 2.2rem;
  flex-shrink: 0;
  background: #f5f5f5;
`;

const Img2 = styled.img`
  width: 16.019px;
  height: 16.018px;
  flex-shrink: 0;
  margin-right: 7px;
  padding-left: 0.56rem;
  cursor: pointer;
`;

const Input = styled.input`
  color: #7e7e7e;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  background-color: #f5f5f5;
  outline: none;
  &:focus {
    outline: none;
    border: none;
  }
`;

const Login = styled.button`
  width: 65px;
  height: 2.2rem;
  color: #7f7f7f;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const Signup = styled.button`
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  background: rgba(217, 217, 217, 0);
  width: 65px;
  height: 2rem;
  flex-shrink: 0;
  color: #000;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const RightMenu = styled.div`
  display: flex;
  margin-right: 4.06rem;
`;
const LeftMenu = styled.div`
  display: flex;
  margin-left: 4.06rem;
  align-items: center;
`;

const Header = () => {
  return (
    <div style={{ position: "fixed", top: "0", width: "100%" }}>
      <Content>
        <LeftMenu>
          <Img1 src={logo1} />
          <Menu>
            <P1>홈</P1>
            <P1>영화</P1>
            <P1>시리즈</P1>
            <P1>책</P1>
            <P1>웹툰</P1>
          </Menu>
        </LeftMenu>
        <RightMenu>
          <Search>
            <Img2 src={glass}></Img2>
            <Input
              type="text"
              size="40"
              placeholder="콘텐츠, 인물, 컬렉션, 유저, 매거진 검색"
            ></Input>
          </Search>
          <Login>로그인</Login>
          <Signup>회원가입</Signup>
        </RightMenu>
      </Content>
    </div>
  );
};

export default Header;
