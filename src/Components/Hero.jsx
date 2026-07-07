import "./Hero.css";

function Hero() {

  return (

    <section className="hero" id="home">

      <div className="hero-content">

        <h1>
          Hi, I'm <span>Naveena</span>
        </h1>

        <h2>
          Web Developer
        </h2>

        <p>
          I create attractive, responsive and user-friendly websites 
          using React, JavaScript, HTML and CSS.
          I love designing modern web experiences and learning new technologies.
        </p>

        <div className="hero-buttons">

    <a 
      href="/resume.pdf" 
      download="naveena.pdf"
    >
      <button>
        Download Resume
      </button>
    </a>


    <a href="#contact">

      <button className="contact-btn">
        Contact Me
      </button>

    </a>

</div>
      </div>


      <div className="hero-design">

        <div className="circle one"></div>

        <div className="circle two"></div>

        <div className="developer-card">

          <h3>React Developer</h3>

          <p>
            💻 Building Modern Websites
          </p>

          <p>
            🚀 Learning New Technologies
          </p>

        </div>

      </div>


    </section>

  );

}

export default Hero;