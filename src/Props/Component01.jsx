import React from 'react';


//props는 객체이다. (Object 타입)
//사용하는 컴포넌트에서 객체로 key로 접근한다. 
const Component01 = (props) => {

    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    );
};

export default Component01;