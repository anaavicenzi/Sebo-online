import AppRoutes from './routes/AppRoutes'
import { useState } from 'react'

export default function App() {
  const [carrinho, setCarrinho] = useState([])

  const adicionarCarrinho = (livro) => {
    const existente = carrinho.find(item => item.id === livro.id)
    if (existente) {
      setCarrinho(carrinho.map(item =>
        item.id === livro.id ? { ...item, quantidade: item.quantidade + 1 } : item
      ))
    } else {
      setCarrinho([...carrinho, { ...livro, quantidade: 1 }])
    }
  }

  return (
    <AppRoutes carrinho={carrinho} setCarrinho={setCarrinho} adicionarCarrinho={adicionarCarrinho} />
  )
}
