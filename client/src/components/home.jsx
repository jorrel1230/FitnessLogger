import React from 'react';
import UserSession from '../utils/userSession';
import { useNavigate } from 'react-router-dom';

import UserDashboard from './userdashboard';

const Home = () => {
    const id = UserSession.getId();
    const navigate = useNavigate();

    if (id === '') {
        return <p>Not Logged In.</p>
    }

    return(
        <div>
            <button 
                className='float-right' 
                type="button" 
                onClick={() => {
                    UserSession.setId('');
                    navigate("/login");
                }}>
                    Log Out.
            </button>

            <p>Home Component!</p>

            <UserDashboard/>
        </div>
    );
};

export default Home;