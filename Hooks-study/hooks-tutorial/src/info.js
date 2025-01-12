// import { useState, useEffect } from "react";
// import { useReducer } from "react";

import UseInputs from "./UseInputs";
// const Info = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");

//   useEffect(() => {
// console.log("렌더링이 완료되었습니다.");
// console.log({
//   name,
//   nickname,
// });
// console.log("마운트될 때만 실행됩니다.");
// console.log(name);
// console.log("effect");
// console.log(name);
// return () => {
//   console.log("cleanup");
//   console.log(name);
// };
//   return () => {
//     console.log("unmount");
//   };
// }, []);

// const onChangeName = (e) => {
//   setName(e.target.value);
// };
// const onChangeNickname = (e) => {
//   setNickname(e.target.value);
// };
// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }
const Info = () => {
  const [state, onChange] = UseInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;
  // const onChange = (e) => {
  //   dispatch(e.target);
  // };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 : </b>
          {name}
        </div>
        <div>
          <b>닉네임 : </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
