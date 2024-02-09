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
function App() {
  const name = "뤼액트";
  return <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>;
}

export default App;
