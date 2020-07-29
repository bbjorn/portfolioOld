import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import AboutMe from "./components/AboutMe";
import Code from "./components/Code";
import Design from "./components/Design";
import "./css/textstyles.css";

function App() {
  return (
    <React.Fragment>
      <Header
        position="Interaction Designer and Developer"
        name="Björn Bergqvist"
      />
      <h2 className="h2-box">Placeholder for the navbar</h2>

      <main className="container">
        <Switch>
          <Route path="/design" component={Design} />
          <Route path="/code" component={Code} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/" component={FrontPage} />
        </Switch>
      </main>
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
