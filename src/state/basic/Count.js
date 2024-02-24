import React, { useState } from "react";
//상태를 바꾸기 위해 사용하는 것이 useState
const Count = () => {
  //상태를 바꿀 때는 setter 메서드만 상태를 변경할 수 있다.
  //변수    //메서드           //초기값 이 들어간다.
  const [result, setResult] = useState(0);

  const increase = () => {
    // result+= 1;
    setResult(result + 1); //0이 있는 부분만 리렌더링 되었다.
    // console.log(result);
  };

  const decrease = () => {
    setResult(result - 1);
  };
  const style = {
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <p>{result}</p>

      <div>
        <button onClick={increase}>증가</button>
      </div>
      <div>
        <button onClick={decrease}>감소</button>
      </div>
    </div>
  );
};

export default Count;
