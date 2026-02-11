class Memorias {
  id: number
  titulo: string
  data: string
  mensagem: string
  foto: string

  constructor(
    id: number,
    titulo: string,
    data: string,
    mensagem: string,
    foto: string
  ) {
    this.id = id
    this.titulo = titulo
    this.data = data
    this.mensagem = mensagem
    this.foto = foto
  }
}

export default Memorias
