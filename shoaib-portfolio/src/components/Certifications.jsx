import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Advance Diploma in Software Engineering (ADSE)",
    institute: "Aptech North Karachi Campus",
    year: "2026",
    description:
      "Comprehensive training in Web Development, Programming, Databases, Software Engineering and MERN Stack."
  },
  {
    title: "Generative AI & Prompt Engineering",
    institute: "Aptech Learning Pakistan",
    year: "2025",
    description:
      "Learned Prompt Engineering, AI tools, ChatGPT, AI-assisted development and productivity techniques."
  }
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional Certifications & Training
          </p>
        </div>

        <div className="row">

          {certifications.map((item, index) => (

            <div className="col-lg-6 mb-4" key={index}>

              <div className="certificate-card">

                <div className="certificate-icon">
                  <FaCertificate />
                </div>

                <h4>{item.title}</h4>

                <h5>{item.institute}</h5>

                <span>{item.year}</span>

                <p>{item.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;