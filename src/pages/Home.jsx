import { useEffect, useState } from "react"
import { getLivros } from "../services/livroService"
import FiltroLateral from "../components/FiltroLateral"
import "../style/Home.css"
import "../style/global.css"

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
    <div className="home-container">
      <FiltroLateral autores={autores} temas={temas} onFiltro={handleFiltro} />

      <div className="home-conteudo">
        <div className="home-busca">
          <input
            type="text"
            placeholder="Buscar por título..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <i className="fas fa-search"></i>
        </div>

        <ul className="home-livros">
          {livrosFiltrados.map(l => (
            <li key={l.id} className="home-livro">
              <img src={l.imagem} alt={l.titulo} />
              <strong>{l.titulo}</strong>
              <div className="autor">{l.autor}</div>
              <div className="home-preco">R$ {Number(l.valor).toFixed(2)}</div>
              <button onClick={() => adicionarCarrinho(l)}>
                <i className="fas fa-shopping-cart"></i>
                Adicionar ao carrinho
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
