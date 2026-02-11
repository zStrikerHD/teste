// src/components/Collection/styled.ts
import styled from 'styled-components'

export const Container = styled.section`
  --rose-1: #fff1f4;
  --rose-2: #ffd8e5;
  --peach-1: #ffe6d6;
  --rose-ink: #8f2b3c;
  --rose-dark: #6f1e2e;

  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: radial-gradient(
      circle at 15% 15%,
      rgba(255, 255, 255, 0.7),
      transparent 40%
    ),
    radial-gradient(
      circle at 85% 10%,
      rgba(255, 240, 244, 0.6),
      transparent 45%
    ),
    linear-gradient(135deg, var(--rose-1), var(--peach-1), var(--rose-2));
  min-height: 100vh;
  margin-top: 50px;
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }

  .colecao-momentos {
    text-align: center;
  }

  .titulo-principal {
    font-size: 3rem;
    color: #d4416f;
    font-family: 'Georgia', serif;
    margin-bottom: 10px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  .subtitulo {
    font-size: 1.2rem;
    color: #666;
    font-style: italic;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  .lista-momentos {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 768px) {
      gap: 25px;
    }
  }

  .carta {
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(212, 65, 111, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(212, 65, 111, 0.2);
    }

    @media (max-width: 768px) {
      border-radius: 10px;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }

  .carta-conteudo {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 30px;
    padding: 30px;
    align-items: start;

    @media (max-width: 1024px) {
      grid-template-columns: 250px 1fr;
      gap: 20px;
      padding: 25px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 20px;
    }
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    @media (max-width: 1024px) {
      height: 250px;
    }

    @media (max-width: 768px) {
      height: 250px;
      border-radius: 8px;
    }

    @media (max-width: 480px) {
      height: 200px;
    }
  }

  .texto {
    text-align: left;
    padding: 10px;

    @media (max-width: 768px) {
      padding: 5px;
    }
  }

  h1 {
    color: #d4416f;
    font-size: 2rem;
    margin-bottom: 10px;
    font-family: 'Georgia', serif;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  time {
    display: block;
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 20px;
    font-style: italic;

    @media (max-width: 768px) {
      font-size: 0.85rem;
      margin-bottom: 15px;
    }
  }

  p {
    color: #444;
    font-size: 1.1rem;
    line-height: 1.8;
    font-family: 'Georgia', serif;
    text-align: justify;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 15px;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 30px;
    gap: 15px;
  }
`

export const BotaoAdicionar = styled.button`
  padding: 15px 30px;
  background: #d4416f;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(212, 65, 111, 0.3);
  white-space: nowrap;

  &:hover {
    background: #b83559;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(212, 65, 111, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 25px;
    font-size: 1rem;
  }
`

export const BotoesAcao = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 8px;
  }
`

export const BotaoEditar = styled.button`
  padding: 10px 20px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s;
  flex: 1;
  min-width: 100px;

  &:hover {
    background: #357abd;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.85rem;
    min-width: auto;
  }
`

export const BotaoExcluir = styled.button`
  padding: 10px 20px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s;
  flex: 1;
  min-width: 100px;

  &:hover {
    background: #c0392b;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.85rem;
    min-width: auto;
  }
`

export const MensagemVazia = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #999;

  p {
    font-size: 1.2rem;
    margin: 10px 0;
    font-family: 'Georgia', serif;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`
