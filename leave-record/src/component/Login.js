import React, { useContext, useState, createContext } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { CheckLogout } from '../CustomFunction';

function Login() {
    if(CheckLogout() == true){window.history.back()}
    if(!!localStorage.getItem('user')){localStorage.removeItem('user')}
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const handleSearch = async () => {
        try {
            const response = await axios.post(`http://localhost:3001/login`, { email: username, password: password });
            //console.log((response.data))
            localStorage.setItem('user', JSON.stringify(response.data.user));
            const token = response.data.token
            if (token != "") {
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = await `Bearer ${localStorage.getItem('token')}`
                axios.post(`http://localhost:3001/login/auth`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(res => {

                    Swal.fire({
                        title: 'สำเร็จ',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then((result) => { if (result.isConfirmed) { navigate('/') } });

                }).catch(error => {
                    console.error('xxxxxxxxxxxxxxxxxxxxxxxxxxx:', error)
                })
            }
            ;
        } catch (error) {
            Swal.fire({
                title: 'อีเมลหรือรหัสผ่านผิด',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            console.error('Error searching for user:', error);
            setUserData(null);
            setError('User not found');
        }
    }

    return (
        <>
                <div className='container'>
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type='button' className="btn btn-primary" onClick={handleSearch}>Login</button>
                    </form>
                </div>
        </>
    )
}

export default Login