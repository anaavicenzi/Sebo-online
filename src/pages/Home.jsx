import { useEffect, useState } from "react"
import { getLivros } from "../services/livroService"
import FiltroLateral from "../components/FiltroLateral"

// ✅ Requisito: Filtro de livros por autor e tema
// ✅ Requisito: Busca por título
// ✅ Requisito: Botão para adicionar livro ao carrinho
// ✅ Requisito: Mostrar imagem do livro

export default function Home({ adicionarCarrinho }) {
  const [livros, setLivros] = useState([])
  const [filtroAutor, setFiltroAutor] = useState([])
  const [filtroTema, setFiltroTema] = useState([])
  const [busca, setBusca] = useState("")

  useEffect(() => {
    carregarLivros()
  }, [])

  const carregarLivros = async () => {
    const dados = await getLivros()
    setLivros(dados)
  }

  const autores = [...new Set(livros.map(l => l.autor))]
  const temas = [...new Set(livros.map(l => l.tema))]

  const handleFiltro = (e) => {
    const { name, value, checked } = e.target
    const setter = name === "autor" ? setFiltroAutor : setFiltroTema
    const arrayAtual = name === "autor" ? filtroAutor : filtroTema

    setter(checked ? [...arrayAtual, value] : arrayAtual.filter(v => v !== value))
  }

  const livrosFiltrados = livros.filter(l =>
    (filtroAutor.length === 0 || filtroAutor.includes(l.autor)) &&
    (filtroTema.length === 0 || filtroTema.includes(l.tema)) &&
    l.titulo.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <FiltroLateral autores={autores} temas={temas} onFiltro={handleFiltro} />

      <div>
        <input
          type="text"
          placeholder="Buscar por título..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <ul style={{ listStyle: "none", padding: 0 }}>
          {livrosFiltrados.map(l => (
            <li key={l.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
              <img src={l.imagem} alt={l.titulo} style={{ width: "100px", marginBottom: "5px" }} />
              <br />
              <strong>{l.titulo}</strong> - {l.autor} - R$ {l.valor.toFixed(2)}
              <br />
              <button onClick={() => adicionarCarrinho(l)}>Adicionar ao carrinho</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
