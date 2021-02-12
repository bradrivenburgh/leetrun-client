import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (
    <nav role='navigation'>
      <div className='nav-logo'>
        <Link to="/">LeetRun</Link>
      </div>
      <ul>
        <li>
          <Link to="create-account">Create account</Link>
        </li>
        <li>
          <Link to="login">Login / Logout</Link>
        </li>
        <li>
          <Link to="summary">Summary</Link>
        </li>
        <li>
          <a href='leaderboard.html'>Leaderboards</a>
        </li>
        <li>
          <Link to="record-run">Record run</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
