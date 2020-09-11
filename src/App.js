import React from 'react';
import './App.css';
import Client from "./client/Client";
import {BrowserRouter, Switch} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="body">
            <Switch>
                <Client />
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
