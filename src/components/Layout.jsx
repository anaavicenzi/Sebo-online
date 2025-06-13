import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet, useLocation } from "react-router-dom"

export default function Layout() {
  const location = useLocation()
  const isLoginPage = location.pathname === "/"

  return (
    <div>
      {!isLoginPage && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!isLoginPage && <Footer />}
    </div>
  )
}
