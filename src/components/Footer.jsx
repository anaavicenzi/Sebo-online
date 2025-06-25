import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import "../style/Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <p>Lia. Estúdio Literário © 2025</p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/liapraler/?igsh=MXJwZHlnaGQ1YmhwMA%3D%3D#" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/5548991750118" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  )
}

// Requisito (i): Footer fixo em todas as páginas (SPA)
