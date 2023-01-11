import "./PostsItem.css";
import { useDispatch } from "react-redux/es/exports";
import {openModalPostInfo} from "../../../redux/slices/postsSlice";

const PostsItem = ({title, text, id}) => {

    const dispatch = useDispatch();

    const changeColor = (e) => {
        if (e.target.parentNode.classList.contains("card__gray")) {
            e.target.parentNode.classList.replace("card__gray", "card__yellow");
        } else if (e.target.parentNode.classList.contains("card__yellow")) {
            e.target.parentNode.classList.replace("card__yellow", "card__orange");
        } else {
            e.target.parentNode.classList.replace("card__orange", "card__gray");
        }
        return;
    }

    return (
        <div id="card" className="card card__gray">
            <h2 id="cardTitle">{title}</h2>
            <p id="cardText">{text}</p>
            <button onClick={() => dispatch(openModalPostInfo(id))}>View</button>
            <button onClick={(e) => changeColor(e)}>Change Color</button>
        </div>
    );
}
export default PostsItem;