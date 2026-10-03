import { Link, NavLink, useLocation } from 'react-router-dom'
import '../styles/navbar.css'

function NavIcon({ name }) {
  const paths = {
    home: <><path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z" /><path d="m8 10 4-3 4 3" /></>,
    projects: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M9 4v6m6-6v6" /></>,
    about: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></>,
    top: <><path d="M12 19V5m-6 6 6-6 6 6" /></>,
    contact: <><path d="M4 5h16v12H8l-4 4z" /><path d="m7 9 5 4 5-4" /></>,
  }

  return (
    <svg
      aria-hidden="true"
      className="mobile-nav-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Navbar() {
  const location = useLocation()

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Davis — home">
          <span className="brand-mark" aria-hidden="true">D.</span>
          <span>Davis</span>
        </Link>

        <nav className="navbar-links" aria-label="Main navigation">
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </nav>

        <span className="navbar-note"><span aria-hidden="true" /> Available for good ideas</span>
      </div>

      <nav className="mobile-dock" aria-label="Mobile navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'dock-link active' : 'dock-link'}>
          <NavIcon name="home" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'dock-link active' : 'dock-link'}>
          <NavIcon name="projects" />
          <span>Work</span>
        </NavLink>
        <Link
          to="/contact"
          className={location.pathname === '/contact' ? 'dock-link dock-action active' : 'dock-link dock-action'}
          aria-label="Let's talk — contact Davis"
          aria-current={location.pathname === '/contact' ? 'page' : undefined}
        >
          <NavIcon name="contact" />
          <span>Let’s talk</span>
        </Link>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'dock-link active' : 'dock-link'}>
          <NavIcon name="about" />
          <span>About</span>
        </NavLink>
        <button
          className="dock-link dock-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <NavIcon name="top" />
          <span>Top</span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
