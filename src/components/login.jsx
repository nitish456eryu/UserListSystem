import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://reqres.in/api/login', {
                email,
                password,
            });

            const token = response.data.token;

            localStorage.setItem('Token', token);

            navigate('/usersList');
        } catch (error) {
            console.error('Error during login:', error);
            alert('Invalid email or password');
        }
    };
    return (
        <>
            <div className='login-page'>
                <p className='login-header'>Login Your Account</p>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email' value={email} 
                    onChange={(e) => setEmail(e.target.value)} required  className='login-page-input'/> <br />

                    <input type="password" placeholder='Password' 
                    onChange={(e) => setPassword(e.target.value)} required className='login-page-input'/> <br />

                    <button type='submit' className='login-button'>Login</button>

                </form>
            </div>
        </>
    )
}

export default Login;
