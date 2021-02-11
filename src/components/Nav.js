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
          <a href='summary.html'>Summary</a>
        </li>
        <li>
          <a href='leaderboard.html'>Leaderboards</a>
        </li>
        <li>
          <a href='record-run.html'>Record run</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
