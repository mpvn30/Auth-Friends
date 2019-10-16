import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <Router>
        <div className="App">
        <ul>
            <a><Link to="/login">Login</Link></a>
        
            <a><Link to="/friends">Friends</Link></a>
        </ul>
      <Switch>
          <PrivateRoute exact path="/friends" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
        </div>
      </Router>
      
  );
}

export default App;
