import React from 'react';
import UserSession from '../utils/userSession';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const id = UserSession.getId();
    const navigate = useNavigate();

    if (id === '') {
        return <p>Not Logged In.</p>
    }

    return(
        <div>
            <p>Home Component!</p>
            <button type="button" onClick={() => {
                UserSession.setId('');
                navigate("/login");
            }}>Log Out.</button>
        </div>
    );
};

export default Home;