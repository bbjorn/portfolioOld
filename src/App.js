import React from "react";
import "./App.css";
import PortHeader from "./components/PortHeader";

function App() {
  return (
    <div>
      <PortHeader />
      <div className="App">
        <h1>My react portfolio</h1>
        <h2>Author: Björn Bergqvist </h2>
        <p> This is a test line </p>
      </div>
    </div>
  );
}

export default App;
