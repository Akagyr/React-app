const PostModalInfo = ({title, text}) => {
    return (
        <div className="modal__content">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}
export default PostModalInfo;