import React, { useState, useEffect } from 'react';
import Friend from './Friend';
import AddFriendForm from './AddFriendForm';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendList = (props) => {
  const [ friends, setFriends ] = useState([])
  
  useEffect(() => {
    axiosWithAuth()
    .get('/friends')
    .then(res => setFriends(res.data))
    .catch(err => console.log(err))
  })
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


export default FriendList;