import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../components/Layout"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Editor from "../pages/Editor"
import Carrinho from "../pages/Carrinho"
import { getUsuarioLogado } from "../services/auth"

export default function AppRoutes(props) {
  const usuario = getUsuarioLogado()

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
        { path: "carrinho", element: <Carrinho carrinho={props.carrinho} setCarrinho={props.setCarrinho} /> },
        usuario?.beneficioEditor && { path: "editor", element: <Editor /> }
      ].filter(Boolean)
    }
  ])

  return <RouterProvider router={router} />
}
