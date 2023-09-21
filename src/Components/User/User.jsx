import { Link } from "react-router-dom";

const User = ({user}) => {

    const {id, name, email, phone} = user;

    const userStyle = {
        border: '2px solid sienna',
        borderRadius: '20px',
        padding: '10px',
        backgroundColor: 'antiquewhite',
        color: 'black'
        
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: <small>{email}</small></p>
            <p><small>Contact Number: {phone}</small></p>
            <Link to={`/user/${id}`}>Show Details</Link>
            {/* <Link to={`/user/${id}`}>
                <button>Click me</button>
            </Link> */}
        </div>
    );
};

export default User;