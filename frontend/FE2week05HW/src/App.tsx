import { useEffect } from "react";
import "./App.css";
import HiddenLove from "./assets/HiddenLove.jpg";

interface dramaInformation {
  title: string;
  nation: "한국" | "중국" | "일본";
  episode: number;
  romance: boolean;
}

interface dramaInformation {
  actor: string;
  actress: string;
  summary: string;
  ott: string;
}

interface favoriteDrama extends dramaInformation {
  rating: number;
  rewatchCount: number;
}

function App() {
  const myFavoriteDrama: favoriteDrama = {
    title: "투투장부주",
    nation: "중국",
    episode: 25,
    romance: true,
    actor: "진철원",
    actress: "조로사",
    summary:
      "중학생 쌍즈는 오빠 쌍옌의 친구 돤자쉬를 보고 한눈에 반한다. 그 후 오랫동안 돤자쉬를 마음속으로 좋아하던 쌍즈는 돤자쉬에게 여자 친구가 생긴 걸 알고 짝사랑을 포기하게 된다.. 시간이 흘러 대학에 가게 된 쌍즈는 우연히 돤자쉬와 다시 마주치는데...",
    rating: 5,
    rewatchCount: 3,
    ott: "Tving, Netflix, Watcha, Wavve",
  };

  useEffect(() => {
    console.log(
      "최근 제가 제일 좋아는 드라마는 " +
        myFavoriteDrama.nation +
        "드라마인 " +
        myFavoriteDrama.title +
        "입니다."
    );
    console.log(
      "이 작품의 주연은 " +
        myFavoriteDrama.actor +
        "과 " +
        myFavoriteDrama.actress +
        "입니다."
    );
    if (myFavoriteDrama.romance) {
      console.log("이 작품의 장르는 로맨스 입니다 ♥︎ !!");
    } else {
      console.log("이 작품에는 로맨스 장면이 들어가지 않습니다..");
    }
    console.log("줄거리: " + myFavoriteDrama.summary);
    console.log(
      "저의 평점은... " + myFavoriteDrama.rating + "점 입니다!!!! 🤭"
    );
    console.log(
      "저는 벌써 이 드라마를 " +
        myFavoriteDrama.rewatchCount +
        "번이나 봤을 정도로.. 너무너무 좋아하는 드라마입니다.. ♥︎"
    );
    console.log(
      "이 작품은 " + myFavoriteDrama.ott + "에서 감상하실 수 있답니다!~"
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <h1>멋사 2학기 5주차 과제 - 좋아하는 것 소개하기!</h1>
      <p>
        제가 <strong>좋아하는 드라마</strong>가 궁금하시다면.. 콘솔창을
        확인해주세요! ♥︎
      </p>
      <img style={{ borderRadius: "20px", width: "400px" }} src={HiddenLove} />
    </div>
  );
}

export default App;
