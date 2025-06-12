import { useEffect, useState } from "react"
import { getLivros, addLivro, deleteLivro } from "../services/livroService"
import "../style/Editor.css"

export default function Editor() {
  const [livros, setLivros] = useState([])
  const [form, setForm] = useState({
    titulo: "", autor: "", tema: "", valor: "", estado: "", imagem: ""
  })

  useEffect(() => {
    carregarLivros()
  }, [])

  const carregarLivros = async () => {
    const dados = await getLivros()
    setLivros(dados)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addLivro(form)
    setForm({ titulo: "", autor: "", tema: "", valor: "", estado: "", imagem: "" })
    carregarLivros()
  }

  const excluir = async (id) => {
    await deleteLivro(id)
    carregarLivros()
  }

  return (
    <div className="editor-container">
      <h2>Cadastro de Livros</h2>

      <form onSubmit={handleSubmit} className="editor-form">
        <input name="titulo" value={form.titulo} onChange={handleChange} placeholder="Título" />
        <input name="autor" value={form.autor} onChange={handleChange} placeholder="Autor" />
        <input name="tema" value={form.tema} onChange={handleChange} placeholder="Tema" />
        <input name="valor" value={form.valor} onChange={handleChange} placeholder="Valor" />
        <input name="estado" value={form.estado} onChange={handleChange} placeholder="Estado" />
        <input name="imagem" value={form.imagem} onChange={handleChange} placeholder="URL da imagem" />
        <button type="submit">Cadastrar</button>
      </form>

      <h3>Lista de Livros</h3>
      <ul className="livros-lista">
        {livros.map((livro) => (
          <li key={livro.id} className="livro-item">
            <img src={livro.imagem} alt={livro.titulo} />
            <div>
              <strong>{livro.titulo}</strong> - {livro.autor} - R$ {livro.valor}
            </div>
            <button onClick={() => excluir(livro.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
