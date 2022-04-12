import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlure = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlure = event => {
        setPassword(event.target.value);
    }

    const handleConfrimPasswordBlure = event => {
        setconfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 charecters or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlure} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlure} type="password" name="password" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input onBlur={handleConfrimPasswordBlure} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Alredy have a account? <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;