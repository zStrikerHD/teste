import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px; /* Reduzi para parecer mais um card de música */
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #121212;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`

interface ImageProps {
  image: string
}
export const ImageBackground = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  transition: transform 0.8s ease;

  /* Efeito visual apenas ao passar o mouse (desktop) */
  ${Container}:hover & {
    transform: scale(1.05);
  }
`

interface PlayerProps {
  $showControls: boolean
}

export const OverlayPlayButton = styled.button<PlayerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Reset de estilos de botão */
  background: rgba(0, 0, 0, 0.5);
  border: none;
  outline: none;
  padding: 20px;
  border-radius: 50%;
  color: white;

  /* Interação */
  cursor: pointer;
  pointer-events: auto; /* Garante que ele receba o clique */
  z-index: 20;

  /* Visibilidade */
  opacity: ${(props) => (props.$showControls ? 1 : 0)};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: translate(-50%, -50%) scale(1.1);
  }

  /* No celular, garante que o botão seja visível para ser apertado */
  @media (max-width: 720px) {
    opacity: 1;
    background: rgba(0, 0, 0, 0.4);
  }
`

export const PlayerContainer = styled.div<PlayerProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 60%, transparent);
  // Note o uso do $ aqui também
  opacity: ${(props) => (props.$showControls ? 1 : 0)};
  transform: translateY(${(props) => (props.$showControls ? '0' : '10px')});
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ProgressBarWrapper = styled.div`
  width: 100%;
`

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);h
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  transition: height 0.2s;

  &:hover {
    height: 6px;
  }
`

export const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #1db954;
  border-radius: 2px;
`

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TimeDisplay = styled.div`
  color: #b3b3b3;
  font-size: 12px;
  font-family: 'Circular Sp', sans-serif;
`

export const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const VolumeButton = styled.button`
  background: transparent;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  display: flex;
  &:hover {
    color: white;
  }
`

export const VolumeSlider = styled.input`
  width: 70px;
  cursor: pointer;
  accent-color: #1db954;
`
