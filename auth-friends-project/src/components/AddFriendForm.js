import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriendForm = (props) => {
    const [ friendCredentials, setFriendCredentials ] = useState({
        name: "",
        age: "",
        email: ""
    })

const handleChanges = e => {
    setFriendCredentials({
        ...friendCredentials,
        [e.target.name]: e.target.value
    })
}

const submit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/friends', friendCredentials)
    .then(res => {
        setFriendCredentials({
            ...friendCredentials,
            name: "",
            age: "",
            email: ""
        })
    })
    .catch(err => console.log(err));

}

    return(
        <form onSubmit={submit}>
            <input placeholder="name" type="text" name="name" value={friendCredentials.name} onChange={handleChanges} />
            <input placeholder="age" type="text" name="age" value={friendCredentials.age} onChange={handleChanges} />
            <input placeholder="email" type="email" name="email" value={friendCredentials.email} onChange={handleChanges} />
            <button type="submit">Add Friend</button>
        </form>
    )
};

export default AddFriendForm;