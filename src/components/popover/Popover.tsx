/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useRef, useState } from 'react'

type Position = 'top' | 'bottom' | 'left' | 'right'

type PopoverProps = {
  className?: string
  children: ReactNode
  content: ReactNode
  trigger?: 'click' | 'hover'
  location?: Position
}

const Popover = ({ children, content, trigger = 'click', className, location = 'bottom' }: PopoverProps) => {
  const [show, setShow] = useState<boolean>(false)
  const [position, setPosition] = useState<Position>(location)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  const handleMouseOver = () => {
    if (trigger === 'hover') {
      setShow(true)
    }
  }

  const handleMouseLeave = () => {
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
  }, [show])

  useEffect(() => {
    if (show && popoverRef.current && wrapperRef.current) {
      const popoverRect = popoverRef.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      let newPosition: Position = position

      // Check for overflow and adjust position accordingly
      if (position === 'top' && popoverRect.bottom > viewportHeight) {
        newPosition = 'bottom'
      } else if (position === 'bottom' && popoverRect.top < 0) {
        newPosition = 'top'
      } else if (position === 'left' && popoverRect.right > viewportWidth) {
        newPosition = 'right'
      } else if (position === 'right' && popoverRect.left < 0) {
        newPosition = 'left'
      }

      setPosition(newPosition)
    }
  }, [show, position]) // Added position as a dependency

  const positionClasses: Record<Position, string> = {
    top: 'top-[100%] left-0',
    bottom: 'top-[100%] left-0',
    left: 'top-[100%] top-0',
    right: 'top-[100%] top-0'
  }

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className='h-fit relative flex justify-center'
    >
      <div onClick={() => setShow(!show)} className='w-full'>
        {children}
      </div>
      <div
        ref={popoverRef}
        className={`min-w-[200px] h-fit p-4 rounded absolute ${positionClasses[position]} z-50 mt-2 ${
          !show ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        } origin-top-right transition-all ease-in-out duration-300 ${className}`}
      >
        <div className='w-full'>{content}</div>
      </div>
    </div>
  )
}

export default Popover
