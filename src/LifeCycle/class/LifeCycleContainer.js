import React, { Component } from "react";
import LifeCycleComponent from "./LifeCycleComponent";

//랜덤 컬러로 만들기
const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16, 777, 215).toString(16);
};
// rcc 가 단축키, 함수형 컴포넌트는 rsc
class LifeCycleContainer extends Component {
  state = {
    color: "#000000",
  };
  onClickToChangeColor = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.onClickToChangeColor}>색상 변경 버튼 </button>
        <LifeCycleComponent style={this.state.color} />
      </div>
    );
  }
}

export default LifeCycleContainer;
