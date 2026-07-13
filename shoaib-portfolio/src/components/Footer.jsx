import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (

<footer className="footer">

<div className="container">

<div className="row">

<div className="col-lg-6">

<h2>

Shoaib<span className="text-info">.</span>

</h2>

<p>

Frontend Developer | React Developer | MERN Stack Learner

</p>

</div>

<div className="col-lg-6 text-lg-end">

<div className="footer-icons">

<a
href="https://github.com/shoaibshah125"
target="_blank"
rel="noreferrer"
>

<FaGithub/>

</a>

<a
href="https://linkedin.com/in/shoaib-shah67"
target="_blank"
rel="noreferrer"
>

<FaLinkedin/>

</a>

<a
href="mailto:YOUR_EMAIL@gmail.com"
>

<FaEnvelope/>

</a>

<a
href="https://wa.me/92XXXXXXXXXX"
target="_blank"
rel="noreferrer"
>

<FaWhatsapp/>

</a>

</div>

</div>

</div>

<hr />

<div className="footer-bottom">

<p>

© 2026 Shoaib Shah. All Rights Reserved.

</p>

<button

className="top-btn"

onClick={scrollTop}

>

<FaArrowUp/>

</button>

</div>

</div>

</footer>

  );

}

export default Footer;