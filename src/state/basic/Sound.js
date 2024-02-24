import React from "react";
import { useState } from "react";
const Sound = () => {
  //강아지 버튼을 눌렀을 때 "멍멍"출력
  //고양이 버튼 눌렀을 때 "야옹"출력
  //1. useState 불러오기
  //2. 버튼에 맞는 함수 만들기
  //3. 함수 안에서 setResult 해서 멍멍, 야옹 넣기
  //4. 버튼에 onClick 이벤트 주기

  //   const sound = "";
  const [sound, setResult] = useState("동물을 선택하세요");
  //   const [sound, setSound] = useState("동물을 선택하세요");
  //   const sound = useState("");
  const style = {
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
  };

  const dog = () => {
    setResult("멍멍");
  };
  /*
  const dogbutton = () =>{
    setSound("멍멍")
  }
  const catButton = () =>{
    setSound("아옹")
  }
  */
  const cat = () => {
    setResult("야옹");
  };
  return (
    <div>
      <div style={style}>
        <p>{sound}</p>
        <div>
          <button onClick={dog}>강아지 버튼</button>
        </div>
        <div>
          <button onClick={cat}>고양이버튼</button>
        </div>
      </div>
    </div>
  );
};

export default Sound;
