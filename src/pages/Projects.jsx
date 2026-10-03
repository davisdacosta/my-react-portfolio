import projects from '../data/projects.js'
import '../styles/projects.css'

function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-hero page-container">
        <p className="section-label">PROJECTS / A FEW THINGS I’VE MADE</p>
        <h1>Built to be<br /><span>useful.</span></h1>
        <div className="projects-hero-bottom">
          <p>
            Real ideas, practical problems, and the work it takes to turn them
            into something people can use.
          </p>
          <span className="mono-label">{String(projects.length).padStart(2, '0')} PROJECTS · AND COUNTING</span>
        </div>
      </section>

      <section className="project-index">
        <div className="page-container project-index-grid">
          {projects.map((project, index) => (
            <article className="project-case" id={project.id} key={project.id}>
              <div className="project-case-top">
                <span className="section-label">0{index + 1} / {project.category}</span>
                <h2>{project.title}</h2>
                <p className="project-case-summary">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
              <div className={`project-case-art project-card-${project.id}`} aria-hidden="true">
                <span className="case-art-label">{project.coverLabel}</span>
                <span className="case-art-detail">{project.coverDetail}</span>
                <span className="case-art-lines"><i /><i /><i /><i /></span>
              </div>
              <div className="project-story">
                <div>
                  <span className="mono-label">THE PROBLEM</span>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <span className="mono-label">THE APPROACH</span>
                  <p>{project.approach}</p>
                </div>
                <div>
                  <span className="mono-label">THE FOCUS</span>
                  <p>{project.focus}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects
