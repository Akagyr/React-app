import PostsItem from "./PostsItem/PostsItem";
import "./Posts.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts, showStartPosts, showNextPosts } from "../../redux/slices/postsSlice";
import ContentPreloader from "../../common/ContentPreloader/ContentPreloader";
import PostModalInfo from "./PostsModals/PostModalInfo";
import Modal from "../../common/Modal/Modal";

const Posts = () => {

    const {showItems, statusApi, startCountPosts, currentPost, isShowPostInfo} = useSelector(state => state.postsSlice);
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
    
    const showPosts = showItems.map(post => <PostsItem id={post.id} key={post.id} title={post.title} text={post.body} />);

    const postModalInfo = <PostModalInfo title={currentPost.title} text={currentPost.body} />

    const makeSizeCards = () => {
        const cards = document.getElementById("cards");
        const btn = document.getElementById("cardsSizeBtn");

        if (cards.classList.contains("cards--small")) {
            cards.classList.remove("cards--small");
            cards.classList.add("cards--big");
            btn.innerText = "Make small cards";
            return cards;
        } else {
            cards.classList.remove("cards--big");
            cards.classList.add("cards--small");
            btn.innerText = "Make big cards";
            return cards;
        }
    }
    
    return (
        <div className="posts">
            { isShowPostInfo && <Modal title="Info post" modalContent={postModalInfo} />}
            <div className="posts__header">
                <h1>Article List</h1>
                <div>
                    <button id="cardsSizeBtn" onClick={makeSizeCards}>Make big cards</button>
                    <button>Add article</button>
                </div>
            </div>
            { showPosts.length < 1 && statusApi === "loading"
            ? <ContentPreloader />
            : <div>
                {statusApi === "error" && <div className="error-info">Response has been rejected</div>}
                <div id="cards" className="cards--small">
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