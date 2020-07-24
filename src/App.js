import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header
        position="Interaction Designer and Developer"
        name="Björn Bergqvist"
      />
      <div className="App">
        <h1>My react portfolio</h1>
        <h2>Author: Björn Bergqvist </h2>
        <p> This is a test line </p>
      </div>
      <Footer
        linkedIn="bjrn-bergquist"
        email="bjrn.bergqvist@gmail.com"
        phonenumber="(+46) 073-3809927"
      />
    </React.Fragment>
  );
}

export default App;

/*
header
navbar
switch -> welcome / about me / design / code
footer
*/
