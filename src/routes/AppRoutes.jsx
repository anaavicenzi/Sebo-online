import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../components/Layout"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Editor from "../pages/Editor"
import Carrinho from "../pages/Carrinho"

// ✅ Requisito: SPA com react-router-dom
// ✅ Requisito: Roteamento entre páginas

export default function AppRoutes(props) {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home {...props} /> },
      { path: "editor", element: <Editor /> },
      { path: "carrinho", element: <Carrinho carrinho={props.carrinho} setCarrinho={props.setCarrinho} /> }
    ]
  }
])

  return <RouterProvider router={router} />
}
