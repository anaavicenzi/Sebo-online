// ✅ Requisito: Requisição HTTP com tratamento de erro
// ✅ Requisito: CRUD de livros – busca

const API_URL = "http://localhost:3000/livros"

export async function getLivros() {
  try {
    const res = await fetch(API_URL)
    return await res.json()
  } catch (err) {
    console.error("Erro ao buscar livros:", err)
    return []
  }
}

export async function addLivro(livro) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livro),
    })
    return await res.json()
  } catch (err) {
    console.error("Erro ao adicionar livro:", err)
  }
}

export async function deleteLivro(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" })
  } catch (err) {
    console.error("Erro ao excluir livro:", err)
  }
}
