import React from 'react'

const Friend = (props) => {
    console.log(props)
    return(<>
        <h3>{props.friend.name}</h3>
        <p>age: {props.friend.age}</p>
        <p>email: {props.friend.email}</p>
    </>)
}

export default Friend