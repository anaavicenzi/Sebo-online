export function setUsuarioLogado(usuario) {
  localStorage.setItem("usuarioLogado", JSON.stringify(usuario))
}

export function getUsuarioLogado() {
  const user = localStorage.getItem("usuarioLogado")
  return user ? JSON.parse(user) : null
}
// Requisito (f): Armazena e recupera usuário logado (simulação de autenticação)
