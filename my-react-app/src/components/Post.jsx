import "./Post.css";

function Post(props) {
    return (
    <div className="post">
        <img src={props.src} width="300" height="300"></img>
    </div>

    )
}

export default Post