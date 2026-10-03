import { Link } from 'react-router-dom'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Davis
          </Link>

          <p>
            Frontend developer building modern
            digital experiences.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Davis. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;