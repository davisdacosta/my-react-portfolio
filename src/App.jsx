import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'



function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route
          path='*'
          element={
            <main className="not-found">
              <p className="section-label">404 / PAGE NOT FOUND</p>
              <h1>Looks like this page took a different route.</h1>
              <Link className="text-link" to="/">Back to the homepage <span aria-hidden="true">↗</span></Link>
            </main>
          }
        />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>

  )
}

export default App;