import React from 'react';
import './App.css';
import Client from "./client/Client";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="body">
            <Client />
        </div>
      </BrowserRouter>
  );
}

export default App;
