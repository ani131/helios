import React, { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // if we wanna send email using API or do smth with email
    setSent(true);
  };

  return (
    <div className="big-cont">
      <div className="row-contact">
        <div className="contact-us">
          <div className="heading">
            <h1>Contact Us</h1>
          </div>
          <div className="contact-container">
            {sent ? (
              <p>
                Thanks for your message! We'll get back to you as soon as
                possible at {email}!
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label style={{ color: "#000" }}>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </label>
                <label style={{ color: "#000" }}>
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </label>
                <label style={{ color: "#000" }}>
                  Message:
                  <textarea
                    rows="7"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  ></textarea>
                </label>
                <button type="submit">Send</button>
                <div className="sticky-bar">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  {/* <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a> */}
                </div>
              </form>
            )}
          </div>
        </div>

        <div class="faq-container">
          <div class="faq-section">
            <h2 class="faq-title">What is space tourism?</h2>
            <p class="faq-description">
              Space tourism is the idea of traveling to space for recreational
              purposes.
            </p>
          </div>

          <div class="faq-section">
            <h2 class="faq-title">How much does it cost to go to space?</h2>
            <p class="faq-description">
              Our space tourism package starts at $250,000 per person.
            </p>
          </div>
          <div class="faq-section">
            <h2 class="faq-title">Do I need to have any special training?</h2>
            <p class="faq-description">
              Yes, all space tourists will need to complete a training program
              before the launch.
            </p>
          </div>
          <div class="faq-section">
            <h2 class="faq-title">What kind of vehicles will be used?</h2>
            <p class="faq-description">
              Our space tourism company uses state-of-the-art spacecraft
              designed for safe and comfortable travel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
