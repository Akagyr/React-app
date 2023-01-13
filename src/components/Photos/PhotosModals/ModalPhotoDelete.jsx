import { useDispatch } from "react-redux";
import { deletePhoto, closeModalPhoto } from "../../../redux/slices/photosSlice";

const ModalPhotoDelete = ({id}) => {
    const dispatch = useDispatch();

    return (
        <div className="modal__content">
            <h3>Do you really want to delete this card?</h3>
            <div className="groupBtn">
                <button className="greenBtn" onClick={() => dispatch(deletePhoto(id))}>Yes</button>
                <button className="redBtn" onClick={() => dispatch(closeModalPhoto())}>No</button>
            </div>
        </div>
    );
}
export default ModalPhotoDelete;