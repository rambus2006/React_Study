//react 2.4.3 if 문 대신 조건부 연산자
// function App() {
//   const name = "뤼액트";
//   return (
//     <div>
//       {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
//     </div>
//   );
// }

// ANd 연산자를 활용한 조건부 렌더링(null값 보여주기)
// 1. 방법1) null사용
// function App() {
//   const name = "뤼액트";
//   return <div>{name === "리액트" ? <h1>리액트입니다.</h1> : null}</div>;
// }
//2. 방법2) &&(AND) 사용
// function App() {
//   const name = "뤼액트";
//   return <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>;
// }

//2.4.5 undefind를 렌더링 하지 않기
//1. OR 연산자를 이용하여 오류 방지
// function App() {
//   const name = undefined;
//   return name || "값이 undefined 입니다.";
// }
//2. JSX 내부에서 undefined를 렌더링하는 것은 ㄱㅊ
// function App() {
//   const name = undefined;
//   return <div>{name}</div>;
// }
//3. name 값이 undefined 일 때 보여주고 싶은 문구가 있다면 다음과 같이 코드를 작성하면 된다.
// function App() {
//   const name = undefined;
//   return <div>{name || "리액트"}</div>;
// }

//2.4.6. DOM에 스타일 적용
//방법1) style 객체를 미리 선언하고 div 의 style 값으로 지정하는 방법
// function App() {
//   const name = "리액트";
//   const style = {
//     backgroundColor: "black",
//     color: "aqua",
//     fontSize: "48px",
//     fontWeight: "bold",
//     padding: 16,
//   };
//   return <div style={style}>{name}</div>;
// }
//방법2) 미리 선언하지 않고 바로 style 값을 지정하고 싶을 때
// function App() {
//   const name = "리액트";
//   return (
//     <div
//       style={{
//         backgroundColor: "black",
//         color: "aqua",
//         fontSize: "48px",
//         fontWeight: "bold",
//         padding: 16,
//       }}
//     >
//       {name}
//     </div>
//   );
// }

//2.4.7 class 대신 className
// function App() {
//   const name = "리액트";
//   return <div className="react">{name}</div>;
// }
// export default App;

//2.4.8.꼭 닫아야 하는 태그
//방법1) 일반적인 태그 닫기
// function App() {
//   const name = "리액트";
//   return (
//     <>
//       <div className="react">{name}</div>
//       <input></input>
//     </>
//   );
// }
//방법2) self-closing태그
// function App() {
//   const name = "리액트";
//   return (
//     <>
//       <div className="react">{name}</div>
//       <input />
//     </>
//   );
// }

//2.4.9 주석
// function App() {
//   const name = "리액트";
//   return (
//     <>
//       {/* 주석은 이렇게 작성합니다.  */}
//       <div
//         className="react" //시작 태그를 여러줄로 작성하게 된다면 야기에 주석을 작성할 수 있습니다.
//       >
//         {name}
//       </div>
//       {/* '//'이런 주석이나 여러줄 태그이면 페이지에 그대로 나타나게 된다   */}
//       '//'이런 주석이나 /* */ 태그이면 페이지에 그대로 나타나게 된다
//       <input />
//     </>
//     //esLint 는 상단 메뉴에서 보기> 문제를 클릭해 열 수 있다. 빨간 줄은 꼭 고쳐야 함
//     //prettier는 f1 ->format이라고 입력한 후 enter를 누르기
//   );
// }

//3.1 클래스형 컴포넌트 선언
// import { Component } from "react";
// class App extends Component {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

// import ValidationSample from "./ValidationSample";
// import ScrollBox from "./ScrollBox";

import { Component } from "react";
// import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  // return <MyComponent name='react'/>; 컴포넌트를 사용할 때 props값 지정하기
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
