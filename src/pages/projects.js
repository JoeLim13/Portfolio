import React from "react";
//Styles
import "../scss/Projects.scss";

function Projects() {
  return (
    <>
      <p>Discover My Projects so far</p>

      <div className="img-container">
        <div className="img-box">
          <div className="img"></div>
          <div className="overlay"></div>
          <div className="overlay2"></div>
          <div className="text">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h2>Self Caring App</h2>
            <p>
              An app which tracks habits and aids people in needs
              <br></br>
              <br></br>
              <a
                style={{ textDecoration: "none", color: "red" }}
                href="https://caring-project2021.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to my project
              </a>
            </p>
          </div>
        </div>
        <div className="img-box">
          <div className="img2"></div>
          <div className="overlay"></div>
          <div className="overlay2"></div>
          <div className="text">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h2>NEXTAGRAM using Flask and React</h2>
            <p>
              Create an instagram clone using two libraries : Flask and React
              <br></br>
              <br></br>
              <a
                style={{ textDecoration: "none", color: "red" }}
                href="https://xenodochial-benz-1dc6bd.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to my project
              </a>
            </p>
          </div>
        </div>
        <div className="img-box">
          <div className="img3"></div>
          <div className="overlay"></div>
          <div className="overlay2"></div>
          <div className="text">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h2>Live Chatroom</h2>
            <p>Make use of socket io integration to create a live chatroom</p>
          </div>
        </div>
      </div>
      <div className="img-container">
        <div className="img-box">
          <div className="img4"></div>
          <div className="overlay"></div>
          <div className="overlay2"></div>
          <div className="text">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h2>Amazon Clone</h2>
            <p>
              Amazon E Commerce (Firebase Hosting)
              <br></br>
              <br></br>
              <a
                style={{ textDecoration: "none", color: "red" }}
                href="https://clone-16a0f.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to my project
              </a>
            </p>
          </div>
        </div>
        <div className="img-box">
          <div className="img5"></div>
          <div className="overlay"></div>
          <div className="overlay2"></div>
          <div className="text">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h2>Covid 19 Tracker</h2>
            <p>
              Tracks Covid-19 cases worldwide
              <br></br>
              <br></br>
              <a
                style={{ textDecoration: "none", color: "red" }}
                href="https://covid19-tracker-d3fb8.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to my project
              </a>
            </p>
          </div>
        </div>
        <div className="img-box">
          <div className="img6"></div>
          <div className="overlay"></div>
          <div className="overlay2"></div>
          <div className="text">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h2>WhatsApp Clone</h2>
            <p>
              Live WhatsApp Clone
              <br></br>
              <br></br>
              <a
                style={{ textDecoration: "none", color: "red" }}
                href="https://whatsapp-clone-44bb3.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to my project
              </a>
            </p>
          </div>
        </div>
      </div>
      <h3 className="project-h3">
        Professional Skills I have learned so far including this portfolio
      </h3>
      <div className="button-wrapper">
        <div className="button">
          <div className="icon">
            <i className="fab fa-react"></i>
          </div>
          <span>React</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-python"></i>
          </div>
          <span>Python</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-js"></i>
          </div>
          <span>Javascript</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-html5"></i>
          </div>
          <span>HTML5</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-css3"></i>
          </div>
          <span>CSS3</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fas fa-flask"></i>
          </div>
          <span>Flask</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-bootstrap"></i>
          </div>
          <span>Bootstrap</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-aws"></i>
          </div>
          <span>AWS</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fas fa-code"></i>
          </div>
          <span>SQL</span>
        </div>
      </div>
    </>
  );
}

export default Projects;
