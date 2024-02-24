import React, { useState,useRef } from 'react';

const Name = () => {
    //사용자가 입력한 이름을 p 태그에 실시간으로 작성하도록 구현하고 버튼을 클릭하면 이름 뒤에 "님"이 붙도록 구현한다. //setResult
    //입력 후 엔터 작성 시 p 태그에 반영한다. 
    const [result,setResult] = useState("");
    const pRef=useRef(); //p에 접근할 수 있다. 
    const inputRef = useRef();

    //변화가 생길 때 result 값을 변경해주는 함수가 필요하다 
    const onChangSetName = (e) =>{
        // console.log(e.target.value)
        setResult(e.target.value)
    }

    //완료 버튼 눌렀을 때 ref 를 이용해서 "님을 붙여주고 싶다"
    const onClickToPutName = ()=>{
        console.log(pRef)
        setResult(pRef.current.innerText + "님")

        console.log(inputRef)
        setResult(inputRef.current.value + "님")
        
    }
    return (
        <div>
            <input type='text' onChange={onChangSetName} ref={inputRef} placeholder='내용입력' val={result}/>
            <p ref={pRef}>{result}</p>
            <button onClick={onClickToPutName}>완료버튼</button>
        </div>
    );
};

export default Name;