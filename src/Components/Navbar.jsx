import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <h2 className="logo">Naveena</h2>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#internships">Internships</a></li>
        <li><a href="#hackathons">Hackathons</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#leadership">Leadership</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;