import React from 'react';

// props를 통해 여러가지를 받을 수 있다. 
const Component02 = (props) => { //받는 것은 매개 변수로 받기 때문에 prop로 받는 것 
    console.log(props)
    // const props = {
    //     age : 20 ,
    //     message : 환영합니다. 
    //     name : "이름 "
    // }
    //약간 props는 포장되어 있는 택배고, 안에 들어있는 키와 value 는 안에 있는 물품들과 같다.(객체 )
    //여기서는 Container에서 값을 쏴주면 props에서 포장을 해서 받는 것과 같다. 

    //.map 함수 : 배열이나 유사 배열의 형태로 반복문을 돌릴 수 있다. 뭔가에 접근해서 쓰는 것-> 앞에 접근해서 받을 수 있다. 
    //데이터 배열.map((data를 매개변수로 받아야 쓸 수 있다. 이때 앞에 붙은 배열값이 하나씩 들어온다.(i,j 도 가능))=>{반복할 내용(반복문)}) 로 받을 수 있다.이 때 매개 변수가 있어야 한다.(앞에 데이터가 매개변수)
    //
    return (
        <div>
            내가 만든 컴포넌트 
            {/* map 함수  */}
            {props.users.map((name)=>(
                <p>{name}</p>
            ))}
        </div>
    );
};

export default Component02;