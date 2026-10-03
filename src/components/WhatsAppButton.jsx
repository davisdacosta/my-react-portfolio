import { FaWhatsapp } from 'react-icons/fa'
import '../styles/whatsapp-button.css'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/233240315280"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Davis on WhatsApp"
    >
      <span className="whatsapp-ripple" aria-hidden="true" />
      <FaWhatsapp aria-hidden="true" />
    </a>
  )
}

export default WhatsAppButton
