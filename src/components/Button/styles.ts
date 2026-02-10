import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(
    45deg,
    #e00905,
    #e0047c,
    #cf04e0,
    #e02f04,
    #e0524f
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 8s ease infinite;
  padding: 20px;
`

export const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const GiftButton = styled(Link)`
  background: white;
  color: #e00905;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 20px 50px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  font-family: 'Arial', sans-serif;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 15px 35px;
  }
`
