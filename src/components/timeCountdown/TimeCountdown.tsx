/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

type TimeCountdownProps = { duration: number }

const TimeCountdown: React.FC<TimeCountdownProps> = ({ duration }) => {
  const [time, setTime] = useState<number>(duration)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time - 1000)
    }, 1000)

    return () => clearTimeout(timerId)
  }, [time])

  const getFormattedTime = (milliseconds: number): string => {
    const total_seconds = Math.floor(milliseconds / 1000)
    const total_minutes = Math.floor(total_seconds / 60)
    const total_hours = Math.floor(total_minutes / 60)

    const seconds = total_seconds % 60
    const minutes = total_minutes % 60
    const hours = total_hours % 24

    return `${hours.toString().padStart(2, '0')}: ${minutes.toString().padStart(2, '0')}: ${seconds.toString().padStart(2, '0')}`
  }

  const formattedTime = getFormattedTime(time)
  const [hours, minutes, seconds] = formattedTime.split(': ')

  return (
    <div className='flex items-center gap-1'>
      <div className='size-8 rounded-[5.33px] bg-blackMain flex items-center justify-center'>
        <p className='text-[13.33px] font-customMedium text-white'>{hours}</p>
      </div>
      <div className='size-8 rounded-[5.33px] bg-blackMain flex items-center justify-center'>
        <p className='text-[13.33px] font-customMedium text-white'>{minutes}</p>
      </div>
      <div className='size-8 rounded-[5.33px] bg-blackMain flex items-center justify-center'>
        <p className='text-[13.33px] font-customMedium text-white'>{seconds}</p>
      </div>
    </div>
  )
}

export default TimeCountdown
