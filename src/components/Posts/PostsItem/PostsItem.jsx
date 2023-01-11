import "./PostsItem.css";

const PostsItem = (props) => {
    
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
            <h2 id="cardTitle">{props.title}</h2>
            <p id="cardText">{props.text}</p>
            <button>View</button>
            <button onClick={(e) => changeColor(e)}>Change Color</button>
        </div>
    );
}
export default PostsItem;