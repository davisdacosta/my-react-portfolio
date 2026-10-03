import '../styles/home.css'
import '../styles/responsive.css'
import ProjectCard from '../components/ProjectCard.jsx'
import { Link } from "react-router-dom";


function Home () {
    return (

         <main>
            <section className="hero">
              <div className="hero-container">
            
                <div className="hero-content">
                  <p className="hero-label">
                    FRONTEND DEVELOPER
                  </p>
            
                  <h1>
                    I build websites
                    <br />
                    that feel <span>alive.</span>
                  </h1>
            
                  <p className="hero-description">
                    I design and develop modern, responsive websites
                    that combine clean interfaces with thoughtful
                    interactions.
                  </p>
            
                  <div className="hero-actions">
                    <a href="/projects" className="hero-button primary">
                      View my work
                    </a>
            
                    <a href="/contact" className="hero-button secondary">
                      Let's talk
                    </a>
                  </div>
                </div>
            
              </div>
            </section>

            <section className="intro">
              <div className="intro-container">
                
                <div className="intro-heading">
                  <p className="section-label">ABOUT ME</p>
                
                  <h2>
                    I turn ideas into
                    <span> digital experiences.</span>
                  </h2>
                </div>
                
                <div className="intro-content">
                  <p>
                    I'm Davis, a frontend developer focused on building
                    modern websites with clean interfaces, responsive
                    layouts, and purposeful interactions.
                  </p>
                
                  <Link to="/about" className="intro-link">
                    More about me →
                  </Link>
                </div>
                
              </div>
            </section>
            <section className="projects-preview">
                <div className="projects-preview-container">

                  <div className="projects-header">
                    <div>
                      <p className="section-label">SELECTED WORK</p>

                      <h2>
                        Things I've
                        <span> built.</span>
                      </h2>
                    </div>

                    <Link to="/projects" className="projects-view-all">
                      View all projects →
                    </Link>
                  </div>

                  <div className="projects-grid">
                    <ProjectCard
                      project={{
                        title: 'Easyvo',
                        category: 'Web Application',
                        description:
                          'A modern invoice generator designed to make creating professional invoices simple and fast.',
                        image: '/projects/easyvo.jpg',
                      }}
                    />

                    <ProjectCard
                      project={{
                        title: 'Titan Span Contractors',
                        category: 'Business Website',
                        description:
                          'A modern website concept for a roofing and construction company focused on trust and conversion.',
                        image: '/projects/titan-span.jpg',
                      }}
                    />
                  </div>
                </div>
            </section>
            <section className="skills-preview">
              <div className="skills-container">

                <div className="skills-heading">
                  <p className="section-label">MY TOOLKIT</p>

                  <h2>
                    Tools I use to
                    <span> build.</span>
                  </h2>
                </div>

                <div className="skills-list">
                  <div className="skill-item">
                    <span>01</span>
                    <h3>HTML & CSS</h3>
                    <p>
                      Building structured, responsive interfaces
                      with clean and maintainable styling.
                    </p>
                  </div>

                  <div className="skill-item">
                    <span>02</span>
                    <h3>JavaScript</h3>
                    <p>
                      Creating interactive experiences and
                      connecting interfaces to APIs.
                    </p>
                  </div>

                  <div className="skill-item">
                    <span>03</span>
                    <h3>React</h3>
                    <p>
                      Building reusable components and
                      scalable frontend interfaces.
                    </p>
                  </div>

                  <div className="skill-item">
                    <span>04</span>
                    <h3>Git & GitHub</h3>
                    <p>
                      Managing code, collaborating on projects,
                      and maintaining development workflows.
                    </p>
                  </div>
                </div>

              </div>
            </section>
            <section className="contact-cta">
                <div className="contact-cta-container">

                  <p className="section-label">
                    HAVE A PROJECT IN MIND?
                  </p>

                  <h2>
                    Let's build something
                    <span> meaningful.</span>
                  </h2>

                  <p className="contact-cta-description">
                    Whether you need a website, a landing page, or a
                    frontend experience, I'd love to hear what you're
                    working on.
                  </p>

                  <Link to="/contact" className="cta-button">
                    Start a conversation →
                  </Link>

                </div>
            </section>
    </main>

    )
}

export default Home;