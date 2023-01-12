import "./Modal.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { closeModal } from "../../redux/slices/postsSlice"

const Modal = ({title, modalContent}) => {

    const dispatch = useDispatch();

    return !modalContent ? "" : (
        <div className="modal">
            <div className="modal__body">
                <div className="modal__header"> 
                    <h2>{title}</h2>
                    <button className="header__btn" onClick={() => dispatch(closeModal())}>x</button>
                </div>
                {modalContent}
            </div>
        </div>
    );
}
// const Modal = () => {

//     const dispatch = useDispatch();

//     return (
//         <div className="modal">
//             <div className="modal__body">
//                 <div className="modal__header"> 
//                     <h2>Title</h2>
//                     <button className="header__btn" onClick={() => dispatch(closeModal())}>x</button>
//                 </div>
//                 <ModalPostAdd />
//             </div>
//         </div>
//     );
// }
export default Modal;