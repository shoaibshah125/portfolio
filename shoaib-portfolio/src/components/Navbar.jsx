import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar(){

return(

<nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow">

<div className="container">

<a className="navbar-brand fw-bold fs-3" href="#home">

Shoaib<span className="text-info">.</span>

</a>

<button
className="navbar-toggler"
data-bs-toggle="collapse"
data-bs-target="#nav"
>

<span className="navbar-toggler-icon"></span>

</button>

<div
className="collapse navbar-collapse"
id="nav"
>

<ul className="navbar-nav ms-auto">
<li><a href="#home" className="nav-link">Home</a></li>

<li><a href="#about" className="nav-link">About</a></li>

<li><a href="#skills" className="nav-link">Skills</a></li>

<li><a href="#projects" className="nav-link">Projects</a></li>

<li><a href="#experience" className="nav-link">Experience</a></li>

<li><a href="#education" className="nav-link">Education</a></li>

<li><a href="#certifications" className="nav-link">Certifications</a></li>

<li><a href="#contact" className="nav-link">Contact</a></li>

<li><a href="#feedback" className="nav-link">Feedback</a></li>
</ul>

<div className="ms-3">

<a
href="https://github.com/shoaibshah125"
target="_blank"
className="me-3 text-white"
>

<FaGithub size={22}/>

</a>

<a
href="https://linkedin.com/in/shoaib-shah67"
target="_blank"
className="text-info"
>

<FaLinkedin size={22}/>

</a>

</div>

</div>

</div>

</nav>

);

}

export default Navbar;