// src/components/FormularioMemoria/index.tsx
import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { addMemorias, editMemorias } from '../../store/reducers/memorias'
import Memorias from '../../models/Memorias'
import * as S from './styles'

type Props = {
  memoriaParaEditar?: Memorias
  onClose: () => void
}

const FormularioMemoria = ({ memoriaParaEditar, onClose }: Props) => {
  const dispatch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [data, setData] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [foto, setFoto] = useState('')
  const [previewFoto, setPreviewFoto] = useState('')

  useEffect(() => {
    if (memoriaParaEditar) {
      setTitulo(memoriaParaEditar.titulo)
      setData(memoriaParaEditar.data)
      setMensagem(memoriaParaEditar.mensagem)
      setFoto(memoriaParaEditar.foto)
      setPreviewFoto(memoriaParaEditar.foto)
    }
  }, [memoriaParaEditar])

  const handleImagemChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const resultado = reader.result as string
        setFoto(resultado)
        setPreviewFoto(resultado)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!titulo || !data || !mensagem || !foto) {
      alert('Por favor, preencha todos os campos')
      return
    }

    const memoria = new Memorias(
      memoriaParaEditar ? memoriaParaEditar.id : Date.now(),
      titulo,
      data,
      mensagem,
      foto
    )

    if (memoriaParaEditar) {
      dispatch(editMemorias(memoria))
    } else {
      dispatch(addMemorias(memoria))
    }

    limparFormulario()
    onClose()
  }

  const limparFormulario = () => {
    setTitulo('')
    setData('')
    setMensagem('')
    setFoto('')
    setPreviewFoto('')
  }

  return (
    <S.Overlay>
      <S.Modal>
        <S.Header>
          <h2>{memoriaParaEditar ? 'Editar Memória' : 'Nova Memória'}</h2>
          <S.BotaoFechar onClick={onClose}>×</S.BotaoFechar>
        </S.Header>

        <S.Formulario onSubmit={handleSubmit}>
          <S.Campo>
            <label htmlFor="titulo">Título da Memória</label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ex: Nosso Primeiro Encontro"
            />
          </S.Campo>

          <S.Campo>
            <label htmlFor="data">Data</label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </S.Campo>

          <S.Campo>
            <label htmlFor="foto">Foto</label>
            <S.InputFile>
              <input
                type="file"
                id="foto"
                accept="image/*"
                onChange={handleImagemChange}
              />
              <label htmlFor="foto">
                {previewFoto ? 'Trocar Foto' : 'Escolher Foto'}
              </label>
            </S.InputFile>
            {previewFoto && (
              <S.PreviewImagem>
                <img src={previewFoto} alt="Preview" />
              </S.PreviewImagem>
            )}
          </S.Campo>

          <S.Campo>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Escreva aqui sua mensagem de amor..."
              rows={6}
            />
          </S.Campo>

          <S.BotoesAcao>
            <S.BotaoCancelar type="button" onClick={onClose}>
              Cancelar
            </S.BotaoCancelar>
            <S.BotaoSalvar type="submit">
              {memoriaParaEditar ? 'Salvar Alterações' : 'Adicionar Memória'}
            </S.BotaoSalvar>
          </S.BotoesAcao>
        </S.Formulario>
      </S.Modal>
    </S.Overlay>
  )
}

export default FormularioMemoria
