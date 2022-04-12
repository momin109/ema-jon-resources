import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlure = event => {
        setName(event.target.value)
    }



    const handleAddressBlure = event => {
        setAddress(event.target.value);
    }

    const handlePhoneNumberBlure = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const Shipping = { name, email, address, phone };
        console.log(Shipping)

    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping information</h1>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor='name'>Name</label>
                        <input onBlur={handleNameBlure} type="name" name="name" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input value={user.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='address'>Address</label>
                        <input onBlur={handleAddressBlure} type="text" name="address" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='phone-number'>Phone Number</label>
                        <input onBlur={handlePhoneNumberBlure} type="number" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>

            </div>
        </div>
    );
};

export default Shipment;