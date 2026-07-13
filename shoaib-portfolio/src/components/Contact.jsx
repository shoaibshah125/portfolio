import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {

  const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_a89s2yw",
      "template_h1gebco",
      form.current,
      "WYDLtEW3sFUPX04XR"
    )
    .then((result) => {
      console.log(result);
      alert("✅ Message Sent Successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.log("Status:", error.status);
      console.log("Text:", error.text);
      console.log(error);

      alert(`❌ ${error.status} - ${error.text}`);
    });
};
  

  return (

<section className="contact py-5" id="contact">

<div className="container">

<div className="text-center mb-5">

<h2 className="section-title">
Contact Me
</h2>

<p className="section-subtitle">
Let's build something amazing together.
</p>

</div>

<div className="row">

<div className="col-lg-5 mb-4">

<div className="contact-info">

<h3>Get In Touch</h3>

<p>
Feel free to contact me for jobs, internships,
freelance work or collaboration.
</p>

<div className="contact-item">

<FaEnvelope className="icon"/>

<span>shoaibshakeel293@gmail.com</span>

</div>

<div className="contact-item">

<FaPhoneAlt className="icon"/>

<span>+923153400086</span>

</div>

<div className="contact-item">

<FaMapMarkerAlt className="icon"/>

<span>Karachi, Pakistan</span>

</div>

<a

href="https://wa.me/923153400086"

target="_blank"

rel="noreferrer"

className="btn btn-success mt-4"

>

<FaWhatsapp className="me-2"/>

Chat on WhatsApp

</a>

</div>

</div>

<div className="col-lg-7">

<form ref={form} onSubmit={sendEmail} className="contact-form">

<input

type="text"

name="user_name"

className="form-control mb-3"

placeholder="Your Name"

required

/>

<input

type="email"

name="user_email"

className="form-control mb-3"

placeholder="Your Email"

required

/>

<input

type="text"

name="subject"

className="form-control mb-3"

placeholder="Subject"

required

/>

<textarea

rows="6"

name="message"

className="form-control mb-3"

placeholder="Write your message..."

required

></textarea>

<button

type="submit"

className="btn btn-info w-100"

>

Send Message

</button>

</form>

</div>

</div>

</div>

</section>

  );

}

export default Contact;