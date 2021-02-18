import React from "react";
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthApiService from '../services/auth-api-service';
import "./LandingPage.css";

function LandingPage({props: setLoggedIn}) {

  const history = useHistory();

  const handleLogin = () => {
    AuthApiService.postLogin({
      user_name: "BradR",
      password: "Sn@pple123",
    })
    .then(response => {
      setLoggedIn(true);
      history.push('/summary');
    });
  }

  return (
    <>
      <header role='banner'>
        <h1>LeetRun</h1>
        <p>
          <strong>
            Track your runs. <br />
            View your progress. <br />
            Become elite.
          </strong>
        </p>
      </header>
      <div className='landing'>
        <section>
          <h2>A better way to track your running journey</h2>
          <p>
            Spreadsheets and running journals have their place for tracking
            progress, but LeetRun takes monitoring your progress to the next
            level with dynamic summaries and stats tracking.
          </p>
        </section>

        <section>
          <h2>Record your runs</h2>
          <img
            src='https://placehold.it/600x300?text=run%20recording%20interface'
            alt='record run form'
          />
          <p>
            LeetRun lets you capture all the details about your runs,
            including location, distance, surface type, terrain type, 
            weather conditions, and personal notes.
          </p>
        </section>

        <section>
          <h2>Track your progress</h2>
          <img
            src='https://placehold.it/600x300?text=summary%20view'
            alt='summary view'
          />
          <p>
            View a chart of how often you run over time and filter your
            runs based on a multitude of criteria.
          </p>
        </section>

        <section style={{textAlign: "center"}}>
          <h2>Start your running journey now</h2>
          <p>Enter the following credentials at the "Login" page</p>
          <p><em>user: BradR<br/> password: Sn@pple123</em></p>
          <p>OR</p>
          <p>Login as the demo user with the following button:</p>
          <button onClick={handleLogin}>Login as <br /> demo user</button>
        </section>
      </div>
      <footer>
        <p>Created by Brad Rivenburgh</p>
        <p>
          <a href='https://www.linkedin.com/in/brad-rivenburgh/' target='_new'>
            LinkedIn
          </a>{" "}
          |{" "}
          <a href='https://github.com/bradrivenburgh' target='_new'>
            GitHub
          </a>
        </p>
        <p>Copyright &copy; 2021</p>
      </footer>
    </>
  );
}

LandingPage.defaultProps = {
  setLoggedIn: () => {},
}

LandingPage.propTypes = {
  setLoggedIn: PropTypes.func.isRequired
}

export default LandingPage;
