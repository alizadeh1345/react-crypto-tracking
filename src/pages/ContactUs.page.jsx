import React from "react";
import contactImg from "../assests/images/contact.png";

const ContactUsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-info p-3 rounded">
          <h3>Contact Us</h3>
        </div>
      </div>
      <div className="row align-items-center ">
        <div className="col-md-7  ">
          <div className="mt-3">
            <h3 className="text-primary">How To Contact Us</h3>
            <h5>+98 915 532 1721</h5>
            <h5>+51 5524 2111</h5>
            <h5>test@test.com</h5>
          </div>
          <div className="mt-3">
            <div className="mb-3">
              <label  className="form-label">
                Your Name
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="please  type your name"
              />
            </div>
            <div className="mb-3">
              <label  className="form-label">
                Your Message
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="please  type your message"
              />
            </div>
            <button className="btn btn-outline-primary ms-3">send</button>
          </div>
        </div>
        <div className="col-md-5  text-center">
          <img src={contactImg} alt="contact" className="img-fluid about-img" />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
