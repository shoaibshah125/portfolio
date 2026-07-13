import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

function SkillCard({ title, skills }) {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="skill-card">

        <h3 className="text-center text-info mb-4">
          {title}
        </h3>

        {skills.map((skill, index) => (
          <div key={index} className="mb-4">

            <div className="d-flex justify-content-between align-items-center">

              <div className="d-flex align-items-center">

                <span className="skill-icon me-3">
                  {skill.icon}
                </span>

                <span className="text-white">
                  {skill.name}
                </span>

              </div>

              <span className="text-info">
                {skill.level}
              </span>

            </div>

            <div className="progress mt-2">

              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

function Skills() {

  const frontend = [
    { icon: <FaHtml5 />, name: "HTML5", level: "95%" },
    { icon: <FaCss3Alt />, name: "CSS3", level: "90%" },
    { icon: <FaJs />, name: "JavaScript", level: "85%" },
    { icon: <FaReact />, name: "React.js", level: "85%" },
    { icon: <FaBootstrap />, name: "Bootstrap", level: "90%" },
  ];

  const backend = [
    { icon: <FaPhp />, name: "PHP", level: "80%" },
    { icon: <FaNodeJs />, name: "Node.js", level: "75%" },
    { icon: <SiExpress />, name: "Express.js", level: "75%" },
  ];

  const database = [
    { icon: <SiMysql />, name: "MySQL", level: "85%" },
    { icon: <SiMongodb />, name: "MongoDB", level: "75%" },
  ];

  const tools = [
    { icon: <FaGitAlt />, name: "Git", level: "85%" },
    { icon: <FaGithub />, name: "GitHub", level: "90%" },
  ];

  return (
    <section className="skills" id="skills">

      <div className="container">

        <h2 className="skills-title">
          Technical Skills
        </h2>

        <p className="skills-subtitle">
          Technologies I Work With
        </p>

        <div className="row">

          <SkillCard title="Frontend" skills={frontend} />

          <SkillCard title="Backend" skills={backend} />

          <SkillCard title="Database" skills={database} />

          <SkillCard title="Tools" skills={tools} />

        </div>

      </div>

    </section>
  );
}

export default Skills;