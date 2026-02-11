import { useEffect, useState } from 'react'

import {
  Badge,
  Content,
  DateTag,
  FooterNote,
  Heart,
  Hearts,
  Subtitle,
  TimeCard,
  TimeGrid,
  TimeLabel,
  TimeValue,
  Title,
  TopRow,
  Wrapper
} from './styles'

const TARGET_DATE = new Date('2026-02-14T00:00:00')

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

const getTimeLeft = (targetDate: Date) => {
  const now = Date.now()
  const difference = targetDate.getTime() - now
  const total = Math.max(difference, 0)
  const totalSeconds = Math.floor(total / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  }
}

const padValue = (value: number) => String(value).padStart(2, '0')

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(TARGET_DATE))
  const dateLabel = formatDate(TARGET_DATE)
  const isDone = timeLeft.total === 0

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(TARGET_DATE))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Wrapper>
      <Hearts>
        <Heart size={34} left="8%" top="70%" delay={0} duration={7} />
        <Heart size={24} left="18%" top="18%" delay={1.4} duration={6} />
        <Heart size={28} left="78%" top="12%" delay={0.8} duration={7.5} />
        <Heart size={20} left="88%" top="68%" delay={2.2} duration={6.5} />
      </Hearts>
      <Content>
        <TopRow>
          <Badge>Doce espera</Badge>
          <DateTag>Data {dateLabel}</DateTag>
        </TopRow>
        <Title>Contagem regressiva do nosso encontro</Title>
        <Subtitle>
          Um contador carinhoso para marcar cada segundo da nossa historia.
        </Subtitle>
        <TimeGrid>
          <TimeCard>
            <TimeValue>{padValue(timeLeft.days)}</TimeValue>
            <TimeLabel>dias</TimeLabel>
          </TimeCard>
          <TimeCard>
            <TimeValue>{padValue(timeLeft.hours)}</TimeValue>
            <TimeLabel>horas</TimeLabel>
          </TimeCard>
          <TimeCard>
            <TimeValue>{padValue(timeLeft.minutes)}</TimeValue>
            <TimeLabel>minutos</TimeLabel>
          </TimeCard>
          <TimeCard>
            <TimeValue>{padValue(timeLeft.seconds)}</TimeValue>
            <TimeLabel>segundos</TimeLabel>
          </TimeCard>
        </TimeGrid>
        <FooterNote>
          {isDone
            ? 'Chegou a hora. Que o nosso abraco seja infinito.'
            : 'Faltam poucos instantes para o nosso abraco. Estou contando.'}
        </FooterNote>
      </Content>
    </Wrapper>
  )
}

export default CountDown
