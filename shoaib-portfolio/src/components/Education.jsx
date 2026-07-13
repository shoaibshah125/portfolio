import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Advance Diploma in Software Engineering (ADSE)",
    institute: "Aptech North Karachi Campus",
    year: "2026",
    description:
      "Advanced Diploma in Software Engineering with focus on Web Development, MERN Stack, Databases and Software Engineering."
  },

  {
    degree: "Associate of Science",
    institute: "Shaheed Benazir Bhutto University",
    year: "2025",
    description:
      "Associate Degree in Science with strong academic foundation."
  },

  {
    degree: "Intermediate",
    institute: "Govt. Boys Higher Secondary School",
    year: "2020",
    description:
      "Completed Intermediate in Science."
  },

  {
    degree: "Matriculation",
    institute: "New City Academy School, Karachi",
    year: "2018",
    description:
      "Completed Secondary School Education."
  }
];

function Education() {

  return (

<section className="education" id="education">

<div className="container">

<div className="text-center mb-5">

<h2 className="section-title">
Education
</h2>

<p className="section-subtitle">
My Academic Journey
</p>

</div>

<div className="row">

{education.map((item,index)=>(

<div className="col-lg-6 mb-4" key={index}>

<div className="education-card">

<div className="education-icon">

<FaGraduationCap/>

</div>

<h4>{item.degree}</h4>

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

export default Education;