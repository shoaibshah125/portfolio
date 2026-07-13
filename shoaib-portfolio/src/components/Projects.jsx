import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MERN EventSphere Management System",
    description:
      "A complete MERN Stack event management system with authentication, event booking and admin dashboard.",
    image: "/projects/eventsphere.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/shoaibshah125/eventsphere-management-system",
    demo: "https://shoaibshah125.github.io/eventsphere-management-system/",
  },

  {
    title: "Online Shopping Cart",
    description:
      "Responsive E-Commerce website with shopping cart, checkout, login and admin panel.",
    image: "/projects/shopping.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/shoaibshah125/online-shopping-cart",
    demo: "https://shoaibshah125.github.io/online-shopping-cart/",
  },

  {
    title: "Astronomy Website",
    description:
      "Responsive educational website about planets, galaxies and the universe.",
    image: "/projects/astronomy.jpg",
    technologies: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/shoaibshah125/astronomy-website",
    demo: "https://shoaibshah125.github.io/astronomy-website/",
  },

  {
    title: "Weather Forecast App",
    description:
      "React weather application using Weather API with live forecasts and search.",
    image: "/projects/weather.jpg",
    technologies: ["React", "API", "Bootstrap"],
    github: "https://github.com/shoaibshah125/weather-forecast-app",
    demo: "https://shoaibshah125.github.io/weather-forecast-app/",
  },

  {
    title: "Expense Tracker",
    description:
      "Track income and expenses with charts, categories and reports.",
    image: "/projects/expense.jpg",
    technologies: ["React", "Firebase"],
    github: "https://github.com/shoaibshah125/expense-tracker",
    demo: "https://shoaibshah125.github.io/expense-tracker/",
  },

  {
    title: "Hospital Management System",
    description:
      "Hospital management application for patients, doctors and appointments.",
    image: "/projects/hospital.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/shoaibshah125/hospital-management-system",
    demo: "https://shoaibshah125.github.io/hospital-management-system/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Some of my featured projects and practice applications.
          </p>
        </div>

        <div className="row">

          {projects.map((project, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="project-card">

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/600x400/0f172a/38bdf8?text=Project";
                    }}
                  />

                </div>

                <div className="project-content">

                  <h4>{project.title}</h4>

                  <p>{project.description}</p>

                  <div className="tech-stack">

                    {project.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}

                  </div>

                  <div className="project-buttons">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-info"
                    >
                      <FaGithub /> GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-info"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;