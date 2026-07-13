import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    company: "Y.R Textile",
    role: "Quality Checker",
    duration: "Nov 2022 - Oct 2023",
    location: "Karachi, Pakistan",
    points: [
      "Conducted in-line and final quality inspections.",
      "Maintained quality documentation and reports.",
      "Collaborated with production teams to improve product quality.",
    ],
  },
  {
    company: "H.S Textile",
    role: "Quality Checker",
    duration: "Sep 2020 - Aug 2022",
    location: "Karachi, Pakistan",
    points: [
      "Inspected raw materials and finished products.",
      "Identified and reported quality defects.",
      "Maintained inspection records.",
    ],
  },
  {
    company: "Diversus (Alfa Application)",
    role: "Brand Ambassador",
    duration: "Feb 2020 - Jul 2020",
    location: "Karachi, Pakistan",
    points: [
      "Promoted the Alfa Application.",
      "Assisted customers with registration.",
      "Provided customer support.",
    ],
  },
];

function Experience() {
  return (
    <section className="experience py-5" id="experience">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional experience and responsibilities.
          </p>
        </div>

        <div className="row">

          {experience.map((item, index) => (

            <div className="col-lg-4 mb-4" key={index}>

              <div className="experience-card">

                <div className="experience-icon">
                  <FaBriefcase />
                </div>

                <h4>{item.role}</h4>

                <h5>{item.company}</h5>

                <span className="experience-date">
                  {item.duration}
                </span>

                <p className="text-info mb-3">
                  {item.location}
                </p>

                <ul>

                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;