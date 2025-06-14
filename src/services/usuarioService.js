const URL = "http://localhost:3000/usuarios"

export async function getUsuarios() {
  const res = await fetch(URL)
  return await res.json()
}

export async function addUsuario(usuario) {
  await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario)
  })
}

export async function deleteUsuario(id) {
  await fetch(`${URL}/${id}`, { method: "DELETE" })
}

export async function updateUsuario(id, usuario) {
  await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario)
  })
}
