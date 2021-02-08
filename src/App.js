import React from 'react';
import { Switch, Route } from "react-router-dom";
import BoundaryError from './components/BoundaryError';
function App() {
  return (
    <main className='App'>
      <BoundaryError>
        <Switch>
          
        </Switch>
      </BoundaryError>
    </main>
  );
}

export default App;