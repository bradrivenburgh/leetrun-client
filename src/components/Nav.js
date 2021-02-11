import React from "react";
import './Nav.css'

function Nav() {
  return (
    <nav role='navigation'>
      <div className='nav-logo'>
        <a href='index.html'>LeetRun</a>
      </div>
      <ul>
        <li>
          <a href='create-account.html'>Create account</a>
        </li>
        <li>
          <a href='login.html'>Login / Logout</a>
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
