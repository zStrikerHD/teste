import CountDown from '../../components/countdown'
import Header from '../../components/Header'
import PrincipalPage from '../../components/PricipalPage'
import { cores } from '../../styles'
import { FloatingHearts, Heart, PageContent, PageWrapper } from './styles'

const hearts = [
  {
    size: 20,
    left: '6%',
    delay: 0,
    duration: 18,
    opacity: 0.62,
    color: cores.vermelho,
    drift: '12px'
  },
  {
    size: 26,
    left: '14%',
    delay: 1.6,
    duration: 22,
    opacity: 0.68,
    color: cores.vermelho,
    drift: '-14px'
  },
  {
    size: 18,
    left: '26%',
    delay: 0.8,
    duration: 17,
    opacity: 0.58,
    color: cores.vermelho,
    drift: '10px'
  },
  {
    size: 30,
    left: '34%',
    delay: 2.4,
    duration: 24,
    opacity: 0.7,
    color: cores.vermelho,
    drift: '-18px'
  },
  {
    size: 22,
    left: '46%',
    delay: 1.1,
    duration: 19,
    opacity: 0.64,
    color: cores.vermelho,
    drift: '14px'
  },
  {
    size: 28,
    left: '56%',
    delay: 3,
    duration: 23,
    opacity: 0.66,
    color: cores.vermelho,
    drift: '-10px'
  },
  {
    size: 18,
    left: '66%',
    delay: 0.5,
    duration: 16,
    opacity: 0.6,
    color: cores.vermelho,
    drift: '8px'
  },
  {
    size: 24,
    left: '74%',
    delay: 2.1,
    duration: 20,
    opacity: 0.63,
    color: cores.vermelho,
    drift: '16px'
  },
  {
    size: 32,
    left: '82%',
    delay: 3.4,
    duration: 26,
    opacity: 0.7,
    color: cores.vermelho,
    drift: '-20px'
  },
  {
    size: 20,
    left: '92%',
    delay: 1.4,
    duration: 18,
    opacity: 0.6,
    color: cores.vermelho,
    drift: '12px'
  }
]

const Principal = () => {
  return (
    <PageWrapper>
      <FloatingHearts aria-hidden="true">
        {hearts.map((heart, index) => (
          <Heart
            key={index}
            $size={heart.size}
            $left={heart.left}
            $delay={heart.delay}
            $duration={heart.duration}
            $opacity={heart.opacity}
            $color={heart.color}
            $drift={heart.drift}
          />
        ))}
      </FloatingHearts>
      <PageContent>
        <Header />
        <PrincipalPage />
        <div className="container">
          <CountDown />
        </div>
      </PageContent>
    </PageWrapper>
  )
}

export default Principal
