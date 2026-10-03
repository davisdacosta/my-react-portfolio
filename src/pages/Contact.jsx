import '../styles/contact.css'

function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-hero">
        <div className="contact-container">

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h1>
            Let's build something
            <span> together.</span>
          </h1>

          <p className="contact-intro">
            Have a project, idea, or opportunity you'd like
            to discuss? Send me a message and I'll get back
            to you.
          </p>

        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-grid">

            <div className="contact-details">

              <div className="contact-detail">
                <span>Email</span>
                <a href="mailto:your@email.com">
                  your@email.com
                </a>
              </div>

              <div className="contact-detail">
                <span>Social</span>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram ↗
                </a>
              </div>

              <div className="contact-detail">
                <span>GitHub</span>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>

            </div>

            <form className="contact-form">

              <div className="form-group">
                <label htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit">
                Send message →
              </button>

            </form>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Contact;