import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../components/Layout"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Editor from "../pages/Editor"
import Carrinho from "../pages/Carrinho"
import LivroDetalhes from "../pages/LivroDetalhes"
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
  element: <Layout carrinho={props.carrinho} />,
  children: [
    { path: "home", element: <Home {...props} /> },
    { path: "carrinho", element: <Carrinho carrinho={props.carrinho} setCarrinho={props.setCarrinho} /> },
    { path: "livro/:id", element: <LivroDetalhes adicionarCarrinho={props.adicionarCarrinho} /> },
    usuario?.beneficioEditor && { path: "editor", element: <Editor /> }
  ].filter(Boolean)
}

  ])

  return <RouterProvider router={router} />
}
// Requisito (j): Navegação entre páginas com react-router-dom
// Requisito (i): Define Layout com Navbar/Footer fixos (exceto login)
// Requisito (f): Tela de login é isolada e avalia usuário logado
