import { useState } from "react"
import "../style/FiltroLateral.css"

export default function FiltroLateral({ autores, temas, onFiltro }) {
  const [buscaAutor, setBuscaAutor] = useState("")
  const [buscaTema, setBuscaTema] = useState("")

  const autoresFiltrados = autores.filter(autor => 
    autor.toLowerCase().includes(buscaAutor.toLowerCase())
  )

  const temasFiltrados = temas.filter(tema => 
    tema.toLowerCase().includes(buscaTema.toLowerCase())
  )

  const limparFiltros = () => {
    const checkboxes = document.querySelectorAll('.filtro-bloco input[type="checkbox"]')
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkbox.checked = false
        onFiltro({ target: checkbox })
      }
    })
  }

  return (
    <div className="filtro-container">
      <h3> ( Categorias ) </h3>
      <button className="btn-limpar" onClick={limparFiltros}>
        <i className="fas fa-times"></i>
        Limpar Filtros
      </button>

      <div className="filtro-bloco">
        <p className="filtro-titulo">
          <i className="fas fa-user-edit"></i>
          Filtrar por autor ({autores.length})
        </p>
        <input
          type="text"
          placeholder="Buscar autor..."
          value={buscaAutor}
          onChange={(e) => setBuscaAutor(e.target.value)}
          className="filtro-busca"
        />
        <div className="filtro-opcoes">
          {autoresFiltrados.map((autor) => (
            <label key={autor} className="filtro-opcao">
              <input
                type="checkbox"
                name="autor"
                value={autor}
                onChange={onFiltro}
              />
              {autor}
            </label>
          ))}
        </div>
      </div>

      <div className="filtro-bloco">
        <p className="filtro-titulo">
          <i className="fas fa-bookmark"></i>
          Filtrar por tema ({temas.length})
        </p>
        <input
          type="text"
          placeholder="Buscar tema..."
          value={buscaTema}
          onChange={(e) => setBuscaTema(e.target.value)}
          className="filtro-busca"
        />
        <div className="filtro-opcoes">
          {temasFiltrados.map((tema) => (
            <label key={tema} className="filtro-opcao">
              <input
                type="checkbox"
                name="tema"
                value={tema}
                onChange={onFiltro}
              />
              {tema}
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
