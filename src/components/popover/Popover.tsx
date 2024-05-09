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
        // hidden={!show}
        className={`min-w-[200px] h-fit absolute ${location ? location : 'top-[100%] right-0'} z-50 ease-in-out mt-2 ${!show ? 'hidden' : ''} transition-all ease-in-out duration-300 ${className}`}
      >
        <div className='w-full rounded bg-white p-4 shadow-[0px_4px_32px_#00000026] mb-[10px]'>{content}</div>
      </div>
    </div>
  )
}

export default Popover
