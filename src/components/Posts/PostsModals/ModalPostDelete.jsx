import { useDispatch } from "react-redux";
import { deletePost, closeModal } from "../../../redux/slices/postsSlice";

const ModalPostDelete = ({id}) => {
    const dispatch = useDispatch();

    return (
        <div className="modal__content">
            <h3>Do you really want to delete this card?</h3>
            <div className="groupBtn">
                <button className="greenBtn" onClick={() => dispatch(deletePost(id))}>Yes</button>
                <button className="redBtn" onClick={() => dispatch(closeModal())}>No</button>
            </div>
        </div>
    );
}
export default ModalPostDelete;