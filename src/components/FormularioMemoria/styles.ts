// src/components/FormularioMemoria/styled.ts
import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    align-items: flex-start;
    overflow-y: auto;
  }
`

export const Modal = styled.div`
  background: white;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    border-radius: 15px;
    max-height: none;
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    border-radius: 10px;
  }

  /* Scrollbar customizada */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d4416f;
    border-radius: 10px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 20px;
  border-bottom: 2px solid #ffeef8;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 20px 20px 15px;
  }

  @media (max-width: 480px) {
    padding: 15px 15px 12px;
  }

  h2 {
    color: #d4416f;
    font-family: 'Georgia', serif;
    font-size: 1.8rem;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`

export const BotaoFechar = styled.button`
  background: none;
  border: none;
  font-size: 2.5rem;
  color: #999;
  cursor: pointer;
  line-height: 1;
  transition: color 0.3s;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #d4416f;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 35px;
    height: 35px;
  }
`

export const Formulario = styled.form`
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`

export const Campo = styled.div`
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  label {
    display: block;
    color: #d4416f;
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      margin-bottom: 6px;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  input[type='text'],
  input[type='date'],
  textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #ffeef8;
    border-radius: 10px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.3s;

    @media (max-width: 768px) {
      padding: 10px 12px;
      font-size: 0.95rem;
      border-radius: 8px;
    }

    @media (max-width: 480px) {
      padding: 8px 10px;
      font-size: 0.9rem;
    }

    &:focus {
      outline: none;
      border-color: #d4416f;
    }
  }

  textarea {
    resize: vertical;
    font-family: 'Georgia', serif;
    line-height: 1.6;
    min-height: 120px;

    @media (max-width: 480px) {
      min-height: 100px;
    }
  }
`

export const InputFile = styled.div`
  input[type='file'] {
    display: none;
  }

  label {
    display: inline-block;
    padding: 12px 30px;
    background: #d4416f;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s;
    font-weight: 500;
    text-align: center;

    @media (max-width: 768px) {
      padding: 10px 25px;
      font-size: 0.95rem;
      border-radius: 8px;
    }

    @media (max-width: 480px) {
      width: 100%;
      padding: 10px 20px;
      font-size: 0.9rem;
    }

    &:hover {
      background: #b83559;
    }
  }
`

export const PreviewImagem = styled.div`
  margin-top: 15px;

  @media (max-width: 768px) {
    margin-top: 12px;
  }

  img {
    max-width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      height: 180px;
      border-radius: 8px;
    }

    @media (max-width: 480px) {
      height: 150px;
    }
  }
`

export const BotoesAcao = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;

  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 25px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
`

export const BotaoCancelar = styled.button`
  flex: 1;
  padding: 15px;
  background: #f5f5f5;
  color: #666;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e0e0e0;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.95rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.9rem;
    width: 100%;
  }
`

export const BotaoSalvar = styled.button`
  flex: 1;
  padding: 15px;
  background: #d4416f;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #b83559;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.95rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.9rem;
    width: 100%;
  }
`
