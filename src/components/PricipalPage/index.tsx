import React, { useEffect, useRef, useState } from 'react'
import imageOne from '../../assets/image/image1.jpeg'
import { Play, Pause, VolumeX, Volume2 } from 'lucide-react'
import {
  Container,
  ImageWrapper,
  OverlayPlayButton,
  ImageBackground,
  PlayerContainer,
  ProgressBarWrapper,
  ProgressBar,
  ProgressFill,
  ControlsWrapper,
  TimeDisplay,
  VolumeControl,
  VolumeButton,
  VolumeSlider
} from './styles'

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const SpotifyPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(false)
  const [volume, setVolume] = useState(70)
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  // Sincroniza o volume do elemento áudio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100
    }
  }, [volume, isMuted])

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current
          .play()
          .catch((err) => console.error('Erro ao dar play:', err))
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Atualiza o tempo atual conforme a música toca
  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  // Pega a duração total assim que o arquivo carrega
  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  // Função para pular para um tempo específico ao clicar na barra
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = x / rect.width
      const newTime = percentage * duration

      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0) setIsMuted(false)
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <Container
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      // No mobile, o primeiro toque ativa o hover (mostra os controles)
    >
      <audio
        ref={audioRef}
        src="/music/music-1.mpeg"
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      <ImageWrapper>
        <ImageBackground image={imageOne} />

        {/* O clique agora está apenas aqui! */}
        <OverlayPlayButton
          $showControls={showControls}
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <Pause size={48} fill="white" />
          ) : (
            <Play size={48} fill="white" style={{ marginLeft: '4px' }} />
          )}
        </OverlayPlayButton>
      </ImageWrapper>

      <PlayerContainer $showControls={showControls}>
        <ProgressBarWrapper>
          <ProgressBar onClick={handleProgressClick}>
            <ProgressFill progress={progress} />
          </ProgressBar>
        </ProgressBarWrapper>

        <ControlsWrapper>
          <TimeDisplay>
            {formatTime(currentTime)} / {formatTime(duration)}
          </TimeDisplay>

          <VolumeControl>
            <VolumeButton onClick={() => setIsMuted(!isMuted)}>
              {isMuted || volume === 0 ? (
                <VolumeX size={20} />
              ) : (
                <Volume2 size={20} />
              )}
            </VolumeButton>
            <VolumeSlider
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
            />
          </VolumeControl>
        </ControlsWrapper>
      </PlayerContainer>
    </Container>
  )
}

export default SpotifyPlayer
