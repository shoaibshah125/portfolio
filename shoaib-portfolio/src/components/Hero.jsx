import hero from "../assets/hero.png";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}

          <div className="col-lg-6">

            <div className="hero-content">

              <span className="hero-tag">
                👋 Welcome To My Portfolio
              </span>

              <h1 className="hero-title">
                Hi, I'm <br />
                <span>Shoaib Shah</span>
              </h1>

              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "JavaScript Developer",
                  2000,
                  "Web Developer",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="hero-type"
              />

              <p className="hero-desc">
                Computer Science graduate passionate about building
                responsive, modern and user-friendly web applications
                using React.js, JavaScript, Bootstrap, PHP and MySQL.
              </p>

              <div className="hero-btns">

                <a
                  href="/resume.pdf"
                  download
                  className="btn hero-btn btn-blue"
                >
                  <FaDownload className="me-2" />
                  Download CV
                </a>

                <a
                  href="#contact"
                  className="btn hero-btn btn-outline"
                >
                  Hire Me
                </a>

              </div>

              <div className="social-icons">

                <a
                  href="https://github.com/shoaibshah125"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/shoaib-shah67"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://wa.me/923150202844"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-6">

            <div className="hero-image">

              <img
                src={hero}
                alt="Shoaib Shah"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;