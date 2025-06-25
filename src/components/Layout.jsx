import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet, useLocation } from "react-router-dom"
import "../style/Layout.css"

export default function Layout({ carrinho }) {
  const location = useLocation()
  const isLoginPage = location.pathname === "/"

  return (
    <div className="layout">
      {!isLoginPage && <Navbar carrinho={carrinho} />}
      <main className="main-content">
        <Outlet context={{ carrinho }} />
      </main>
      {!isLoginPage && <Footer />}
    </div>
  )
}

// Requisito (i): Exibe Navbar e Footer em todas as telas, exceto login
