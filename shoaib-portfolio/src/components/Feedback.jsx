import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Feedback() {

  const form = useRef();

  const sendFeedback = (e) => {

    e.preventDefault();

    emailjs.sendForm(
  "service_a89s2yw",
  "template_h1gebco",
  form.current,
  "WYDLtEW3sFUPX04XR"
)
    .then(() => {

      alert("Thank you for your feedback ❤️");
      e.target.reset();

    })
    .catch(() => {

      alert("Failed to send feedback.");

    });

  };

  return (

<section className="feedback" id="feedback">

<div className="container">

<div className="text-center mb-5">

<h2 className="section-title">
Feedback
</h2>

<p className="section-subtitle">
Your feedback helps me improve.
</p>

</div>

<div className="row justify-content-center">

<div className="col-lg-8">

<div className="feedback-card">

<form ref={form} onSubmit={sendFeedback}>

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

<select
name="rating"
className="form-control mb-3"
required
>

<option value="">Rate My Portfolio</option>
<option>⭐⭐⭐⭐⭐ Excellent</option>
<option>⭐⭐⭐⭐ Very Good</option>
<option>⭐⭐⭐ Good</option>
<option>⭐⭐ Average</option>
<option>⭐ Poor</option>

</select>

<textarea
rows="6"
name="message"
className="form-control mb-3"
placeholder="Write your feedback..."
required
></textarea>

<button
type="submit"
className="btn btn-info w-100"
>

Submit Feedback

</button>

</form>

</div>

</div>

</div>

</div>

</section>

  );

}

export default Feedback;