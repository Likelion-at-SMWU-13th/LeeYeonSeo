import React from "react";
import ad1 from "../assets/WATCHA_AD1.svg";
import art1 from "../assets/Article1.svg";
import art2 from "../assets/Article2.svg";
import art3 from "../assets/ArticleAD.svg";
import menu1 from "../assets/Menu1.svg";
import menu2 from "../assets/Menu2.svg";
import menu3 from "../assets/Menu3.svg";
import menu4 from "../assets/Menu4.svg";
import menu5 from "../assets/Menu5.svg";
import rank1 from "../assets/rank1.svg";
import rankAD from "../assets/rankAD.svg";
import rank2 from "../assets/rank2.svg";
import rank3 from "../assets/rank3.svg";
import rank4 from "../assets/rank4.svg";
import star from "../assets/star.svg";
import chevron from "../assets/chevron_right.svg";
import dday1 from "../assets/dday1.svg";
import dday2 from "../assets/dday2.svg";
import dday3 from "../assets/dday3.svg";
import dday4 from "../assets/dday4.svg";
import dday5 from "../assets/dday5.svg";
import disney from "../assets/disney.svg";
import mag1 from "../assets/magazine1.svg";
import mag2 from "../assets/magazine2.svg";
import mag3 from "../assets/magazine3.svg";
import watcha from "../assets/WATCHA_icon_Circle.svg";
import comment1 from "../assets/comment1.svg";
import comment2 from "../assets/comment2.svg";
import comment3 from "../assets/comment3.svg";
import styled from "styled-components";

const Img1 = styled.img`
  padding-left: 4.06rem;
  padding-right: 4.06rem;
  width: 100%;
  box-sizing: border-box;
`;

const Article = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  padding-left: 4.06rem;
  padding-right: 4.06rem;
  box-sizing: border-box;
`;

const SquareCard = styled.img`
  width: calc((100% - 2rem) / 3);
  border-radius: 0.4rem;
`;

const Menu = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding-left: 4.06rem;
  padding-right: 4.06rem;
  box-sizing: border-box;
`;

const MenuBtn = styled.div`
  width: calc((100% - 2rem) / 5);
  border-radius: 0.4rem;
  background-color: #f6f6f6;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5e5e63;
  font-size: 14px;
`;

const MenuImg = styled.img`
  width: 25px;
  margin-right: 0.7rem;
`;

const ProgramList = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  padding-left: 4.06rem;
  padding-right: 4.06rem;
  box-sizing: border-box;
`;

const Rank = styled.div`
  p {
    margin-top: 0.2rem;
    margin-bottom: 0px;
    font-size: 15.5px;
    font-weight: 400;
  }
  span {
    color: #7e7e7e;
    font-size: 12px;
    font-weight: 400;
  }
  cursor: pointer;
`;

const H3 = styled.h3`
  padding-left: 4.06rem;
  margin-top: 3rem;
  font-size: 1.5rem;
  margin-bottom: 0.9rem;
`;

const RankImg = styled.img`
  width: 100%;
  border-radius: 0.3rem;
`;

const StarIcon = styled.img`
  width: 12px;
  vertical-align: middle;
  padding-bottom: 1px;
`;

const RankName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 4.06rem;
  padding-right: 4.06rem;
  margin-top: 2rem;
  H3 {
    padding-left: 0rem;
    margin-top: 0rem;
  }
  span {
    color: #7e7e7e;
    cursor: pointer;
  }
`;

const Dday = styled.div`
  p {
    margin-top: 0.2rem;
    margin-bottom: 0px;
    font-size: 15.5px;
    font-weight: 400;
  }
  span {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    padding-top: 10px;
  }
  cursor: pointer;
`;

const OttImg = styled.img`
  width: 15px;
  margin-right: 5px;
  vertical-align: middle;
`;

const Magazine = styled.div`
  width: calc((100% - 2rem) / 3);
  span {
    color: #7e7e7e;
    font-size: 12px;
    font-weight: 400;
  }
  h3 {
    font-size: 17px;
    margin-bottom: 0px;
  }
  p {
    color: #6a6a6a;
    font-size: 14px;
    font-weight: 400;
    margin-top: 3px;
  }
  cursor: pointer;
`;

