import PostsItem from "./PostsItem/PostsItem";
import "./Posts.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts, showStartPosts, showNextPosts } from "../../redux/slices/postsSlice";
import ContentPreloader from "../../common/ContentPreloader/ContentPreloader";

const Posts = () => {

    const {showItems, statusApi, startCountPosts} = useSelector(state => state.postsSlice);
    const dispatch = useDispatch();
   
    useEffect(() => {
        const getPosts = async () => {
            try {
                await dispatch(fetchPosts());
                await dispatch(showStartPosts());
            } catch (error) {
                console.error(error);
            }
        }
        getPosts();
    }, []);
    
    const showPosts = showItems.map(post => <PostsItem key={post.id} title={post.title} text={post.body} />);

    console.log(statusApi);

    const makeSizeCards = () => {
        const cards = document.getElementById("cards");
        const btn = document.getElementById("cardsSizeBtn");

        if (cards.classList.contains("cards__small")) {
            cards.classList.remove("cards__small");
            cards.classList.add("cards__big");
            btn.innerText = "Make small cards";
            return cards;
        } else {
            cards.classList.remove("cards__big");
            cards.classList.add("cards__small");
            btn.innerText = "Make big cards";
            return cards;
        }
    }
    
    return (
        <div>
            <div className="articles_header">
                <h1>Article List</h1>
                <div>
                    <button id="cardsSizeBtn" onClick={makeSizeCards}>Make big cards</button>
                    <button>Add article</button>
                </div>
            </div>
            { showPosts.length < 1 && statusApi === "loading"
            ? <ContentPreloader />
            : <div>
                <div id="cards" className="cards__small">
                    {statusApi === "error" && <p className="error-info">Responce rejected</p>}
                    {showPosts}
                </div>
                <div className="showMore">
                    { startCountPosts === 0
                    ? <button onClick={() => dispatch(showNextPosts())}>Show more</button>
                    : ""
                    }
                </div>
            </div>
            }
        </div>
    );
}
export default Posts;