import "./Contact.css"
import msg from "../../assets/msg-icon.png"
import mail from "../../assets/mail-icon.png"
import phone from "../../assets/phone-icon.png"
import location from "../../assets/location-icon.png"
import arrow from "../../assets/white-arrow.png"
import React from "react"

export default function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "951966d0-4c89-44d5-9994-141b01990e40");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
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
        <div className="contact-col">
            <h3>Semd us a message <img src={msg} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail} alt="" />contact@webrehalm.dev</li>
                <li><img src={phone} alt="" />+263 78 738 3289</li>
                <li><img src={location} alt="" />77 assachusets Ave, Cambridge <br />MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit} action="">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" required />
                <label>Phone Number</label>
                <input type="text" name="phone" placeholder="Enter your phone number" required />
                <label>Your message here</label>
                <textarea name="message" placeholder="write your message"  id="message" rows={6} required></textarea>
                <button type="submit" className="btn dark-btn">Submit now <img src={arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}