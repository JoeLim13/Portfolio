import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
//Styles
import "../scss/Contact.scss";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iy0l7wv",
        "template_30dsao9",
        e.target,
        "user_p0FqupsUvRquNn9uHvU5q"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thank you!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Opps, please try again!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
    e.target.reset();
  }
  return (
    <>
      <p>Feel free to reach me.</p>
      <div className="contact-section">
        <div className="border"></div>
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            className="contact-form-text"
            placeholder="Your name"
            name="name"
          />
          <input
            type="email"
            className="contact-form-text"
            placeholder="Your email"
            name="email"
          />
          <input
            type="text"
            className="contact-form-text"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="contact-form-text"
            placeholder="Your message"
            name="message"
          ></textarea>
          <input type="submit" className="contact-form-btn" value="Send" />
        </form>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
