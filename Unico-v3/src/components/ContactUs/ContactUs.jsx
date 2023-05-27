import React, { useRef } from "react";
import "./ContactUs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_znx2ked",
        "template_h9v5jqm",
        form.current,
        "TonF8GBb9cNnafMih"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <Header />
      <div class="contact-container">
        <div class="contact-box">
          <div className="contact-left">
            <h2>Get In Touch</h2>
            <p>
              Hey👋🏻 shoot a message and we are all in to hear. <br />
              Connect with us on WhatsApp or DM on Instagram too.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div class="contact-right">
              <h2>WE ARE ALL EARS</h2>
              <input
                type="text"
                class="field"
                placeholder="Your Name"
                name="name"
              />
              <input
                type="email"
                class="field"
                placeholder="Your Email"
                name="email"
              />
              <input
                type="number"
                class="field"
                placeholder="Phone"
                name="phone"
              />
              <textarea
                placeholder="Message"
                class="field"
                name="message"
              ></textarea>
              <button class="btn">Send</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
