import React from 'react';

//이름과 메시질를 넣어서 출력해보기 
const Jsx03 = () => {
    const name = "민서"
    const message = "집에가고 싶다. "
    return (
        <div>
            <p>이름: {name} <br/></p>
            <p style={{color:'blue'}}>메시지 : {message}</p>
        </div>
    );
};

export default Jsx03;