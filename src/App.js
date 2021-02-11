import React from "react";
import { Switch, Route } from "react-router-dom";
import BoundaryError from "./components/BoundaryError";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <main className='App'>
      <BoundaryError>
        <Switch>
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
