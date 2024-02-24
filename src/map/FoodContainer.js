import React from "react";
import Foods from "./Foods";
// import Style from "./Style";
const FoodContainer = () => {
  // FoodContainer
  // Foods
  // Food
  // 컴포넌트 분리 실습
  // 30분까지
  const style = {
    listStyle: "none",
  };
  const foods = [
    {
      id: 1,
      name: "피자",
    },

    {
      id: 2,
      name: "치킨",
    },

    {
      id: 3,
      name: "스테이크",
    },

    {
      id: 4,
      name: "베이글",
    },
  ];

  // const foodList = foods.map((object) => <li key={object.id}>{object.name}</li>)

  return (
    // <div>
    //     <ul>
    //         {foodList}
    //     </ul>
    // </div>
    <Foods style={style} foods={foods} />
  );
};

export default FoodContainer;
