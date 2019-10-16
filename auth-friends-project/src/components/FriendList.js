import React, { useState, useEffect } from 'react';
import Friend from './Friend';
import AddFriendForm from './AddFriendForm';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendList = () => {
    const [ friends, setFriends ] = useState([]);

    useEffect(()=> {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
          console.log(res.data);
          setFriends(res.data)
        })
        .catch(error => console.log(error));
      }, []);

      return(
          <div className="friend-list">
              <AddFriendForm />
              <h1>Friends</h1>
              <div className="friend-list">
              {friends.map(friend => (
                <div key={friend.id} className="friend">
                <Friend friend={friend} />
                </div>
            ))}
            </div>
          </div>
      )
}

export default FriendList