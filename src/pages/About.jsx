import '../styles/about.css'

const principles = [
  {
    number: '01',
    title: 'Build for a reason.',
    description: 'Start with the person and the problem. Good interfaces are useful before they are impressive.',
  },
  {
    number: '02',
    title: 'Make the whole thing work.',
    description: 'Think past the browser: APIs, deployment, search, and the little details that help a product reach people.',
  },
  {
    number: '03',
    title: 'Stay curious. Keep shipping.',
    description: 'I am still growing, and I see each real project as a chance to learn something worth carrying forward.',
  },
]

function About() {
  return (
    <main className="about-page">
      <section className="about-hero page-container">
        <p className="section-label">ABOUT / THE PERSON BEHIND THE PIXELS</p>
        <h1>I build for the web.<br /><span>And for the people using it.</span></h1>
        <div className="about-hero-bottom">
          <p>Curious by nature. Practical by design.</p>
          <span className="mono-label">A LITTLE ABOUT DAVIS ↓</span>
        </div>
      </section>

      <section className="about-story">
        <div className="page-container about-story-grid">
          <div className="about-story-aside">
            <p className="section-label">01 / THE SHORT STORY</p>
            <span className="about-monogram" aria-hidden="true">D<span>.</span></span>
            <p className="about-caption">Learning by making<br />things that matter.</p>
          </div>
          <div className="about-story-content">
            <h2>From first line of code<br />to <span>the bigger picture.</span></h2>
            <p>
              I started with HTML, CSS, and JavaScript. Instead of keeping the
              learning in a tutorial, I kept putting it to work — moving into
              React, APIs, Git, deployment, and the practical decisions that
              turn a page into a product.
            </p>
            <p>
              That builder’s mindset is still how I approach a project. I want
              to understand who it is for, make the experience feel clear, solve
              the next problem in front of me, and ship something useful.
            </p>
            <p>
              I’m especially interested in where design, technology, and
              business meet — and in making the web work for everyday ideas
              and real local needs.
            </p>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-label">02 / WHAT I BRING</p>
              <h2>Still learning.<br /><span>Already building.</span></h2>
            </div>
            <p className="principles-intro">
              I don’t need to have every answer on day one. I do need to ask
              good questions, keep the work thoughtful, and see it through.
            </p>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-toolkit">
        <div className="page-container toolkit-grid">
          <div>
            <p className="section-label">03 / THE TOOLKIT</p>
            <h2>The tools serve<br /><span>the idea.</span></h2>
          </div>
          <div className="toolkit-content">
            <p>
              Frontend is my home base. I’m also comfortable looking beyond the
              UI when a project calls for it — connecting APIs, working with
              version control, and getting the work ready to meet the web.
            </p>
            <ul className="toolkit-list" aria-label="Tools and areas of focus">
              <li>HTML & CSS</li><li>JavaScript</li><li>React</li>
              <li>APIs</li><li>Git & GitHub</li><li>Deployment & SEO</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
