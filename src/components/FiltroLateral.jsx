export default function FiltroLateral({ autores, temas, onFiltro }) {
  return (
    <aside>
      <h3>Filtrar por autor</h3>
      {autores.map((a, i) => (
        <label key={i}>
          <input type="checkbox" value={a} onChange={onFiltro} name="autor" />
          {a}
        </label>
      ))}

      <h3>Filtrar por tema</h3>
      {temas.map((t, i) => (
        <label key={i}>
          <input type="checkbox" value={t} onChange={onFiltro} name="tema" />
          {t}
        </label>
      ))}
    </aside>
  )
}
