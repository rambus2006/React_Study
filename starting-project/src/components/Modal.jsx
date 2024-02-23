import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({children}){
    const navigate = useNavigate();

    function closeHandler(){
        navigate('..');
    }
    return (
    <>
        {/* 배경 코드  */}
        <div className={classes.backdrop} onClick={closeHandler}/> 
        <dialog open={true} className={classes.modal}>{children}</dialog>
    </>
    );
}
export default Modal;

//children은 예약어 속성이다. 