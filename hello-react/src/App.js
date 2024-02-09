import "./App.css";

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
function App() {
  const name = "리액트";
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "aqua",
        fontSize: "48px",
        fontWeight: "bold",
        padding: 16,
      }}
    >
      {name}
    </div>
  );
}
export default App;
