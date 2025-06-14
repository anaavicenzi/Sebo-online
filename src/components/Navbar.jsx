import { Link } from "react-router-dom"
import "../style/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/img/logo-lia.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/home" className="nav-link">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>
        <Link to="/editor" className="nav-link">
          <i className="fas fa-edit"></i>
          <span>Editor</span>
        </Link>
        <Link to="/carrinho" className="nav-link">
          <i className="fas fa-shopping-cart"></i>
          <span>Carrinho</span>
        </Link>
      </div>
    </nav>
  )
}
