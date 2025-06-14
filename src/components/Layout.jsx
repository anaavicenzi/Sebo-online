import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet, useLocation } from "react-router-dom"
import "../style/Layout.css"

export default function Layout() {
  const location = useLocation()
  const isLoginPage = location.pathname === "/"

  return (
    <div className="layout">
      {!isLoginPage && <Navbar />}
      <main className="main-content">
        <Outlet />
      </main>
      {!isLoginPage && <Footer />}
    </div>
  )
}
