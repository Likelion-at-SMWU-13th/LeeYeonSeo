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

  function printConsole(drama: favoriteDrama): void {
    console.log(
      "최근 제가 제일 좋아는 드라마는 " +
        drama.nation +
        "드라마인 " +
        drama.title +
        "입니다!"
    );
    console.log(
      "이 작품의 주연은 " + drama.actor + "과 " + drama.actress + "입니다."
    );
    if (drama.romance) {
      console.log("이 작품의 장르는 로맨스 입니다 ♥︎ !!");
    } else {
      console.log("이 작품에는 로맨스 장면이 들어가지 않습니다..");
    }
    console.log("줄거리: " + drama.summary);
    console.log("저의 평점은... " + drama.rating + "점 입니다!!!! 🤭");
    console.log(
      "저는 벌써 이 드라마를 " +
        drama.rewatchCount +
        "번이나 봤을 정도로.. 너무너무 좋아하는 드라마입니다.. ♥︎"
    );
    console.log("이 작품은 " + drama.ott + "에서 감상하실 수 있답니다!~");
  }

  useEffect(() => {
    printConsole(myFavoriteDrama);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        color: "#182230",
      }}
    >
      <h1 style={{ color: "rgb(255, 163, 58)" }}>
        🦁 멋사 2학기 5주차 과제 🦁
      </h1>
      <h2 style={{ marginTop: "0px" }}>
        나의 <span style={{ color: "#74a1e0" }}>최애 드라마</span> 소개하기!!
      </h2>
      <p>
        제가{" "}
        <strong style={{ color: "rgb(116, 161, 224)" }}>좋아하는 드라마</strong>
        가 궁금하시다면.. 콘솔창을 확인해주세요!{" "}
        <span style={{ color: "#74a1e0" }}>♥︎</span>
      </p>
      <img
        style={{
          borderRadius: "20px",
          width: "370px",
          boxShadow: "0 0 30px 10px rgba(116, 161, 224, 0.2)",
          marginTop: "20px",
        }}
        src={HiddenLove}
      />
    </div>
  );
}

export default App;
