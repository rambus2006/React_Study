import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostsList';

function Posts() {
  return (
    <>
    <Outlet/>
      <main>
        <PostsList />
      </main>
    </>
    
  ) ;
}

export default Posts;

// 함수를 내보내는 코드 
export async function loader(){
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}