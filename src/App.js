import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import BoundaryError from "./components/BoundaryError";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import RecordRun from './components/RecordRun';
import Summary from './components/Summary';
import EditRun from './components/EditRun';
import Leaderboards from './components/Leaderboards';
import { runEntries, prs, leaderboards } from './data';

function App() {
  /* State */
  const [currentRun, setCurrentRun] = useState({})

  /* handler for API call  */


  return (
    <main className='App'>
      <BoundaryError>
        <Switch>
          <Route path="/leaderboards">
            <Nav />
            <Leaderboards props={leaderboards} />
          </Route>
          <Route path="/edit-run">
            <Nav />
            <EditRun props={currentRun} />
          </Route>
          <Route path="/summary">
            <Nav />
            <Summary props={{runEntries, prs, setCurrentRun}}/>
          </Route>
          <Route path="/record-run">
            <Nav />
            <RecordRun />
          </Route>
          <Route path="/login">
            <Nav />
            <Login />
          </Route>
          <Route path="/create-account">
            <Nav />
            <CreateAccount />
          </Route>
          <Route path='/'>
            <Nav />
            <LandingPage />
          </Route>
        </Switch>
      </BoundaryError>
    </main>
  );
}

export default App;
