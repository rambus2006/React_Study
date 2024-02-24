import React from 'react';

const Jsx04 = () => {
    const name = undefined || "ㅎㅎㅎ";
    const login = true;
    const guest = true;

    
    return (
        <div>
            {login && guest && (
                <div>
                    <h1>비회원으로 로그인되었습니다.</h1>
                </div>
            )}        
            {/* {조건식 ? true : false} */}
            {/* {조건식 ? (<div>true</div>) : (<div>false</div>)} */}
            {login ?(
                <div>
                    <h1>{name}님 환영합니다. </h1>
                </div>
            ):(
                <div>
                    <h1>로그인 실패</h1>
                </div>
            )
            }
        </div>
    );
};

export default Jsx04;