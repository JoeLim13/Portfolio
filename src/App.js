import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//Pages
import Bio from "./pages/bio";
import Model from "./pages/model";
import Experiences from "./pages/experiences";
import Projects from "./pages/projects";
import Contact from "./pages/contactme";
import Home from "./pages/home";
//components
import Header from "./components/Header";
//Styles
import "./App.scss";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <Router>
      <Header />
      {/* <div className="container">
        <div className="wrapper">
          <div className="home"> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experiences" component={Experiences} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact-me" component={Contact} />
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path="/bio/me"
                  render={() => <Bio imageDetails={imageDetails} />}
                />
                <Route
                  exact
                  path="/model/:id"
                  render={() => <Model imageDetails={imageDetails} />}
                />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Switch>
      <ToastContainer />
      {/* </div>
        </div>
      </div> */}
    </Router>
  );
}

export default App;
