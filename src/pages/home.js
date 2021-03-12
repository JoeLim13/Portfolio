import React from "react";

//Styles
import "../scss/Home.scss";

function home() {
  return (
    <section>
      <video src="homevid.MOV" autoPlay loop muted></video>
      <h2>
        Welcome to My Website<br></br>
        <span>click on menu</span>
      </h2>
    </section>
  );
}

export default home;
