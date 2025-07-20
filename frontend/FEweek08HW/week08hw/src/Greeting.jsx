import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    // localStorage에 저장한 AccessToken을 getItem 메서드를 활용하여 가져옴
    const accessToken = localStorage.getItem("accessToken");
    // 가져온 Acess Token으로 카카오 서버에 정보를 요청
    // 이를 통해 관리자가 동의 항목으로 설정한 정보들을 가져올 수 있음
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      const userData = res.json();
      userData.then((user) => {
        setName(user.properties.nickname); // 받아온 닉네임 값을 name의 값으로 설정
        setProfileImg(user.properties.profile_image); // 받아온 이미지를 profileImg 값으로 설정
      });
    });
  }, []);

  return (
    // 응답 값을 UI에 반영
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;
