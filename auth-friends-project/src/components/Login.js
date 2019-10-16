import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
    const[ userCredentials, setUserCrendetials ] = useState({
        username: '',
        password: ''
    })

const handleChanges = e =>{
    setUserCrendetials({
        ...userCredentials,
        [e.target.name]: e.target.value
    })
}

const login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login', userCredentials)
    .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/friends')
    })
    .catch(err => console.log(err))
}

return(
    <div className="login">
        <form onSubmit={login}>
            <input type="text" name="username" value={userCredentials.username} onChange={handleChanges}></input>
            <input type="password" name="password" value={userCredentials.password} onChange={handleChanges}></input>
            <button>Log In</button>
        </form>
    </div>
    )
}
export default Login;