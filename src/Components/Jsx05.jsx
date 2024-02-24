import React from 'react';
import PassComponent from './PassComponent';
import NotpassComponent from './NotpassComponent';
import LuckyComponent from './LuckyComponent';
import UnluckyComponent from './UnluckyComponent';
//age 상수에 나이 설정 
//19세 이하 
//성인이라면 "입장가능"
//성인이 아니라면 "입장불가"
//age 가 짝수라면 "당첨"
const Jsx05 = () => {
    const age = 20
    const isAdult = age >= 19;
    const isEven = age %2 ===0;
    const pass = "입장가능"
    const message = "환영합니다. 리액트 프롭스";

    //실습 컴포넌트 컨테이너 분리 
    const [notpass,lucky,unlucky] = ['입장불가','당첨','꽝'];
    const passComponent = <PassComponent pass = {pass} message={message}/>
    const notpassComponent = <NotpassComponent/>
    const luckyComponent = <LuckyComponent/>
    const unluckyComponent = <UnluckyComponent/>

    //조건식 
    const enter = isAdult ? passComponent : notpassComponent;
    const win = isEven ?luckyComponent : unluckyComponent;
    return (
        <div>
            <p>당신의 나이는 {age}살 입니다. </p>
            {enter}
            {win}
        </div>
    );
};

export default Jsx05;