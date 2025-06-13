import { useEffect, useState } from "react"
import { getLivros, addLivro, deleteLivro } from "../services/livroService"
import { getUsuarios, addUsuario, deleteUsuario } from "../services/usuarioService"
import "../style/Editor.css"

export default function Editor() {
  const [livros, setLivros] = useState([])
  const [usuarios, setUsuarios] = useState([])

  const [novoLivro, setNovoLivro] = useState({
    titulo: "", autor: "", tema: "", valor: "", estado: "", imagem: ""
  })

  const [novoUsuario, setNovoUsuario] = useState({
    nome: "", email: "", senha: "", telefone: "", beneficioEditor: false
  })

  useEffect(() => {
    carregarLivros()
    carregarUsuarios()
  }, [])

  const carregarLivros = async () => {
    const dados = await getLivros()
    setLivros(dados)
  }

  const carregarUsuarios = async () => {
    const dados = await getUsuarios()
    setUsuarios(dados)
  }

  const handleChangeLivro = (e) => {
    setNovoLivro({ ...novoLivro, [e.target.name]: e.target.value })
  }

  const handleChangeUsuario = (e) => {
    const { name, value, type, checked } = e.target
    setNovoUsuario({ ...novoUsuario, [name]: type === "checkbox" ? checked : value })
  }

  const handleSubmitLivro = async (e) => {
    e.preventDefault()
    await addLivro(novoLivro)
    setNovoLivro({ titulo: "", autor: "", tema: "", valor: "", estado: "", imagem: "" })
    carregarLivros()
  }

  const handleSubmitUsuario = async (e) => {
    e.preventDefault()
    await addUsuario(novoUsuario)
    setNovoUsuario({ nome: "", email: "", senha: "", telefone: "", beneficioEditor: false })
    carregarUsuarios()
  }

  const excluirLivro = async (id) => {
    await deleteLivro(id)
    carregarLivros()
  }

  const excluirUsuario = async (id) => {
    await deleteUsuario(id)
    carregarUsuarios()
  }

  return (
    <div className="editor-container">
      <div className="editor-box">
        <h2>Cadastro de Livros</h2>
        <form onSubmit={handleSubmitLivro}>
          <input name="titulo" value={novoLivro.titulo} onChange={handleChangeLivro} placeholder="Título" />
          <input name="autor" value={novoLivro.autor} onChange={handleChangeLivro} placeholder="Autor" />
          <input name="tema" value={novoLivro.tema} onChange={handleChangeLivro} placeholder="Tema" />
          <input name="valor" value={novoLivro.valor} onChange={handleChangeLivro} placeholder="Valor" />
          <input name="estado" value={novoLivro.estado} onChange={handleChangeLivro} placeholder="Estado" />
          <input name="imagem" value={novoLivro.imagem} onChange={handleChangeLivro} placeholder="URL da imagem" />
          <button type="submit">Cadastrar Livro</button>
        </form>

        <ul>
          {livros.map((livro) => (
            <li key={livro.id}>
              {livro.titulo} - {livro.autor}
              <button onClick={() => excluirLivro(livro.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="editor-box">
        <h2>Cadastro de Usuários</h2>
        <form onSubmit={handleSubmitUsuario}>
          <input name="nome" value={novoUsuario.nome} onChange={handleChangeUsuario} placeholder="Nome" />
          <input name="email" value={novoUsuario.email} onChange={handleChangeUsuario} placeholder="Email" />
          <input name="senha" value={novoUsuario.senha} onChange={handleChangeUsuario} placeholder="Senha" />
          <input name="telefone" value={novoUsuario.telefone} onChange={handleChangeUsuario} placeholder="Telefone" />
          <label>
            <input
              type="checkbox"
              name="beneficioEditor"
              checked={novoUsuario.beneficioEditor}
              onChange={handleChangeUsuario}
            />
            Benefício de Editor
          </label>
          <button type="submit">Cadastrar Usuário</button>
        </form>

        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.nome} - {usuario.email}
              <button onClick={() => excluirUsuario(usuario.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
