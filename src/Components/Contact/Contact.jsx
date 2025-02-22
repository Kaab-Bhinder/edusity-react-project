import React from "react";
import "./contact.css";
import ms_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "297b9753-f5af-4754-a24d-3fa6ffcd0a0f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact_col">
        <h3>
          Send Us A Message <img src={ms_icon} alt="" />
        </h3>
        <p>
          Reach out to us by filling out the form below, and our dedicated team
          will promptly address your queries with care and attention. Whether
          you have questions, need assistance, or want to share feedback, we are
          here to ensure all your concerns are answered and provide you with the
          best support possible!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contact@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 123 56 789
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 HOSTEL CITY <br />
            ISLAMABAD, PAISTAN
          </li>
        </ul>
      </div>
      <div className="contact_col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="tel"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Your Mobile No."
            required
          />
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          />
          <button className=" btn dark" type="submit">
            Submit Now <img src={arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
