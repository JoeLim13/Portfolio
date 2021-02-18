import React from 'react';
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
                    <p>An app which tracks habits and aids people in needs
                        <br></br>
                        <br></br>
                    <a style={{textDecoration: "none", color:"red"}} href="https://caring-project2021.netlify.app/" target="_blank">Go to my project</a>
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
                    <p>Create an instagram clone using two libraries : Flask and React
                        <br></br>
                        <br></br>
                    <a style={{textDecoration: "none", color:"red"}} href="https://xenodochial-benz-1dc6bd.netlify.app/" target="_blank">Go to my project</a>
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
            <div class="button-wrapper">
                <h3>Professional Skills I have learned so far including this portfolio</h3>
                <div class="button">
                    <div class="icon">
                        <i class="fab fa-react"></i></div>
                            <span>React</span>
                </div>
                <div class="button">
                    <div class="icon">
                        <i class="fab fa-python"></i></div>
                            <span>Python</span>
                </div>
                <div class="button">
                    <div class="icon">
                        <i class="fab fa-js"></i></div>
                            <span>Javascript</span>
                </div>
                <div class="button">
                    <div class="icon">
                        <i class="fab fa-html5"></i></div>
                            <span>HTML5</span>
                </div>
                <div class="button">
                    <div class="icon">
                        <i class="fab fa-css3"></i></div>
                            <span>CSS3</span>
                </div>
                <div class="button">
                    <div class="icon">
                        <i class="fas fa-flask"></i></div>
                            <span>Flask</span>
                </div>
                <div class="button">
                    <div class="icon">
                        <i class="fab fa-bootstrap"></i></div>
                            <span>Bootstrap</span>
                </div>
                <div class="button">
                    <div class="icon">
                        <i class="fab fa-aws"></i></div>
                            <span>AWS</span>
                </div>
                <div class="button">
                    <div class="icon">
                        <i class="fas fa-code"></i></div>
                            <span>SQL</span>
                </div>
            </div>
        </div>
        </>
    )}

export default Projects;