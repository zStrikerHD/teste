import React, { useEffect, useRef, useState } from 'react'
import imageOne from '../../assets/image/image1.jpeg'
import imageTwo from '../../assets/image/image2.jpeg'
import imageThree from '../../assets/image/image3.jpeg'
import imageFour from '../../assets/image/image4.jpeg'
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  VolumeX,
  Volume2
} from 'lucide-react'
import {
  CarouselWrapper,
  Container,
  ImageSlide,
  NavButton,
  PlayerContainer,
  ProgressBarWrapper,
  ProgressBar,
  ProgressFill,
  ControlsWrapper,
  TimeDisplay,
  PlayButton,
  VolumeButton,
  VolumeControl,
  VolumeSlider
} from './styles'

const images = [imageOne, imageTwo, imageThree, imageFour]

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const SpotifyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [showControls, setShowControls] = useState(false)
  const [volume, setVolume] = useState(70)
  const [isMuted, setIsMuted] = useState(false)
  const duration = 180 // 3 minutos
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false)
            return 0
          }
          return prev + 0.1
        })
      }, 100)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, duration])

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Erro ao reproduzir áudio:', error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = x / rect.width
    setCurrentTime(percentage * duration)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0 && isMuted) {
      setIsMuted(false)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100
    }
  }, [volume, isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const progress = (currentTime / duration) * 100

  return (
    <Container
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      style={{ width: '100%' }}
    >
      <audio
        ref={audioRef}
        src="/music/music-1.mpeg"
        onError={(e) =>
          console.error('Erro ao carregar áudio:', e.currentTarget.error)
        }
      />
      <CarouselWrapper>
        {images.map((image, index) => (
          <ImageSlide
            key={index}
            image={image}
            active={index === currentSlide}
          />
        ))}
      </CarouselWrapper>

      <NavButton className="left" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </NavButton>
      <NavButton className="right" onClick={nextSlide}>
        <ChevronRight size={24} />
      </NavButton>

      <PlayerContainer showControls={showControls}>
        <ProgressBarWrapper visible={showControls}>
          <ProgressBar onClick={handleProgressClick}>
            <ProgressFill progress={progress} />
          </ProgressBar>
        </ProgressBarWrapper>

        <ControlsWrapper>
          <TimeDisplay>
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </TimeDisplay>

          <PlayButton onClick={handlePlayPause}>
            {isPlaying ? (
              <Pause size={16} fill="black" />
            ) : (
              <Play size={16} fill="black" />
            )}
          </PlayButton>

          <VolumeControl>
            <VolumeButton onClick={toggleMute}>
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

export default SpotifyCarousel
