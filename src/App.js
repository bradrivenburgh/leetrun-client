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
import PublicOnlyRoute from "./Utils/PublicOnlyRoute";
import PrivateRoute from "./Utils/PrivateRoute";
import TokenService from "./services/token-service";
import AuthApiService from "./services/auth-api-service";
import IdleService from "./services/idle-service";
import { runEntries, prs, leaderboards, runFrequency } from "./data";

function App() {
  /* State */
  const [currentRun, setCurrentRun] = useState({});
  const [allRuns, setAllRuns] = useState([]);
  const [allRunsCopy, setAllRunsCopy] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  /* Handle idle logout / refresh */
  const logoutFromIdle = () => {
    // remove the token from localStorage
    TokenService.clearAuthToken();
    // remove any queued calls to the refresh endpoint
    TokenService.clearCallbackBeforeExpiry();
    // remove the timeouts that auto logout when idle
    IdleService.unRegisterIdleResets();
    setLoggedIn(false);
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
        <Nav props={{ loggedIn, setLoggedIn }} />

        <Switch>
          <PrivateRoute path='/leaderboards'>
            <Leaderboards props={{ leaderboards }} />
          </PrivateRoute>
          <PrivateRoute path='/edit-run'>
            <EditRun props={{ allRunsCopy, currentRun, setAllRuns, setAllRunsCopy }} />
          </PrivateRoute>
          <PrivateRoute path='/summary'>
            <Summary
              props={{
                allRuns,
                allRunsCopy,
                prs,
                runFrequency,
                setAllRuns,
                setAllRunsCopy,
                setCurrentRun,
              }}
            />
          </PrivateRoute>
          <PrivateRoute path='/record-run'>
            <RecordRun props={{ allRuns, setAllRuns }} />
          </PrivateRoute>
          <PublicOnlyRoute path='/login'>
            <Login props={setLoggedIn} />
          </PublicOnlyRoute>
          <PublicOnlyRoute path='/create-account'>
            <CreateAccount props={setLoggedIn} />
          </PublicOnlyRoute>
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </BoundaryError>
    </main>
  );
}

export default App;
