import '../styles/contact.css'

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const subject = `Portfolio enquiry from ${formData.get('name')}`
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      '',
      formData.get('message'),
    ].join('\n')
    const mailtoUrl = `mailto:daviswrites30@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

  return (
    <main className="contact-page">
      <section className="contact-hero page-container">
        <p className="section-label">CONTACT / YOUR IDEA STARTS HERE</p>
        <h1>Have a problem<br />worth <span>solving?</span></h1>
        <div className="contact-hero-bottom">
          <p>Tell me what you’re making, what’s getting in the way, or where you want to go next.</p>
          <span className="mono-label">NO BIG PITCH REQUIRED.</span>
        </div>
      </section>

      <section className="contact-section">
        <div className="page-container contact-grid">
          <aside className="contact-aside">
            <p className="section-label">A GOOD PLACE TO START</p>
            <h2>A little context<br /><span>goes a long way.</span></h2>
            <p>
              What are you working on? Who is it for? What would make it
              better? A few lines are plenty.
            </p>
            <a className="contact-email" href="mailto:daviswrites30@gmail.com">
              daviswrites30@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-aside-note">
              <span className="contact-note-dot" aria-hidden="true" />
              <span>Open to interesting ideas and thoughtful collaborations.</span>
            </div>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" placeholder="What should I call you?" autoComplete="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" placeholder="Where can I find you?" autoComplete="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">A little about your idea</label>
              <textarea id="message" name="message" rows="5" placeholder="What are you building? What problem are you trying to solve?" required />
            </div>
            <div className="contact-form-bottom">
              <button type="submit">Open email draft <span aria-hidden="true">↗</span></button>
              <p>Your email app will open with your message ready to send.</p>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact
