import { Link } from "react-router-dom"
import "../style/Navbar.css"

export default function Navbar({ carrinho = [] }) {
  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0)

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
        <Link to="/carrinho" className="nav-link carrinho-link">
          <i className="fas fa-shopping-cart"></i>
          {totalItens > 0 && <span className="carrinho-badge">{totalItens}</span>}
          <span>Carrinho</span>
        </Link>
      </div>
    </nav>
  )
}

// Requisito (i): Navbar fixa no topo da aplicação SPA
// Requisito (j): Navegação entre páginas via Link
// Extra: Contador de itens no carrinho dinâmico
