import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'
import portrait from '../assets/images/porfolio-hero-img.png'
import '../styles/home.css'

function Home() {
  return (
    <main>
      <section className="hero page-container" aria-labelledby="hero-title">
        <div className="hero-frame">
          <div className="hero-grain" aria-hidden="true" />
          <p className="hero-index eyebrow">INDEPENDENT DEVELOPER · GHANA</p>
          <div className="hero-coordinate mono-label" aria-hidden="true">05°36' N / 00°11' W</div>

          <div className="hero-portrait-wrap" aria-hidden="true">
            <img className="hero-portrait" src={portrait} alt="" />
          </div>

          <div className="hero-copy">
            <p className="hero-kicker"><span /> FRONTEND DEVELOPER · PRODUCT BUILDER</p>
            <h1 id="hero-title">
              Davis
              <span className="hero-title-second"> builds <i>for</i></span>
              <span className="hero-title-third">the web<span className="hero-period">.</span></span>
            </h1>
          </div>

          <div className="hero-bottom">
            <p>I turn real-world problems<br />into useful digital products.</p>
            <Link to="/projects" className="hero-explore">
              EXPLORE SELECTED WORK <span aria-hidden="true">↓</span>
            </Link>
            <p className="hero-discipline">// DESIGN · BUILD · SHIP</p>
          </div>
        </div>
      </section>

      <section className="intro-section" aria-labelledby="intro-title">
        <div className="page-container intro-grid">
          <div className="intro-heading">
            <p className="section-label">01 / A PRACTICAL KIND OF CURIOUS</p>
            <h2 id="intro-title">Not just the interface.<br />The <span>whole idea.</span></h2>
          </div>
          <div className="intro-copy">
            <p>
              I’m Davis, a frontend developer who likes taking an idea from its first
              rough sketch to something real people can use. I care about the reason
              behind the product as much as the pixels on the screen.
            </p>
            <p>
              I learn by building: working through the interface, the APIs, the
              details around launch, and whatever the problem needs next.
            </p>
            <Link className="text-link" to="/about">More about how I work <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="work-section" aria-labelledby="work-title">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-label">02 / SELECTED WORK</p>
              <h2 id="work-title">Ideas, made <span>usable.</span></h2>
            </div>
            <Link className="text-link work-all" to="/projects">All projects <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section" aria-labelledby="approach-title">
        <div className="page-container">
          <div className="approach-intro">
            <p className="section-label">03 / HOW I THINK</p>
            <h2 id="approach-title">Good work starts<br />with a <span>good question.</span></h2>
          </div>
          <div className="approach-list">
            <article className="approach-item">
              <span className="approach-number">01</span>
              <h3>Understand the why.</h3>
              <p>Get clear on the people, the problem, and what a useful solution looks like.</p>
            </article>
            <article className="approach-item">
              <span className="approach-number">02</span>
              <h3>Keep it considered.</h3>
              <p>Make the interface clear, responsive, and no more complicated than it needs to be.</p>
            </article>
            <article className="approach-item">
              <span className="approach-number">03</span>
              <h3>Build. Learn. Ship.</h3>
              <p>Work through the hard bits, learn what the project needs, and get it out into the world.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-cta" aria-labelledby="home-cta-title">
        <div className="page-container home-cta-inner">
          <p className="section-label">04 / HAVE A PROBLEM TO SOLVE?</p>
          <h2 id="home-cta-title">Let's make something<br /><span>that matters.</span></h2>
          <Link className="cta-link" to="/contact">Tell me what you're working on <span aria-hidden="true">↗</span></Link>
          <span className="cta-decoration" aria-hidden="true">D.</span>
        </div>
      </section>
    </main>
  )
}

export default Home
