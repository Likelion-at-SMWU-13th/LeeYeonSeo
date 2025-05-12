const date = new Date();
const todayYear = date.getFullYear();
const todayMonth = date.getMonth() + 1;
const todayDate = date.getDate();

const today = document.getElementById("date");
today.textContent = `오늘은!! ${todayYear}년 ${todayMonth}월 ${todayDate}일 🦁~ 어떤 가수의 노래가 끌리시나요?`;

const searchText = document.getElementById("searchText");

async function fetchMusicList() {
  try {
    const keyword = searchText.value.trim();
    const response = await fetch(`https://api.manana.kr/karaoke/singer/${keyword}.json`);
    const musicList = await response.json();
    const container = document.getElementById("musicContainer");
    container.innerHTML = "";

    musicList.forEach((music) => {
      const musicCard = document.createElement("div");
      musicCard.className = "musicCard";

      musicCard.innerHTML = `
      <h3>${music.title}</h3>
      <p id = "singer">${music.singer}</p>
      <div class = "card-body">
        <table>
          <tr>
            <th class="key">번호</th>
            <td class="value">${music.no}</td>
            <th class="key">작곡</th>
            <td class="value">${music.composer}</td>
          </tr>
          <tr>
            <th class="key">작사</th>
            <td class="value">${music.lyricist}</td>
            <th class="key">발매일</th>
            <td class="value">${music.release}</td>
          </tr>  
      </table>
      </div>
      `;
      container.appendChild(musicCard);
    });
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", function() {
  fetchMusicList();
  today.textContent = `🦁 ${searchText.value} 검색 결과 🦁`;
  searchText.value = "";
  setTimeout(()=> {
    today.textContent = `오늘은!! ${todayYear}년 ${todayMonth}월 ${todayDate}일 🦁~ 어떤 가수의 노래가 끌리시나요?`;
    const container = document.getElementById("musicContainer");
    container.innerHTML = "";
  }, 1000*60*10);
});

