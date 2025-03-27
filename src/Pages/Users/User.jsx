import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";


const User = ()=> {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setUser(data);
            })
           
    }, [id]);

    if (!user) return <div>Loading...</div>;
    if (!user.id) return <Navigate to="/error" replace />;


    return(
        <div className="Main user-page">
            <div>
            <Link to="/users">Back</Link>
            </div>
            <h2>{user.name}</h2>
            <h3>Email: {user.email}</h3>
            <h3>Phone: {user.phone}</h3>
            <h3>Website: {user.website}</h3>

        </div>
    );
}

export default User;