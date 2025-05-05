const heartBtn = document.getElementById("heart");
const heartCount = document.getElementById("count");
let count = Number(heartCount.textContent);

heartBtn.addEventListener("click", function(){
  heartBtn.classList.toggle('active');
  if (heartBtn.classList.contains('active')) {
    heartBtn.src = "img/heart2.svg";
    count++;
  } else {
    heartBtn.src = "img/heart1.svg";
    count--;
  }
  heartCount.textContent = count;
})

const content = document.getElementById("content");
let Content = content.textContent;

if (Content.length > 30) {
  const moreBtn = document.createElement("button");
  moreBtn.textContent = "...더보기";
  moreBtn.style.border = "none";
  moreBtn.style.backgroundColor = "#fff";
  moreBtn.style.color = "grey";
  moreBtn.style.fontSize = "10px";
  moreBtn.style.padding = "0px";
  content.textContent = Content.slice(0, 30);
  content.appendChild(moreBtn);

  const shortBtn = document.createElement("button");
  shortBtn.textContent = "접기";
  shortBtn.style.border = "none";
  shortBtn.style.backgroundColor = "#fff";
  shortBtn.style.color = "grey";
  shortBtn.style.fontSize = "10px";
  shortBtn.style.padding = "3px";

  moreBtn.addEventListener("click", function(){
    content.textContent = Content;
    content.appendChild(shortBtn);
  });

  shortBtn.addEventListener("click", function(){
    content.textContent = Content.slice(0,30);
    content.appendChild(moreBtn);
  })
}