const Main = () => {
  return (
    <div>
      <Img1 src={ad1}></Img1>
      <Article>
        <SquareCard src={art1}></SquareCard>
        <SquareCard src={art2}></SquareCard>
        <SquareCard src={art3}></SquareCard>
      </Article>
      <Menu>
        <MenuBtn>
          <MenuImg src={menu1}></MenuImg>
          <p>매거진</p>
        </MenuBtn>
        <MenuBtn>
          <MenuImg src={menu2}></MenuImg>
          <p>이벤트</p>
        </MenuBtn>
        <MenuBtn>
          <MenuImg src={menu3}></MenuImg>
          <p>캘린더</p>
        </MenuBtn>
        <MenuBtn>
          <MenuImg src={menu4}></MenuImg>
          <p>취향분석</p>
        </MenuBtn>
        <MenuBtn>
          <MenuImg src={menu5}></MenuImg>
          <p>추천</p>
        </MenuBtn>
      </Menu>
      <H3>왓챠피디아 HOT 랭킹</H3>
      <ProgramList>
        <Rank>
          <RankImg src={rank1}></RankImg>
          <p>데블스 플랜: 데스룸</p>
          <span>
            평균 <StarIcon src={star}></StarIcon> 2.3
          </span>
        </Rank>
        <Rank>
          <RankImg src={rankAD}></RankImg>
          <p style={{ fontWeight: "600", fontSize: "18px" }}>구독권 40% OFF</p>
        </Rank>
        <Rank>
          <RankImg src={rank2}></RankImg>
          <p>나인 퍼즐</p>
          <span>
            평균 <StarIcon src={star}></StarIcon> 3.1
          </span>
        </Rank>
        <Rank>
          <RankImg src={rank3}></RankImg>
          <p>미션 임파서블: 파이널 레코닝</p>
          <span>
            평균 <StarIcon src={star}></StarIcon> 3.7
          </span>
        </Rank>
        <Rank>
          <RankImg src={rank4}></RankImg>
          <p>언젠가는 슬기로울 전공의생활</p>
          <span>
            평균 <StarIcon src={star}></StarIcon> 3.0
          </span>
        </Rank>
      </ProgramList>
      <RankName>
        <H3>영화 공개 예정작</H3>
        <span>
          더보기
          <img src={chevron} style={{ marginLeft: "5px" }} />
        </span>
      </RankName>
      <ProgramList>
        <Dday>
          <RankImg src={dday1}></RankImg>
          <p>아마데우스</p>
          <span>
            극장 <span style={{ color: "#FF2F6E" }}>2025.05.28</span>
          </span>
        </Dday>
        <Dday>
          <RankImg src={dday2}></RankImg>
          <p>컴플리트 언노운</p>
          <OttImg src={disney}></OttImg>
          <span style={{ color: "#FF2F6E" }}>2025.05.28</span>
        </Dday>
        <Dday>
          <RankImg src={dday3}></RankImg>
          <p>페니키안 스킴</p>
          <span>
            극장 <span style={{ color: "#FF2F6E" }}>2025.05.28</span>
          </span>
        </Dday>
        <Dday>
          <RankImg src={dday4}></RankImg>
          <p>캡틴 아메리카: 브레이브 뉴 월드</p>
          <OttImg src={disney}></OttImg>
          <span style={{ color: "#FF2F6E" }}>2025.05.28</span>
        </Dday>
        <Dday>
          <RankImg src={dday5}></RankImg>
          <p>미야자키 하야오: 자연의 영혼</p>
          <span>
            극장 <span style={{ color: "#FF2F6E" }}>2025.05.28</span>
          </span>
        </Dday>
      </ProgramList>
      <RankName>
        <H3>매거진</H3>
        <span>
          더보기
          <img src={chevron} style={{ marginLeft: "5px" }} />
        </span>
      </RankName>
      <ProgramList>
        <Magazine>
          <RankImg src={mag1}></RankImg>
          <OttImg
            src={watcha}
            style={{ border: "1px solid #EEEEEE", borderRadius: "100%" }}
          ></OttImg>
          <span>아티클</span>
          <h3>매번 세계를 구한 '에단 헌트'의 미션 연대기</h3>
          <p>한눈에 보는 &lt;미션 임파서블&gt; 시리즈의 역대급 작전 리포트</p>
        </Magazine>
        <Magazine>
          <RankImg src={mag2}></RankImg>
          <OttImg
            src={watcha}
            style={{ border: "1px solid #EEEEEE", borderRadius: "100%" }}
          ></OttImg>
          <span>큐레이션</span>
          <h3>제78회 칸영화제 화제작들의 기립박수 기록은?</h3>
          <p>먼저 봐서 좋겠다... ⭐️</p>
        </Magazine>
        <Magazine>
          <RankImg src={mag3}></RankImg>
          <OttImg
            src={watcha}
            style={{ border: "1px solid #EEEEEE", borderRadius: "100%" }}
          ></OttImg>
          <span>아티클</span>
          <h3>왓챠파티@무비랜드: 팀 크리에이티브</h3>
          <p>
            낯설지만 의미 있는 선택, &lt;퀸 크랩&gt;과 &lt;후아유&gt;로 본
            왓챠의 감각 Part 2
          </p>
        </Magazine>
      </ProgramList>
      <RankName>
        <H3>지금 뜨는 코멘트</H3>
        <span>
          더보기
          <img src={chevron} style={{ marginLeft: "5px" }} />
        </span>
      </RankName>
      <ProgramList>
        <RankImg src={comment1}></RankImg>
        <RankImg src={comment2}></RankImg>
        <RankImg src={comment3}></RankImg>
      </ProgramList>
    </div>
  );
};

export default Main;
