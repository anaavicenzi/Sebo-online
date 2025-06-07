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
    <div>
      <h2>Carrinho</h2>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {carrinho.map(item => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <strong>{item.titulo}</strong> - R$ {item.valor.toFixed(2)} x{" "}
              <input
                type="number"
                min="1"
                value={item.quantidade}
                onChange={(e) => alterarQtd(item.id, Number(e.target.value))}
                style={{ width: "50px" }}
              />
              <button onClick={() => remover(item.id)}>Remover</button>
            </div>
          ))}

          <p><strong>Total:</strong> R$ {total.toFixed(2)}</p>
          <button onClick={() => alert("Compra finalizada!")}>Finalizar Compra</button>
        </>
      )}
    </div>
  )
}
