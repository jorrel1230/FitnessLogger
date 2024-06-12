import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name);
        console.log(email);
        console.log(password);

        axios.post("http://localhost:5000/register", {name, email, password})
            .then(result => {
                console.log(result);
                navigate("/login")
            })
            .catch(err => console.log("Error: " + err));
    };


    return(
        <div className="">
            <p>Please Sign Up Below.</p>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='Name' name='name' onChange={(e) => setName(e.target.value)}/><br />
                <input type="text" placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)}/><br />
                <input type="text" placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)}/><br />

                <button type="submit">Submit</button>
            </form>

            <p>Already Have an Account?</p>
            <Link to='/login'>Login</Link>
        </div>
        
    );
};

export default Signup;