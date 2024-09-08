import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <Link className="navbar-brand" to="/">User Management</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-user">Add User</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/add-user" component={AddUser} />
          <Route path="/update-user/:id" component={UpdateUser} />
          <Route path="/delete-user/:id" component={DeleteUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
