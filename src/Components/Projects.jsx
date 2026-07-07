import "./Projects.css";

function Projects() {

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive and attractive portfolio website developed using React and CSS. It showcases my skills, projects, education and contact details with a modern UI design.",
      tech:
        "React | JSX | CSS | JavaScript"
    },

    {
      title: "Food Order Management System",
      description:
        "A web-based food ordering application that allows users to view food items, place orders, manage customer details and track order information efficiently.",
      tech:
        "HTML | CSS | JavaScript | Java | MySQL"
    },

    {
      title: "Cloud Server Deployment using AWS",
      description:
        "Designed and deployed a cloud server environment using AWS services. Configured virtual servers, storage and basic cloud infrastructure management.",
      tech:
        "AWS EC2 | Cloud Computing | Linux | Networking"
    }
  ];


  return (

    <section id="projects">

      <h2>My Projects</h2>


      <div className="projects-container">

        {
          projects.map((project,index)=>(

            <div className="project-card" key={index}>

              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <h4>
                Technologies:
              </h4>


              <span>
                {project.tech}
              </span>


              <button>
                View Details
              </button>


            </div>

          ))
        }

      </div>


    </section>

  );

}

export default Projects;