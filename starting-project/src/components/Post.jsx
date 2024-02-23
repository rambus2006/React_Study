import { Link } from 'react-router-dom';
import classes from './Post.module.css';
// 1. jsx 값을 웹 브라우저에 랜덤으로 표시하는 코드 
// const names = ['Maximilian','Manuel'];

function Post({id,author,body}){
    //리액트가 실행하는 js 함수
    //1.  const chosenName = Math.random()>0.5 ? names[0] : names[1];
    //2. props 객체의 변수를 가져오는 것 
    
    return (
    <li className={classes.post}>
        <Link to={id}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </Link>
    </li>
    );
};

export default Post;