// src/components/Collection/index.tsx
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { removeMemorias } from '../../store/reducers/memorias'
import Memorias from '../../models/Memorias'
import FormularioMemoria from '../FormularioMemoria'
import * as S from './styled'

const Collection = () => {
  const dispatch = useDispatch()
  const { memorias } = useSelector((state: RootReducer) => state.memorias)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [memoriaParaEditar, setMemoriaParaEditar] = useState<
    Memorias | undefined
  >(undefined)

  const handleEditar = (memoria: Memorias) => {
    setMemoriaParaEditar(memoria)
    setMostrarFormulario(true)
  }

  const handleExcluir = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta memória?')) {
      dispatch(removeMemorias(id))
    }
  }

  const handleFecharFormulario = () => {
    setMostrarFormulario(false)
    setMemoriaParaEditar(undefined)
  }

  const formatarData = (dataString: string) => {
    const data = new Date(dataString + 'T00:00:00')
    return data.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <>
      <S.Container>
        <div className="colecao-momentos">
          <S.Header>
            <div>
              <h2 className="titulo-principal">Nossa História de Amor</h2>
              <p className="subtitulo">
                Cada momento ao seu lado é uma lembrança que guardo no coração
              </p>
            </div>
            <S.BotaoAdicionar
              onClick={() => {
                setMemoriaParaEditar(undefined)
                setMostrarFormulario(true)
              }}
            >
              + Nova Memória
            </S.BotaoAdicionar>
          </S.Header>

          {memorias.length === 0 ? (
            <S.MensagemVazia>
              <p>Ainda não há memórias cadastradas.</p>
              <p>Clique em Nova Memória para adicionar a primeira!</p>
            </S.MensagemVazia>
          ) : (
            <ul className="lista-momentos">
              {memorias.map((memoria) => (
                <li key={memoria.id} className="carta">
                  <div className="carta-conteudo">
                    <img src={memoria.foto} alt={memoria.titulo} />
                    <div className="texto">
                      <h1>{memoria.titulo}</h1>
                      <time dateTime={memoria.data}>
                        {formatarData(memoria.data)}
                      </time>
                      <p>{memoria.mensagem}</p>

                      <S.BotoesAcao>
                        <S.BotaoEditar onClick={() => handleEditar(memoria)}>
                          ✏️ Editar
                        </S.BotaoEditar>
                        <S.BotaoExcluir
                          onClick={() => handleExcluir(memoria.id)}
                        >
                          🗑️ Excluir
                        </S.BotaoExcluir>
                      </S.BotoesAcao>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </S.Container>

      {mostrarFormulario && (
        <FormularioMemoria
          memoriaParaEditar={memoriaParaEditar}
          onClose={handleFecharFormulario}
        />
      )}
    </>
  )
}

export default Collection
