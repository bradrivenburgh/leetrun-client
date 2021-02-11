import React from "react";
import { Switch, Route } from "react-router-dom";
import BoundaryError from "./components/BoundaryError";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';

function App() {
  return (
    <main className='App'>
      <BoundaryError>
        <Switch>
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
