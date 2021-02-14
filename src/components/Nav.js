import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import IdleService from "../services/idle-service";
import "./Nav.css";

function Nav() {
  const handleLogoutClick = () => {
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  const renderLogoutLink = () => {
    return (
      <Link onClick={handleLogoutClick} to='/'>
        Logout
      </Link>
    );
  };

  const renderLoginLink = () => {
    return <Link to='login'>Log in</Link>;
  };

  return (
    <nav role='navigation'>
      <div className='nav-logo'>
        <Link to='/'>LeetRun</Link>
      </div>
      <ul>
        <li>
        {TokenService.hasAuthToken()
            ? ""
            : <Link to='create-account'>Create account</Link>}
        </li>
        <li>
          {TokenService.hasAuthToken()
            ? renderLogoutLink()
            : renderLoginLink()}
        </li>
        <li>
          <Link to='summary'>Summary</Link>
        </li>
        <li>
          <Link to='leaderboards'>Leaderboards</Link>
        </li>
        <li>
          <Link to='record-run'>Record run</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
