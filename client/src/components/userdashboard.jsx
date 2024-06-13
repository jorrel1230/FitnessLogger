import React, { useState, useEffect } from 'react';
import UserSession from '../utils/userSession';
import axios from 'axios';


const UserDashboard = () => {

    var id = UserSession.getId();

    const [isLoading, setLoading] = useState(true);
    const [result, setResult] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${id}`)
            .then(response => {
                setResult(response.data);
                setLoading(false);
            });
    }, [id]);
    

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>{id}</p>
            <p>{result.name}</p>
        </div>
    );
};

export default UserDashboard;

