import { useEffect, useState } from "react"
import { getLivros, addLivro, deleteLivro } from "../services/livroService"

export default function Editor() {
  const [livros, setLivros] = useState([])
  const [novoLivro, setNovoLivro] = useState({
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
    setNovoLivro({ ...novoLivro, [e.target.name]: e.target.value })
  }
// ✅ Requisito: CRUD de livros – cadastro
  const handleSubmit = async (e) => {
    e.preventDefault()
    await addLivro(novoLivro)
    setNovoLivro({ titulo: "", autor: "", tema: "", valor: "", estado: "", imagem: "" })
    carregarLivros()
  }
// ✅ Requisito: CRUD de livros – exclusão
  const excluir = async (id) => {
    await deleteLivro(id)
    carregarLivros()
  }

  return (
    <div>
      <h2>Cadastro de Livros</h2>
      <form onSubmit={handleSubmit}>
        <input name="titulo" value={novoLivro.titulo} onChange={handleChange} placeholder="Título" />
        <input name="autor" value={novoLivro.autor} onChange={handleChange} placeholder="Autor" />
        <input name="tema" value={novoLivro.tema} onChange={handleChange} placeholder="Tema" />
        <input name="valor" value={novoLivro.valor} onChange={handleChange} placeholder="Valor" />
        <input name="estado" value={novoLivro.estado} onChange={handleChange} placeholder="Estado" />
        <input name="imagem" value={novoLivro.imagem} onChange={handleChange} placeholder="URL da imagem" />
        <button type="submit">Cadastrar</button>
      </form>

      <h3>Lista de Livros</h3>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>
            {livro.titulo} - {livro.autor} - R$ {livro.valor}
            <button onClick={() => excluir(livro.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
