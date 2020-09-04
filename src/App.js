import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Launch from "./components/Launch/Launch";

function App() {
  return (
    <div className="App">
      <Header />
      <Launch
        title="FalconSat"
        date="2006-03-25T10:30:00+12:00"
        img="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
        desc="Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
      />
      <Launch
        title="FalconSat"
        date="2006-03-25T10:30:00+12:00"
        img="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
        desc="Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
      />
    </div>
  );
}

export default App;
