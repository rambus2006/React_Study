import React from "react";
import Component02 from "./Component02";

const Container = () => {
  //   const name = "이름";
  //   const age = 20;
  //   const message = "환영합니다."
  const date = "2월 25일";

  //이미 객체인 경우
  const users = ["이름1", "이름2", "이름3", "이름4"];
  return (
    <div>
      방금 만든 컨테이너
      {/* 원하는 값들을 보낼 수 있다.date1은 key, {} 는 value 값을 Component02에게 보내주는 것이다 */}
      <Component02 users={users} />
    </div>
  );
};

export default Container;
