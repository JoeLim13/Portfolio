import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
    canScroll: true,
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  if (state.canScroll === false) {
    document.querySelector("body").classList.add("no-scroll");
  } else {
    document.querySelector("body").classList.remove("no-scroll");
  }

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
        canScroll: false,
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
        canScroll: true,
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
        canScroll: false,
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HOMEPAGE</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
