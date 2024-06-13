import React from 'react';
import UserSession from '../utils/userSession';

const UserDashboard = () => {

    var id = UserSession.getId();

    return (
        <div className="">
            <p>{id}</p>
        </div>
    );
};

export default UserDashboard;

