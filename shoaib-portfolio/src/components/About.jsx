function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <h2 className="about-title">
          About Me
        </h2>

        <p className="about-subtitle">
          Learn more about me
        </p>

        <div className="row g-4">

          <div className="col-lg-7">

            <div className="about-card">

              <h3 className="about-heading">
                Who Am I?
              </h3>

              <p className="about-text">
                I'm Shoaib Shah, a passionate Computer Science graduate
                who enjoys building modern, responsive and user-friendly
                web applications using React.js, JavaScript, Bootstrap,
                PHP, MySQL and other web technologies.
              </p>

              <p className="about-text">
                My goal is to become a professional Full Stack Developer
                and create high-quality applications that solve real-world
                problems.
              </p>

            </div>

          </div>

          <div className="col-lg-5">

            <div className="about-card">

              <h3 className="about-heading">
                Personal Information
              </h3>

              <div className="info-item">
                <span>Name</span>
                <span>Shoaib Shah</span>
              </div>

              <div className="info-item">
                <span>Degree</span>
                <span>ADSE Software Engineering</span>
              </div>

              <div className="info-item">
                <span>Location</span>
                <span>Karachi, Pakistan</span>
              </div>

              <div className="info-item">
                <span>Email</span>
                <span>Shoaibshakeel293@gmail.com</span>
              </div>

              <div className="info-item">
                <span>Freelance</span>
                <span>Available</span>
              </div>

            </div>

          </div>

        </div>

        <div className="row mt-5 g-4 about-stats">

          <div className="col-md-4">
            <div className="stat-box">
              <h2>15+</h2>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="stat-box">
              <h2>10+</h2>
              <p>Technologies</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="stat-box">
              <h2>100%</h2>
              <p>Dedication</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;