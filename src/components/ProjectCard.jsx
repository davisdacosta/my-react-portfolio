import { Link } from 'react-router-dom'

function ProjectCard({ project, index = 0 }) {
  return (
    <article className={`project-card project-card-${project.id}`}>
      <Link
        className="project-art"
        to={`/projects#${project.id}`}
        aria-label={`Read about ${project.title}`}
      >
        <span className="project-art-index">0{index + 1} / SELECTED WORK</span>
        <span className="project-art-title">{project.coverLabel}</span>
        <span className="project-art-detail">{project.coverDetail}</span>
        <span className="project-art-ui" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="project-art-arrow" aria-hidden="true">↗</span>
      </Link>

      <div className="project-info">
        <div className="project-info-heading">
          <div>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
          </div>
          <Link
            className="arrow-link"
            to={`/projects#${project.id}`}
            aria-label={`Read about ${project.title}`}
          >
            ↗
          </Link>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
