import React, { useState } from 'react';

const Checkbox = () => {

    // check 클릭했을 때 클릭한 객체를 h1 태그 안에 보여주고 
    // 체크박스가 해제 됐을 때 해제된 객체를 없애기 

    const [message, setMessage] = useState([]);

    // 클릭할 때 이벤트를 발생시킨다.
    // input에 이벤트 함수 전달한다.
    // 클릭한 input-value 가져온다.
    // setMessage(input-value) 전달한다.

    // ES6 스프레드 문법은 객체를 위해서 만들어졌다.
    // 스프레드는 한 댑스 들어가도 객체면 사용이 가능한 문법이다. (1depth 복사)
    // 실제 배포를 하기위해서 모던자바스크립트 문법이 변경되어야 한다.
    // 그래서 리엑트에서는 스프레드 문법보다 배열의 메서드를 권장한다.

    const onClickToCheck = (e) => {
        // 체크 상태를 분류
        if(e.target.checked){
            let value = e.target.value;
            setMessage(message.concat(value))
            // setMessage([...message, value])

        }else{
            
            //체크가 해제 되었을 때
            // filter() 메서드 사용
            // []
            // ["front-end", "ai"]
            setMessage(message.filter((m) => m !== e.target.value))
            
        }
        console.log(e.target.value)
    }



    return (
        <div>
            <div>
                <span>font-end</span>
                <input type="checkbox" value="font-end" onClick={onClickToCheck}/>
            </div>

            <div>
                <span>ai</span>
                <input type="checkbox" value="ai" onClick={onClickToCheck}/>
            </div>

            <div>
                <span>back-end</span>
                <input type="checkbox" value="back-end" onClick={onClickToCheck}/>
            </div>

            <div>
                {/* ["font-end", "ai", "back-end"] */}
                <h1>{message.map((m, i) => <p key={i}>{m}</p>)}</h1>
            </div>

        </div>
    );
};

export default Checkbox;