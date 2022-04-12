import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleEmailBlure = event => {
        setEmail(event.target.value);
    }

    const handlePasswordlBlure = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSing = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>this is login page</h1>
                <form onSubmit={handleUserSing}>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlure} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordlBlure} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loadding...</p>

                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    new to ema-jon? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;