import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserSession from '../utils/userSession';



const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        
        axios.post("http://localhost:5000/users/login", {email, password})
            .then(result => {
                if (result.data.code) {
                    var id = result.data.id;
                    UserSession.setId(id);
                    navigate('/home')
                }
                else {
                    console.log('Check Username or Password...')
                }
            })
            .catch(err => console.log("Error: " + err));
    }
    
    return (
        <div className="">
            <p>Please Log In Below.</p>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)}/><br />
                <input type="text" placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)}/><br />

                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default Login;

