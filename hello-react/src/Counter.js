import { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  // constructor(props){
  //     super(props);
  //     //state 의 초깃값 설정하기
  //     this.state = {
  //         number:0,
  //         fixedNumber:0
  //     };
  // }
  render() {
    const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          //onclick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;