import "../style/Carrinho.css"

// ✅ Requisito: Carrinho com adicionar, remover e editar quantidade
// ✅ Requisito: Cálculo de total no carrinho

export default function Carrinho({ carrinho, setCarrinho }) {
  const remover = (id) => {
    setCarrinho(carrinho.filter(item => item.id !== id))
  }

  const alterarQtd = (id, qtd) => {
    setCarrinho(carrinho.map(item =>
      item.id === id ? { ...item, quantidade: qtd } : item
    ))
  }

  const total = carrinho.reduce((soma, item) => soma + item.valor * item.quantidade, 0)

  return (
    <div className="carrinho-container">
      <h2>Carrinho</h2>

      {carrinho.length === 0 ? (
        <p className="mensagem-vazio">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="lista-itens">
            {carrinho.map(item => (
              <div key={item.id} className="item-carrinho">
                <img src={item.imagem} alt={item.titulo} />
                <div className="info">
                  <strong>{item.titulo}</strong>
                  <span>R$ {item.valor.toFixed(2)}</span>
                  <input
                    type="number"
                    min="1"
                    value={item.quantidade}
                    onChange={(e) => alterarQtd(item.id, Number(e.target.value))}
                  />
                </div>
                <button onClick={() => remover(item.id)}>Remover</button>
              </div>
            ))}
          </div>

          <div className="total-carrinho">
            <p><strong>Total:</strong> R$ {total.toFixed(2)}</p>
            <button className="btn-finalizar" onClick={() => alert("Compra finalizada!")}>Finalizar Compra</button>
          </div>
        </>
      )}
    </div>
  )
}
