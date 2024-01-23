import { useState } from 'react'; //이벤트 핸들러 함수 
import classes from './NewPost.module.css';

function NewPost({onCancel}) {
  // const [enteredBody,setEnteredBody] = useState(''); //배열을 반환한다. 
  // document.querySelector('textarea').addEventListener('change',function(){}) //명령적 접근법(브라우저에게 명령을 하는 법)
  // 리액트는 선언형 명령을 쓴다. 
  // function changeBodyHandler(event){
  //   // console.log(event.target.value); //이건 바닐라 스크립트 
  //   setEnteredBody(event.target.value);
  // }

  const [enteredBody,setEnteredBody] = useState(' '); 
  const [enteredAuthor,setEnteredAuthor] = useState(' '); 

  function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
  }
  function submitHandler(event){
    event.preventDefault();
    const postData={
      body:enteredBody,
      author:enteredAuthor
    };
    onAddPost(postData);
    onCancel();
  }
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
     
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;