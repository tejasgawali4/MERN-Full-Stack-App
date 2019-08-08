import React, { Fragment , useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login = () => {

    const [formData, setFormData] = useState({
        name : '',
        email: ''
    });

    const { email , password } = formData; 

    const onChange = e => setFormData({ ...formData , [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        const newUser = {
            email,
            password
        }
        
        try {
            const config = {
                headers : {
                    'Content-Type':'application/json'
                        }
            }

            const body = JSON.stringify(newUser);

            //console.log(body);

            const res = await axios.post('/api/auth', newUser , config);                

            console.log(res.data);
            //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7I…zQyfQ.AGJpQOO0Z_eB4LpOU28qwmrReLMHQgXKgaaz4XfJ4T0

        } catch (err) {
            console.log(err.response);
        }
    };     

    return (
        <Fragment>
            <div>
            <h1 className="large text-primary">Sign In</h1>
                <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
                <form className="form" onSubmit = { e => onSubmit(e)}>
                    <div className="form-group">
                    <input type="email" 
                        placeholder="Email Address" 
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required />
                    <small className="form-text"
                        >This site uses Gravatar so if you want a profile image, use a
                        Gravatar email</small
                    >
                    </div>
                    <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password}
                        onChange={e => onChange(e)}
                        required
                    />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Login" />
                </form>
                <p className="my-1">
                    Create an account? <Link to="register">Register</Link>
                </p>
            </div>
        </Fragment>
    )
}

export default Login;