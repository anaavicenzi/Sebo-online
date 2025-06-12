import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../style/Login.css"

// ✅ Requisito: Tela de login com validação de entrada
export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    // ✅ Requisito: Requisição HTTP com tratamento de erro (try/catch)
    try {
      const res = await fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`)
      const data = await res.json()

      // ✅ Requisito: Redirecionar para a página inicial em caso de login bem-sucedido
      if (data.length > 0) {
        navigate("/home")
      } else {
        // ✅ Requisito: Exibir mensagem de erro em caso de falha no login
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
          {/* ✅ Requisito: Exibição de erro na interface em caso de login mal-sucedido */}
          {erro && <p className="erro">{erro}</p>}
        </form>
      </div>
    </div>
  )
}
