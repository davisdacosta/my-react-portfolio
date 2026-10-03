
import '../styles/projects.css'

const projects = [
  {
    title: 'Easyvo',
    category: 'Web Application',
    description:
      'A modern invoice generator designed to make creating professional invoices simple and fast.',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: '/projects/easyvo.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Titan Span Contractors',
    category: 'Business Website',
    description:
      'A modern website concept for a roofing and construction company focused on trust and conversion.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/titan-span.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
]




function Projects () {
    return (
        
        <main className="projects-page">

      <section className="projects-hero">
        <div className="projects-container">

          <p className="section-label">
            SELECTED WORK
          </p>

          <h1>
            Projects I've
            <span> built.</span>
          </h1>

          <p className="projects-intro">
            A collection of websites, applications, and
            experiments I've built while developing my
            frontend skills.
          </p>

        </div>
      </section>

      <section className="projects-list">
        <div className="projects-container">

          <div className="projects-grid">

            {projects.map((project) => (
              <article
                className="project-item"
                key={project.title}
              >
                <div className="project-item-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                <div className="project-item-content">

                  <p className="project-category">
                    {project.category}
                  </p>

                  <h2>{project.title}</h2>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live site ↗
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </div>

                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

    </main>

    )
}

export default Projects;