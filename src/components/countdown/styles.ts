import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0% {
    transform: translateY(0) rotate(-6deg);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-12px) rotate(0deg);
    opacity: 0.85;
  }
  100% {
    transform: translateY(-24px) rotate(6deg);
    opacity: 0.3;
  }
`

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(231, 92, 115, 0.25);
  }
  70% {
    transform: scale(1.02);
    box-shadow: 0 0 0 12px rgba(231, 92, 115, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(231, 92, 115, 0);
  }
`

export const Wrapper = styled.section`
  --rose-1: #fff1f4;
  --rose-2: #ffd8e5;
  --peach-1: #ffe6d6;
  --rose-ink: #8f2b3c;
  --rose-dark: #6f1e2e;

  margin-top: 20px;
  position: relative;
  padding: 48px 32px 56px;
  border-radius: 28px;
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
  box-shadow: 0 10px 10px rgba(159, 68, 90, 0.25);
  overflow: hidden;
  isolation: isolate;
  color: var(--rose-ink);
  font-family: 'Cormorant Garamond', serif;

  @media (max-width: 720px) {
    padding: 36px 20px 44px;
    border-radius: 22px;
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.72rem;
  font-family: 'Manrope', sans-serif;
  color: var(--rose-dark);
  animation: ${pulse} 3.8s ease-in-out infinite;
`

export const DateTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  font-family: 'Manrope', sans-serif;
  color: var(--rose-dark);
`

export const Title = styled.h2`
  font-size: clamp(1.8rem, 3.4vw, 3rem);
  font-weight: 700;
  margin: 0;
  color: var(--rose-ink);
`

export const Subtitle = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #9b3b4d;
  max-width: 620px;
  font-family: 'Manrope', sans-serif;
`

export const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const TimeCard = styled.div`
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  padding: 18px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: 0 12px 26px rgba(159, 68, 90, 0.18);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(159, 68, 90, 0.22);
  }
`

export const TimeValue = styled.div`
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  color: var(--rose-dark);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.05em;
`

export const TimeLabel = styled.div`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #b55668;
  font-family: 'Manrope', sans-serif;
`

export const FooterNote = styled.p`
  margin: 4px 0 0;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 10px 24px rgba(159, 68, 90, 0.18);
  font-size: 1rem;
  font-family: 'Manrope', sans-serif;
  color: var(--rose-dark);

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #e75c73;
    box-shadow: 0 0 0 6px rgba(231, 92, 115, 0.15);
  }
`

export const Hearts = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
`

interface HeartProps {
  size: number
  left: string
  top: string
  delay: number
  duration: number
}

export const Heart = styled.span<HeartProps>`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  transform: rotate(-45deg);
  background: rgba(231, 92, 115, 0.35);
  border-radius: 10% 10% 0 0;
  animation: ${float} ${(props) => props.duration}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  filter: drop-shadow(0 10px 14px rgba(159, 68, 90, 0.2));

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 50%;
  }

  &::before {
    top: -50%;
    left: 0;
  }

  &::after {
    left: 50%;
    top: 0;
  }
`
