import React, { useState,useRef } from 'react';
// import {NavLink} from "react-router-dom";

//빨간 버튼을 누르면 글자가 빨갛게 
//파란색 버튼을 누르면 글자를 파랗게 
//핑크색을 입력하고 버튼을 누르면 글자의 색을 없앤다. 
const Color = () => {

    const [result,setResult] = useState("")
    const [color,setColor] = useState("")

    //value값 
    const onResult = (e) =>{
        console.log(e.target.value)
        if(e.target.value === "핑크색"){
            setColor("")
        }
    
        setResult(e.target.value)
    }
    //버튼을 눌렀을 때 색이 바뀌는 것 
    const colorRed = () =>{
        return setColor("red") //{color:"pink"} 이런 형식으로 된다. 
    }
    const colorBlue = () =>{
        return setColor("blue")
    }
    const inputRef = useRef()
    const textReset = () =>{
        console.log(inputRef)
        inputRef.current.value = "";
    }
    // const style = {
    //     color:"red"
    // };
    // const input = (e) =>{
    //     let find =e.target.result;
    //     // eslint-disable-next-line no-lone-blocks
    //     // {(find === "핑크색")? style(find): undefined}
    // }
    return (
        <div>
            <p style={{color}}>{result}</p>
            {/* ref={(element) => {inputRef[0] = }element } */}
            <input type='text' onChange={onResult} ref={inputRef} placeholder='색깔을 입력하세요'/>
            <button onClick={colorRed}>빨강</button>
            <button onClick={colorBlue}>파랑</button>
            <button onClick={textReset}>값 초기화</button>
        </div>
    );
};

export default Color;