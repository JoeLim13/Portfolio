import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
//Pages
import Bio from "./pages/bio";
import Model from "./pages/model";
import Experiences from "./pages/experiences";
import Projects from "./pages/projects";
import Contact from "./pages/contactme";
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
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
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
                        path='/bio/me'
                        render={() => <Bio imageDetails={imageDetails} />}
                      />
                      <Route
                        exact
                        path='/model/:id'
                        render={() => <Model imageDetails={imageDetails} />}
                      />
                    </Switch>
                  </AnimatePresence>
                )}
              />
            </Switch>
            <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          <b>HELLO</b>, welcome to my website. My name is Lim Ean Han. You can call me Joe if you like. 
          Head over to <b>menu</b> and check out my portfolio. If you wish to head over to my social media(s), feel free to click the icons on top.
          <br></br>
          I will constantly update my website to make it more interactive for everyone of you. Currently, the website is not friendly to mobile user. I will update in the future, I promise. Last but not least, whenever a project is created by me, I will share it here. Stay tuned for more updates!
        </h5>
      </div>
    </div>
  );
}

export default App;
