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
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email' value={email} 
                onChange={(e) => setEmail(e.target.value)} required />

                <input type="password" placeholder='Password' 
                onChange={(e) => setPassword(e.target.value)} required />

                <button type='submit'>Login</button>

            </form>
        </>
    )
}

export default Login;