import "../style/FiltroLateral.css"

export default function FiltroLateral({ autores, temas, onFiltro }) {
  return (
    <div className="filtro-container">
      <h3>( Categorias )</h3>

      <div className="filtro-bloco">
        <p className="filtro-titulo">Filtrar por autor</p>
        {autores.map((autor) => (
          <label key={autor}>
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

      <div className="filtro-bloco">
        <p className="filtro-titulo">Filtrar por tema</p>
        {temas.map((tema) => (
          <label key={tema}>
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
  )
}
