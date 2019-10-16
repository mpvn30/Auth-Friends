import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
    const[ userCredentials, setUserCrendetials ] = useState({
        username: '',
        password: ''
    })
}

const handleChanges = e =>{
    setUserCrendetials({
        ...userCredentials,
        [e.target.name]: e.target.value
    })
}
