import classes from './Modal.module.css';
function Modal({children,onClose}){
    return (
    <>
        {/* 배경 코드  */}
        <div className={classes.backdrop} onClick={onClose}/> 
        <dialog open={true} className={classes.modal}>{children}</dialog>
    </>
    );
}
export default Modal;

//children은 예약어 속성이다. 