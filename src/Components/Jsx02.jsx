import React from 'react';

//연산, 
//JSX(javascript XML)
//브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트의 형태의 코드로 변환한다. 
//HTML 코드를 작성하는 것과 비슷하기 때문에 보기에 쉽고 익숙하다. 
//일반 HTML 태그를 사용할 수 있을 뿐만 아니라, 컴포넌트도 JSX 안에 작성할 수 있다. 

const Jsx02 = () => {
    const name = "집가고싶다"

    
    return (
        <div>
            제 이름은 {name} 입니다. 
        </div>
    );
};

export default Jsx02;