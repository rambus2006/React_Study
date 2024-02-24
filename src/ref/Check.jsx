import React ,{ useRef } from 'react';

const Check = () => {
    //ref
    //아이디,비밀번호를 입력했을 때 작성이 완료 되었는지 감지하고 
    //모두 완료되었다면 그 때 이동시키기 submit()

    const inputRef = useRef([])
    const formRef = useRef();

    const onClickToCheck = () =>{
        for(let input of inputRef.current){
            if(!input.value){
                console.log(input + "error")
                return 
            }
        }
        formRef.current.submit();
    }
    return (
        <div>
            <form ref={formRef}>
                <div><span>아이디</span><input ref={(element)=> inputRef.current[0] = element} type="text" /></div>
                <div><span>비밀번호</span><input ref={(element)=> inputRef.current[1] = element} type="text" /></div>
                <button type="button" onClick={onClickToCheck}>전송</button>
            </form>
        </div>
    );
};

export default Check;