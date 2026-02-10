import { Container, GiftButton, Title } from './styles'

const Button = () => {
  return (
    <Container>
      <Title>Giovani enviou um presente especial pra você</Title>
      <GiftButton to={'/principal'}>🎁 Abrir Presente</GiftButton>
    </Container>
  )
}

export default Button
