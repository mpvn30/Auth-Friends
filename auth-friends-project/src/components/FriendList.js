import React, { useState, useEffect } from 'react';
import Friend from './Friend';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendList = (props) => {
    const [ friends, setFriends ] = useState([]);

    useEffect(()=> {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
          console.log(res.data);
          setFriends(res.data)
        })
        .catch(error => console.log(error));
      }, []);

      return(
          <div>
              <h1>friends</h1>
          </div>
      )
}

export default FriendList