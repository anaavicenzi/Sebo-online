import { Link } from "react-router-dom"
import "../style/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/img/logo-lia.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/editor">Editor</Link>
        <Link to="/carrinho">Carrinho</Link>
      </div>
    </nav>
  )
}
