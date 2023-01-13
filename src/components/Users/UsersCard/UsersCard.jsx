import "../../../common/styles/card.css";
import { useDispatch } from "react-redux";
import {openModalUserInfo, openModalUserEdit, openModalUserDelete} from "../../../redux/slices/usersSlice";

const UsersCard = ({id, name, email, phone}) => {

    const dispatch = useDispatch();

    const changeColor = (e) => {
        if (e.target.parentNode.classList.contains("card--gray")) {
            e.target.parentNode.classList.replace("card--gray", "card--yellow");
        } else if (e.target.parentNode.classList.contains("card--yellow")) {
            e.target.parentNode.classList.replace("card--yellow", "card--orange");
        } else {
            e.target.parentNode.classList.replace("card--orange", "card--gray");
        }
        return;
    }

    return (
        <div id="card" className="card card--gray">
            <div className="card__info">
                <h2 className="card__title">{name}</h2>
                <p className="card__desc">{email}</p>
                <p className="card__desc">{phone}</p>
            </div>
            <button onClick={() => dispatch(openModalUserInfo(id))}>View</button>
            <button onClick={() => dispatch(openModalUserEdit(id))}>Edit</button>
            <button onClick={() => dispatch(openModalUserDelete(id))}>Delete</button>
            <button onClick={(e) => changeColor(e)}>Change Color</button>
        </div>
    );
}
export default UsersCard;