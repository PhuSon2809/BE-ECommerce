/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useRef, useState } from 'react'

type PopoverProps = {
  className?: string
  children: ReactNode
  content: ReactNode
  trigger?: 'click' | 'hover'
  location?: string
}

function Popover({ children, content, trigger, className, location }: PopoverProps) {
  const [show, setShow] = useState<boolean>(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleMouseOver = () => {
    if (trigger === 'hover') {
      setShow(true)
    }
  }

  const handleMouseLeft = () => {
    if (trigger === 'hover') {
      setShow(false)
    }
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false)
      }
    }

    if (show) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [show, wrapperRef])

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className='w-fit h-fit relative flex justify-center'
    >
      <div onClick={() => setShow(!show)}>{children}</div>
      <div
        className={`min-w-[200px] h-fit p-4 rounded absolute ${location ? location : 'top-[100%] right-0'} z-50 mt-2 ${!show ? 'opacity-0' : 'opacity-100'} origin-top-right transition-all ease-in-out duration-200 ${className}`}
      >
        <div className='w-full'>{content}</div>
      </div>
    </div>
  )
}

export default Popover
