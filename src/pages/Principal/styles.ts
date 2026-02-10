import styled, { keyframes } from 'styled-components'

const floatUp = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(-45deg) scale(0.9);
    opacity: 0;
  }
  12% {
    opacity: var(--alpha);
  }
  70% {
    opacity: var(--alpha);
  }
  100% {
    transform: translate3d(var(--drift), -130vh, 0) rotate(-45deg) scale(1.05);
    opacity: 0;
  }
`

export const PageWrapper = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 24px 0 60px;
  overflow: hidden;
  isolation: isolate;

  @media (max-width: 720px) {
    padding: 16px 0 48px;
  }
`

export const PageContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 720px) {
    gap: 16px;
  }
`

export const FloatingHearts = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`

interface HeartProps {
  $size: number
  $left: string
  $delay: number
  $duration: number
  $opacity: number
  $color: string
  $drift: string
}

export const Heart = styled.span<HeartProps>`
  position: absolute;
  left: ${(props) => props.$left};
  bottom: -12%;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background: ${(props) => props.$color};
  border-radius: 12% 12% 0 0;
  transform: rotate(-45deg);
  opacity: 0;
  animation: ${floatUp} ${(props) => props.$duration}s linear infinite;
  animation-delay: ${(props) => props.$delay}s;
  filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
  --alpha: ${(props) => props.$opacity};
  --drift: ${(props) => props.$drift};

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

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.2;
    transform: rotate(-45deg);
  }
`
