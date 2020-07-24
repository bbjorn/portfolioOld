import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import "./css/textstyles.css";

function App() {
  return (
    <React.Fragment>
      <Header
        position="Interaction Designer and Developer"
        name="Björn Bergqvist"
      />
      <h2 className="h2-box">Placeholder for the navbar</h2>
      <FrontPage title="Interaction Design Graduate" name="Björn Bergqvist" />
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
