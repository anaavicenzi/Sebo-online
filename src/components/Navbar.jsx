import { Link } from "react-router-dom"
// ✅ Requisito: Navbar fixa em todas as telas (exceto login)

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#333",
      color: "#fff",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div><strong>Sebo Online</strong></div>
      <div>
        <Link to="/home" style={{ color: "#fff", marginRight: "15px" }}>Home</Link>
        <Link to="/editor" style={{ color: "#fff", marginRight: "15px" }}>Editor</Link>
        <Link to="/carrinho" style={{ color: "#fff" }}>Carrinho</Link>
      </div>
    </nav>
  )
}
