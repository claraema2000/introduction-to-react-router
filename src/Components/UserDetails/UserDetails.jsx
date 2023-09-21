import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    const {name, email, username, website} = user;
    return (
        <div>
            <h2>Details about each user</h2>
            <h4>Name: {name}</h4>
            <h5>Name: <small>{username}</small></h5>
            <h6>Email: <small>{email}</small></h6>
            <h6>Website: <small>{website}</small></h6>
        </div>
    );
};

export default UserDetails;