import { Link } from 'react-router-dom'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <p className="eyebrow">HAVE A GOOD ONE.</p>
          <h2>Make something <span>useful.</span></h2>
          <Link className="footer-contact" to="/contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="footer-side">
          <Link to="/" className="footer-logo">D.</Link>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <p className="footer-caption">Independent builder · Ghana</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Davis</span>
        <span>Made with intention, shipped for the web.</span>
      </div>
    </footer>
  )
}

export default Footer
