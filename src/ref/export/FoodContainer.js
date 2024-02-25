import React, { useState } from "react";

const FoodContainer = () => {
  //1. input 2개를 만들어서
  //2. 첫번째 input는 한글이름, 두번째 input은 영어이름
  //3. 추가 버튼을 누르면 리스트 형태로 추가  + checkbox
  //4. check를 선택해서 삭제버튼을 누르면
  //5. 누른 리스트만 삭제

  /*
  1. input에서 입력한 값을 추가 컨테이너로 전달(상태 관리를 위해 useState를 사용) -> 화면에 보여주기
  2. 추가 컨테이너에서 리스트,checkbox 를 붙이기-> 화면에 보여주기 
  3. checkbox에서 체크되었을 때 삭제 컴포넌트로 값을 전달 
  4. 삭제 컴포넌트에서 삭제 
  */
  const style = {
    listStyle: "none",
  };
  const [foods, setFoods] = useState([]); //[foods,setFoods]안에 하나는 변수, 하나는 메서드
  //버튼을 클릭했을 때 input 의 있는 값들을 추가하기 위한 이벤트가 필요하다.
  const [checked, setchecked] = useState([]); //체크된 것을 여러개 받아야 하므로 배열로 설정해야 한다.
  const inputRef = useRef([]);

  const onClickToAddFood = (e) => {
    setFoods(
      // 새로운 배열을 리턴하기 때문에 concat을 사용하면 참조값이 바뀐다.
      // foods.concat({
      // })
      // foods.concat({
      //   kor:inputRef.current[0]값이 들어가 있는다. ,
      //   eng:inputRef.current[1]값이 들어가 있는다.
      // })
      foods.concat({
        kor: inputRef.current[0].value,
        eng: inputRef.current[1].value,
      })
    );
    setchecked(checked.concat(false));
  };

  const onChangeCheckBox = (i) => {
    //splice 배열을 자르는 것 (i,1,value) = 수정
    checked.splice(i, 1, !checked[i]);
    setchecked(checked.concat());
  };
  const onClickToRemoveFood = () => {
    console.log("클릭시 삭제");
    setFoods(foods.filter((food, i) => !checked[i])); //내가 체크하는 것
  };

  const foodList = foods.map(({ kor, eng }, i) => {
    return (
      <li key={i}>
        <input
          type="checkbox"
          checked={checked[i]}
          onChange={onChangeCheckBox}
        />
        {`${kor} (${eng})`}
      </li>
    );
  });
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="한글 이름"
          ref={(element) => {
            inputRef.current[0] = element;
          }}
        />
        <input
          type="text"
          placeholder="영어 이름"
          ref={(element) => {
            inputRef.current[1] = element;
          }}
        />
        <button onClick={onClickToAddFood}>추가</button>
        <button onClick={onClickToRemoveFood}>삭제</button>
      </div>
      <div>
        <ul></ul>
      </div>
    </>
  );
};

export default FoodContainer;
/*
import React, { useRef, useState } from "react";

const FoodContainer = () => {
    // input 2개를 만들어서
    // 첫번째 input는 한글이름, 두번째 input은 영어이름
    // 추가 버튼을 누르면 리스트형태로 추가 + checkbox
    // check를 선택해서 삭제버튼을 누르면
    // 누른 리스트만 삭제

    // 알고리즘, 문제풀이까지 다음시간 3시 20분
    const style = {
        listStyle: "none",
    };

    // const foods = [];
    const [foods, setFoods] = useState([]);
    const [checked, setChecked] = useState([]);
    const inputRef = useRef([]);

    // 버튼을 클릭했을 때 input의 있는 값들을 추가하기위한 이벤트가 필요하다
    const onClickToAddFood = () => {
        console.log(inputRef);
        setFoods(
            foods.concat({
                kor: inputRef.current[0].value,
                eng: inputRef.current[1].value,
            })
        );
        setChecked(checked.concat(false));
    };

    const onChangeCheckBox = (i) => {
        // splice 배열을 자르는것 (i, 1, value) = 수정
        checked.splice(i, 1, !checked[i]);
        setChecked(checked.concat());
    };

    const onClickToRemoveFood = () => {
        console.log("클릭 시 삭제");
        setFoods(foods.filter((food, i) => !checked[i]));
        setChecked(new Array(foods.length).fill(false));
    };

    const foodList = foods.map(({ kor, eng }, i) => {
        return (
            <li key={i} style={style}>
                <input
                    type="checkbox"
                    checked={checked[i]}
                    onChange={() => onChangeCheckBox(i)}
                />
                {`${kor} (${eng})`}
            </li>
        );
    });

    return (
        <>
            <div>
                <input
                    type="text"
                    ref={(element) => (inputRef.current[0] = element)}
                />
                <input
                    type="text"
                    ref={(element) => (inputRef.current[1] = element)}
                />
                <button onClick={onClickToAddFood}>추가</button>
                <button onClick={onClickToRemoveFood}>삭제</button>
            </div>
            <div>
                <ul>{foodList}</ul>
            </div>
        </>
    );
};

export default FoodContainer;*/
