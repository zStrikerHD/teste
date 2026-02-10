import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  width: 100%;

  max-width: 800px;

  margin: 0 auto;

  border-radius: 12px;

  overflow: hidden;

  background: #121212;

  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: 720px) {
    width: calc(100% - 24px);
    border-radius: 10px;
  }

  @media (max-width: 420px) {
    width: calc(100% - 16px);
  }
`

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: clamp(280px, 70vw, 520px);
`

interface ImageSlideProps {
  image: string
  active: boolean
}

export const ImageSlide = styled.div<ImageSlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: background 0.2s;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  &.left {
    left: 16px;
  }

  &.right {
    right: 16px;
  }

  @media (max-width: 720px) {
    width: 34px;
    height: 34px;

    &.left {
      left: 8px;
    }

    &.right {
      right: 8px;
    }
  }
`

interface PlayerContainerProps {
  showControls: boolean
}

export const PlayerContainer = styled.div<PlayerContainerProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  opacity: ${(props) => (props.showControls ? 1 : 0)};
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 720px) {
    opacity: 1;
    padding: 14px;
    gap: 10px;
  }
`

interface ProgressBarWrapperProps {
  visible: boolean
}

export const ProgressBarWrapper = styled.div<ProgressBarWrapperProps>`
  width: 100%;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s;

  @media (max-width: 720px) {
    opacity: 1;
  }
`

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  cursor: pointer;
  position: relative;

  &:hover {
    height: 6px;
  }
`

interface ProgressFillProps {
  progress: number
}

export const ProgressFill = styled.div<ProgressFillProps>`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #1db954;
  border-radius: 2px;
`

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`

export const TimeDisplay = styled.div`
  color: #b3b3b3;
  font-size: 12px;
  font-family: monospace;
  min-width: 80px;

  @media (max-width: 720px) {
    font-size: 10px;
    min-width: 64px;
  }
`

export const PlayButton = styled.button`
  background: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 720px) {
    width: 36px;
    height: 36px;
  }
`
export const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 120px;

  @media (max-width: 720px) {
    min-width: 96px;
    gap: 6px;
  }
`

export const VolumeButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`

export const VolumeSlider = styled.input`
  width: 80px;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }

  @media (max-width: 720px) {
    width: 64px;
  }
`
