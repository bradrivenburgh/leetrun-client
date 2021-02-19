import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TokenService from "../services/token-service";
import IdleService from "../services/idle-service";
import recordRunIcon from '../images/record-run-icon.png';
import summaryIcon from '../images/summary-icon.png';
import "./Nav.css";

function Nav({props: {loggedIn, setLoggedIn}}) {  
  const { width } = useWindowWidth();

  function getWindowWidth() {
    const { innerWidth: width } = window;
    return {
      width,
    };
  }
  
  function useWindowWidth() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowWidth());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowWidth());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  
  const handleLogoutClick = () => {
    TokenService.clearAuthToken();
    setLoggedIn(TokenService.hasAuthToken())
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
    return <Link to='login'>Login</Link>;
  };


  return (
    <nav role='navigation'>
      <div className='nav-logo'>
        <Link to='/'>LeetRun</Link>
      </div>
      <ul>
        <li>
        {loggedIn
            ? ""
            : <Link to='create-account'>Sign-up</Link>}
        </li>
        <li>
          {loggedIn
            ? renderLogoutLink()
            : renderLoginLink()}
        </li>
        <li>
          <Link to='summary'>
          {width < "500" 
          ? <button className="nav-icon"><img src={summaryIcon} alt="Summary" title="Summary" style={{height: "15px"}} /></button>
          : "Summary"
          }

          </Link>
        </li>
        <li>
          <Link to='record-run'>
          {width < "500" 
          ? <button className="nav-icon"><img src={recordRunIcon} alt="Summary" title="Record run" style={{height: "15px"}} /></button>
          : "Record run"
          }

          </Link>
        </li>
      </ul>
    </nav>
  );
}

Nav.defaultProps = {
  props: {
    loggedIn: false,
    setLoggedIn: () => {},
  }
}

Nav.propTypes = {
  props: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
  })
}

export default Nav;
