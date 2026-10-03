import '../styles/about.css'

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <div className="about-container">

          <p className="section-label">
            ABOUT ME
          </p>

          <h1>
            I'm Davis, a frontend developer
            who enjoys turning ideas into
            <span> useful digital experiences.</span>
          </h1>

        </div>
      </section>

      <section className="about-story">
        <div className="about-container">

          <div className="about-story-heading">
            <p className="section-label">
              MY STORY
            </p>

            <h2>
              Building, learning,
              <span> and experimenting.</span>
            </h2>
          </div>

          <div className="about-story-content">
            <p>
              I'm interested in the intersection of design,
              technology, and the web. I enjoy taking an idea
              from a rough concept and turning it into an
              interface that people can actually use.
            </p>

            <p>
              My current focus is frontend development,
              particularly building responsive websites and
              applications with JavaScript and React.
            </p>

            <p>
              I'm also constantly experimenting with new
              technologies, tools, and ideas that help me
              become a better developer and creator.
            </p>
          </div>

        </div>
      </section>

      <section className="about-focus">
        <div className="about-container">

          <p className="section-label">
            WHAT I FOCUS ON
          </p>

          <div className="focus-grid">

            <div className="focus-item">
              <span>01</span>
              <h3>Frontend Development</h3>
              <p>
                Building responsive interfaces with
                modern frontend technologies.
              </p>
            </div>

            <div className="focus-item">
              <span>02</span>
              <h3>Web Design</h3>
              <p>
                Creating clean interfaces that balance
                aesthetics, usability, and clarity.
              </p>
            </div>

            <div className="focus-item">
              <span>03</span>
              <h3>Problem Solving</h3>
              <p>
                Breaking ideas and problems down into
                practical solutions.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default About;