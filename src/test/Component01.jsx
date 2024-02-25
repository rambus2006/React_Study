import React,{useRef, useState } from 'react';

//컴포넌트 자체는 자바스크립트 문법, 리액트는 태그인지, 연산해야하는 변수인지 헷갈려서 {변수명}을 사용하게 되었다. 
//리액트는 자바스크립트 문법과 비슷해서 동적이다 .
const Component01 = () => {
     //동적으로 바꾸기 위해 사용하는 props, 리액트 문법을 사용해야 하니 미리 선언해서 사용해야 한다. 
    // const name = "이름";  //이렇게 쓰면 자바스크립트를 출력하는 것밖에 안됨, 출력하는 것 자체는 동적이 아니다.  
    const [name,setName] = useState("초기값"); //상태 관리자의 역할, name은 관리를 당해야 한다. 이건 동적이다. 윗줄과 결과물은 똑같다.
                                              //'초깃값' 문구가 name으로 들어가 있게 된다. 
                                              //<setName>
                                              //setName은 선언을 하지 않았기 때문에 리액트에서 가져온 메서드를 사용한다.
                                              //단순하게 생각해서 값을 바꾸기 위해서 사용하는 메서드이다.getter,setter 생각하면 편함
    const [color,setColor] = useState("빨간색");
    const h1Ref = useRef(); //참조하는 것.리액트에서 dom 에서 가져오는 것을 레퍼런스(Ref)라고 한다. documen.querySelector와 같다. 
                            //위 코드는 선언하는 것(어디를 참조할지는 아직 안함)
    const onClickToChangeName = () =>{
        setName("이름")// 변수의 값을 바꾸기 위해 리액트에서 만들어둔 메서드 
          //가상돔이 먼저 바뀌고, 화면이 먼저 바뀐다. 
    }                                   
    const onClickToChangeColor = () =>{
        setColor("파란색")
    }
    console.log(h1Ref.current); //key : value
    //이런 형태
    // const object = {
    //     current:"h1",
    // }
    // console.log(
    //     object.current //객체니까 이런식으로 한다. 
    // )
    return (
        <div>
            {/* 여기서 ref를 참조함(여기가 링크 ) */}
            <h1 ref={h1Ref}>내가 만든 컴포넌트{name}</h1> 
            <p>{color}</p>
            <button onClick={onClickToChangeName}>이름 변경</button>
            <button onClick={onClickToChangeColor}></button>
        </div>
    );
};

export default Component01;