import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();
    const {id, title, body} =post;
     const navigate = useNavigate();

    const handleGoBack = () => {
        // navigate(`/posts`);
        navigate(-1);
    }
    return (
        <div>
            <h3>Post Details About: {id}</h3>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;