
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting,onStopPosting}){
    const [posts,setPosts] = useState([]);
    function addPostHandler(postData){
        setPosts((existingPosts) => [postData,...existingPosts]);
    }
    {/* 조건에 맞게 화면을 클릭하면 꺼지는 코드 방법1  */}
    // let modalContent;
    // if(modalIsVisiable){
    //     modalContent = ( <Modal onClose={hideModalHandler}> 
    //     <NewPost 
    //         onBodyChange={bodyChangeHandler} 
    //         onAuthorChange={authorChangeHandler}
    //     />
    //     </Modal>
    //     );
    // }
    return(
        <>
            {/* 조건에 맞게 화면을 클릭하면 꺼지는 코드 방법2  */}
            { isPosting && (
                <Modal onClose={onStopPosting}> 
                <NewPost 
                    onCancel={onStopPosting} 
                    onAddPost={addPostHandler}
                />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author="Manuel" body="Check out the full course"/>
            </ul>
        </>
    );
}
export default PostsList;