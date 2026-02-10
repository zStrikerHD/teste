import { Container } from './styled'
import logo from '../../assets/image/ChatGPT_Image_13_de_jan._de_2026__21_27_41-removebg-preview.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container>
      <Link to="https://www.instagram.com/gih_saanchez/">
        <img src={logo} alt="" />
      </Link>
    </Container>
  )
}

export default Header
