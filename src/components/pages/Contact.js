import React, { useState } from "react";

export default function Contact() {

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    name === "contact-name" ? setContactName(value) : setContactEmail(value);
  };

  const checkUserInput = (e) => {
    const { name, value } = e.target;

    if (!value) {
      name === "contact-name"
        ? alert(`Name is a required field. Please enter a value`)
        : alert(`email is a required field. Please enter a value`);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setContactName("");
    setContactEmail("");
  };

  return (
    <div className="row mb-5">
      <h3>Contact</h3>
      <form className="flex-row" onSubmit={handleFormSubmit}>
        <div className="form-group col-6">
          <label htmlFor="contact-name">Name:</label>
          <input
            className="form-control"
            type="text"
            id="contact-name"
            name="contact-name"
            value={contactName}
            required
            onChange={handleInputChange}
            onMouseLeave={checkUserInput}
          />
        </div>
        <div className="form-group col-6">
          <label htmlFor="contact-email">Email:</label>
          <input
            className="form-control"
            type="email"
            id="contact-email"
            name="contact-email"
            value={contactEmail}
            required
            onChange={handleInputChange}
            onMouseLeave={checkUserInput}
          />
        </div>
        <div className="form-group col-6">
          <label htmlFor="contact-msg">Message:</label>
          <textarea
            className="form-control"
            id="contact-msg"
            rows="5"
          ></textarea>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            type="submit"
            onSubmit={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
