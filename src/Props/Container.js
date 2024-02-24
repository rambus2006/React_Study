import React from "react";
import Component01 from "./Component01";
import Component02 from "./Component02";
import Component03 from "./Component03";

const Container = () => {
  const name = "이름";
  //스타일 color: red 로 넘겨주기
  const style = "red";
  return (
    <div>
      <Component01 name={name} />
      <Component02>
        <span>자식 요소를 받을 수 있다. </span>
      </Component02>
      <Component03 color={style} />
    </div>
  );
};

export default Container;
