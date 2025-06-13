import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../style/Login.css"
import { setUsuarioLogado } from "../services/auth"

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`)
      const data = await res.json()

      if (data.length > 0) {
        setUsuarioLogado(data[0])
        navigate("/home")
      } else {
        setErro("Email ou senha inválidos.")
      }
    } catch (err) {
      setErro("Erro ao tentar login. Tente novamente.")
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
          {erro && <p className="erro">{erro}</p>}
        </form>
      </div>
    </div>
  )
}
