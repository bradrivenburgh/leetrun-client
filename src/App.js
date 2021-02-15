import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import BoundaryError from "./components/BoundaryError";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import RecordRun from "./components/RecordRun";
import Summary from "./components/Summary";
import EditRun from "./components/EditRun";
import Leaderboards from "./components/Leaderboards";
import TokenService from "./services/token-service";
import AuthApiService from "./services/auth-api-service";
import IdleService from "./services/idle-service";
import { runEntries, prs, leaderboards, runFrequency } from "./data";

function App() {
  /* State */
  const [currentRun, setCurrentRun] = useState({});
  const [allRuns, setAllRuns] = useState(runEntries);
  const [allRunsCopy] = useState(allRuns);

  const logoutFromIdle = () => {
    // remove the token from localStorage
    TokenService.clearAuthToken();

    // remove any queued calls to the refresh endpoint
    TokenService.clearCallbackBeforeExpiry();

    // remove the timeouts that auto logout when idle
    IdleService.unRegisterIdleResets();
  };

  useEffect(() => {
    //  we'll set this to logout a user when they're idle
    IdleService.setIdleCallback(logoutFromIdle);

    // if a user is logged in
    if (TokenService.hasAuthToken()) {
      // tell the idle service to register event listeners
      // to prevent logoutFromIdle
      IdleService.registerIdleTimerResets();

     // Queue a timeout just before the JWT token expires
      TokenService.queueCallbackBeforeExpiry(() => {
        // the timeout will call this callback just before the token expires
        AuthApiService.postRefreshToken();
      });
    }
    return () => {
      // when the app unmounts, stop the event listeners 
      // that auto logout (clear the token from storage)
      IdleService.unRegisterIdleResets();

      // remove the refresh endpoint request
      TokenService.clearCallbackBeforeExpiry();
    };
  }, []);

  return (
    <main className='App'>
      <BoundaryError>
        <Nav />
        
        <Switch>
          <Route path='/leaderboards'>
            <Leaderboards props={{ leaderboards }} />
          </Route>
          <Route path='/edit-run'>
            <EditRun props={{ allRuns, currentRun, setAllRuns }} />
          </Route>
          <Route path='/summary'>
            <Summary
              props={{
                allRuns,
                prs,
                allRunsCopy,
                runFrequency,
                setAllRuns,
                setCurrentRun,
              }}
            />
          </Route>
          <Route path='/record-run'>
            <RecordRun props={{ allRuns, setAllRuns }} />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/create-account'>
            <CreateAccount />
          </Route>
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </BoundaryError>
    </main>
  );
}

export default App;
