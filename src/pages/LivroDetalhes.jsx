import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getLivroPorId } from "../services/livroService"
import "../style/LivroDetalhes.css"

export default function LivroDetalhes({ adicionarCarrinho }) {
  const { id } = useParams()
  const [livro, setLivro] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchLivro() {
      const data = await getLivroPorId(id)
      setLivro(data)
    }
    fetchLivro()
  }, [id])

  if (!livro) return <div>Carregando...</div>

  return (
    <div className="detalhes-bg">
      <div className="detalhes-voltar">
        <button className="detalhes-btn-voltar" onClick={() => navigate(-1)}>Voltar</button>
      </div>
      <div className="detalhes-container">
        <div className="detalhes-info">
          <h1 className="detalhes-titulo">{livro.titulo}</h1>
          <div className="detalhes-lista">
            <div><b>Autor:</b> {livro.autor}</div>
            <div><b>Editora:</b> {livro.editora || '-'}</div>
            <div><b>Tema:</b> {livro.tema}</div>
            <div><b>Idioma:</b> {livro.idioma || '-'}</div>
            <div><b>Páginas:</b> {livro.paginas || '-'}</div>
            <div><b>Estado:</b> {livro.estado || '-'}</div>
          </div>
          <div className="detalhes-desc">{livro.descricao || 'Sem descrição.'}</div>
          <div className="detalhes-preco">R$ {Number(livro.valor).toFixed(2)}</div>
          <button className="detalhes-btn-comprar" onClick={() => adicionarCarrinho(livro)}>Adicionar ao carrinho</button>
        </div>
        <div className="detalhes-capa">
          <img src={livro.imagem} alt={livro.titulo} />
        </div>
      </div>
    </div>
  )
} 