import React from 'react';
import classes from '../Styles/Account.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Account() {
  const { currentUser, logout } = useAuth();
  const handleLogout = (event) => {
    logout()
      .then((res) => {
        console.log('res: ',res);
      })
      .catch((error) => {
        console.log('error: ',error);
      });
  };
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={handleLogout}>
            {' '}
            logout{' '}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
