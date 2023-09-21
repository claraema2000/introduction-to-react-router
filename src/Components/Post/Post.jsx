import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {

    const {id, title} =post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid cyan',
        borderRadius: '20px',
        padding: '10px',
        backgroundColor: 'lightcyan',
        color: 'black' 
    }

    const handleToShowDetail = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h4>Id Number: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link> <br />
            <button onClick={handleToShowDetail}>Click To See Details</button>
        </div>
    );
};

export default Post;